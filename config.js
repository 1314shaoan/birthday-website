/* ==========================================================
   🎂 生日网站配置 —— 只改这一个文件即可全站生效
   ========================================================== */
const CONFIG = {
  // 寿星名字（会自动用于全站标题与祝福语）
  name: "李梨",

  // 生日日期（月 / 日），用于首页倒计时与年龄计算
  birthday: { month: 11, day: 13 },

  // 出生年份：用于计算周岁
  birthYear: 2007,

  // 出生时刻（北京时间，24 小时制）：解锁页年龄计时器的起点
  birthDateTime: "2007-11-13 00:00:00",

  // 首页大标题旁的表情符号
  emoji: "🎉",

  // 解锁页暗号（三者全部答对才能解锁）
  unlock: {
    name: "李梨",
    password: "20261113",
    birthday: "19", // 第 19 个生日
  },

  // 祝福页循环展示的祝福语（想加几条加几条）
  wishes: [
    "生日快乐！愿你的世界永远闪闪发光 ✨",
    "又长大一岁啦，愿你眼里有光、心中有爱 🌟",
    "愿新的一岁：平安喜乐，得偿所愿 🎈",
    "健康、快乐、自由，还有被爱包围 💖",
    "所有的好运正在路上，请签收 🍀",
  ],

  // 回忆页时间线（日期随便写，中文即可）
  timeline: [
    { date: "2007.11.13", title: "你来到这个世界", text: "一个小天使降落人间，故事从这里开始。" },
    { date: "2018.09", title: "我们相遇", text: "命运的齿轮开始转动，感谢那天遇见你。" },
    { date: "2022.06", title: "一起毕业旅行", text: "海边、日落、晚风，和最好的你们。" },
    { date: "2023.10", title: "第一次一起看演唱会", text: "荧光海的夜里，你的笑容比灯光还亮。" },
    { date: "2024.05", title: "那次说走就走的爬山", text: "累到不行，但山顶的风真的很甜。" },
    { date: "2026.11.13", title: "19 岁生日快乐！", text: "愿往后的每一年，都有人为你点灯唱歌。" },
  ],

  // 照片墙：把照片放进 assets/photos/，然后把文件名填进来
  // 没放照片也没关系：会自动显示"照片位"占位卡片
  photos: [
    // "1.jpg", "2.jpg", ...
  ],
};

/* 小工具：根据当前日期与配置算出倒计时/年龄 */
function getBirthdayInfo() {
  const now = new Date();
  const y = now.getFullYear();
  const bdayThisYear = new Date(y, CONFIG.birthday.month - 1, CONFIG.birthday.day);
  let target = bdayThisYear;
  if (now > new Date(y, CONFIG.birthday.month - 1, CONFIG.birthday.day, 23, 59, 59)) {
    target = new Date(y + 1, CONFIG.birthday.month - 1, CONFIG.birthday.day);
  }
  const days = Math.ceil((target - now) / 86400000);
  const isToday = now.getMonth() === CONFIG.birthday.month - 1 && now.getDate() === CONFIG.birthday.day;
  let age = y - CONFIG.birthYear;
  if (!isToday && now < bdayThisYear) age--;
  return { days, isToday, age };
}
