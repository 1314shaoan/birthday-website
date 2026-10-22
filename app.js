/* ============ 共享脚本：导航 / 气球 / 音乐 / 彩带 ============ */

const SITE = (() => {
  const pages = [
    { href: "unlock.html", label: "解锁" },
    { href: "index.html", label: "首页" },
    { href: "wish.html", label: "祝福" },
    { href: "memories.html", label: "回忆" },
    { href: "play.html", label: "彩蛋" },
  ];

  const current = location.pathname.split("/").pop() || "index.html";

  function injectChrome() {
    // 顶部导航
    const nav = document.createElement("div");
    nav.className = "nav";
    nav.innerHTML =
      `<a class="logo" href="index.html">🎂 ${CONFIG.name}的生日小站</a>` +
      pages
        .map(
          (p) =>
            `<a class="page${p.href === current ? " active" : ""}" href="${p.href}">${p.label}</a>`
        )
        .join("");
    document.body.prepend(nav);

    // 背景气球
    const field = document.createElement("div");
    field.className = "balloons";
    const palette = [
      ["#ffb26b", "#e8632c"],
      ["#ffd76e", "#e8a02c"],
      ["#ffe3b8", "#e8952c"],
      ["#f7d9a0", "#d98e2c"],
      ["#ffc3a0", "#e05c3a"],
    ];
    for (let i = 0; i < 12; i++) {
      const b = document.createElement("div");
      b.className = "balloon";
      const [c1, c2] = palette[i % palette.length];
      b.style.setProperty("--c1", c1);
      b.style.setProperty("--c2", c2);
      b.style.left = Math.random() * 100 + "%";
      b.style.animationDuration = 14 + Math.random() * 16 + "s";
      b.style.animationDelay = -Math.random() * 30 + "s";
      b.style.transform = `scale(${0.6 + Math.random() * 0.9})`;
      field.appendChild(b);
    }
    document.body.appendChild(field);

    // 底部页脚
    const footer = document.createElement("footer");
    footer.innerHTML = `用 ❤️ 为 <b>${CONFIG.name}</b> 制作 · Happy Birthday ${CONFIG.emoji}`;
    document.body.appendChild(footer);

    // 流动态：极光光斑 + 底部波浪
    const aurora = document.createElement("div");
    aurora.className = "aurora";
    aurora.innerHTML = "<span></span><span></span><span></span>";
    document.body.prepend(aurora);

    const waves = document.createElement("div");
    waves.className = "waves";
    waves.innerHTML = '<div class="wave w1"></div><div class="wave w2"></div>';
    document.body.appendChild(waves);

    // 右下角音乐按钮
    const btn = document.createElement("button");
    btn.className = "music-btn";
    btn.title = "播放 / 停止生日歌";
    btn.textContent = "🎵";
    document.body.appendChild(btn);
    btn.addEventListener("click", toggleMusic);

    // 尊重用户上次的音乐选择
    if (localStorage.getItem("bday-music") === "on") {
      startMusic();
    }
  }

  /* ---- Web Audio 生日歌（无需任何音频文件） ---- */
  let audioCtx = null;
  let musicTimer = null;

  function noteFreq(semitone) {
    return 440 * Math.pow(2, semitone / 12);
  }

  // 《祝你生日快乐》旋律（以 C4 为 0）：[音, 拍]
  const MELODY = [
    [0, 0.75], [0, 0.25], [2, 1], [0, 1], [5, 1], [4, 2],
    [0, 0.75], [0, 0.25], [2, 1], [0, 1], [7, 1], [5, 2],
    [0, 0.75], [0, 0.25], [12, 1], [9, 1], [5, 1], [7, 1], [5, 2],
    [10, 0.75], [10, 0.25], [9, 1], [5, 1], [7, 1], [12, 2],
  ];

  function playRound(ctx, master) {
    const beat = 0.42;
    let t = ctx.currentTime + 0.05;
    MELODY.forEach(([semi, len]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = noteFreq(semi);
      const dur = len * beat;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.5, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.92);
      osc.connect(gain).connect(master);
      osc.start(t);
      osc.stop(t + dur);
      t += dur;
    });
    // 一轮结束停 1.2s 再循环
    musicTimer = setTimeout(() => {
      if (audioCtx) playRound(audioCtx, master);
    }, (t - ctx.currentTime) * 1000 + 1200);
  }

  function startMusic() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const master = audioCtx.createGain();
    master.gain.value = 0.6;
    master.connect(audioCtx.destination);
    audioCtx._master = master;
    playRound(audioCtx, master);
    document.querySelector(".music-btn").classList.add("playing");
    localStorage.setItem("bday-music", "on");
  }

  function stopMusic() {
    clearTimeout(musicTimer);
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    const btn = document.querySelector(".music-btn");
    if (btn) btn.classList.remove("playing");
    localStorage.setItem("bday-music", "off");
  }

  function toggleMusic() {
    audioCtx ? stopMusic() : startMusic();
  }

  /* ---- 彩带礼花 ---- */
  const CONFETTI_COLORS = ["#e8632c", "#ffd76e", "#ff9f43", "#d9542f", "#f7b267", "#f4845f"];

  function confetti(count = 120) {
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "confetti-piece";
      p.style.left = Math.random() * 100 + "vw";
      p.style.background =
        Math.random() < 0.7
          ? CONFETTI_COLORS[(Math.random() * CONFETTI_COLORS.length) | 0]
          : `hsl(${20 + Math.random() * 40}, 90%, ${60 + Math.random() * 15}%)`;
      p.style.animationDuration = 2.2 + Math.random() * 2 + "s";
      p.style.animationDelay = Math.random() * 0.5 + "s";
      p.style.width = 6 + Math.random() * 8 + "px";
      p.style.height = 10 + Math.random() * 10 + "px";
      p.style.borderRadius = Math.random() < 0.4 ? "50%" : "2px";
      document.body.appendChild(p);
      p.addEventListener("animationend", () => p.remove());
    }
  }

  /* ---- 门禁：未解锁一律弹回解锁页 ---- */
  const UNLOCK_KEY = "bday-unlocked";

  function guard() {
    const isUnlockPage = (location.pathname.split("/").pop() || "index.html") === "unlock.html";
    if (isUnlockPage) return;
    if (localStorage.getItem(UNLOCK_KEY) !== "yes") {
      location.replace("unlock.html");
      document.body.style.visibility = "hidden"; // 跳转前不闪露内容
    }
  }

  /* ---- 流动态：页面入场 / 离页淡出 / 滚动浮现 ---- */
  function initFlow() {
    // 入场动画
    document.body.classList.add("page-enter");

    // 站内链接：先整页淡出再跳转
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || /^(https?:|mailto:|javascript:)/i.test(href)) return;
      e.preventDefault();
      document.body.classList.add("page-exit");
      setTimeout(() => (location.href = href), 300);
    });

    // 通用滚动浮现：时间线条目 / 照片瓷砖 / 快捷卡 / 各区块卡片
    const revealTargets = document.querySelectorAll(
      ".tl-item, .photo-tile, .quick-card, .card, .eggs-lane, .egg-result, .memory-grid, .wish-card, .play-section-title, .section-label, .hint-card, .win-banner"
    );
    revealTargets.forEach((el) => el.classList.add("flow-reveal"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("show");
          io.unobserve(en.target);
        }
      }),
      { threshold: 0.1 }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  /* ---- 页面标题加名字 ---- */
  function init() {
    guard();
    injectChrome();
    initFlow();
    const nameInTitle = document.body.dataset.title;
    if (nameInTitle) {
      document.title = `${nameInTitle} · ${CONFIG.name}的生日小站`;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return { confetti };
})();
