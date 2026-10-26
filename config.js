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
    password: "20071113", // 什么时候的生日（8 位数字：年月日）
    birthday: "19", // 第几个生日
  },

  // 祝福页循环展示的祝福语（想加几条加几条）
  wishes: [
    "生日快乐！愿你的世界永远闪闪发光 ✨",
    "又长大一岁啦，愿你眼里有光、心中有爱 🌟",
    "愿新的一岁：平安喜乐，得偿所愿 🎈",
    "健康、快乐、自由，还有被爱包围 💖",
    "所有的好运正在路上，请签收 🍀",
  ],

  // ============ 回忆页：这一年的表情包聊天记录 ============
  // 头像：把她的头像/表情包头像图片放进 assets/photos/，填文件名即可显示；
  // 留空则显示 emojiAvatar 作为占位
  chatAvatar: "", // 例如 "avatar.jpg"
  emojiAvatar: "🌸",

  // 聊天记录：side: "left" = 她发的气泡；side: "right" = 对面（你）发的
  // text: 文字消息；emoji: 大表情；img: 图片文件名（放 assets/photos/）
  // 想加几条加几条，顺序就是聊天顺序
  chatMessages: [
    { side: "right", text: "在干嘛" },
    { side: "left", text: "谁让你思考了" },
    { side: "left", emoji: "👌" },
    { side: "left", text: "不是" },
    { side: "left", text: "昂" },
    { side: "right", text: "精准击败率 0.12 也有进步！" },
    { side: "left", text: "现在我无法选中了" },
    { side: "left", emoji: "😊" },
    { side: "left", emoji: "🌚" },
    { side: "left", text: "就喜欢看", emoji: "😄😄😄😄" },
    { side: "left", text: "你干嘛", emoji: "🌚" },
    { side: "left", text: "嘻嘻" },
    { side: "left", text: "哇塞", emoji: "🤣" },
    { side: "left", text: "谁让你笑了", emoji: "🌝" },
    { side: "left", text: "我不玩游戏了" },
    { side: "left", text: "我游戏了" },
    { side: "right", text: "可以啊" },
    { side: "right", emoji: "🙂" },
    { side: "right", text: "是人？" },
    { side: "right", text: "不告诉你" },
    { side: "left", text: "我不说，你自己想办法知道吗" },
    { side: "right", emoji: "🤐" },
    { side: "right", text: "逆天" },
    { side: "left", text: "真的要去睡觉 别熬夜" },
    { side: "left", sticker: "无力" },
    { side: "left", emoji: "🫣" },
    { side: "right", text: "鹅鹅鹅，和你玩了很多游戏，虽然你菜菜的，但我至少不嫌弃你对吧" },
    { side: "left", emoji: "🤬" },
    { side: "right", text: "哦对你还是个象棋小高手" },
    { side: "right", text: "真的，下次你还是和我下五子棋吧，下象棋你老是求和哈哈哈" },
    { side: "left", emoji: "🌚" },
    { side: "left", text: "哼，此仇不报非女子" },
  ],

  // ============ 游戏搭子档案（回忆页游戏卡） ============
  gameProfile: {
    nickname: "秋叶霜",
    gameId: "秋叶霜#95703",
    uid: "ID: 031086011",
    rank: "青铜I · 20分",
    level: "Lv84",
    hours: "398h",
    kda: "1.28",
    winRate: "22.2%",
    acs: "194.5",
    kast: "65.9%",
    mainHero: "炼狱",
    // 最近战绩（result: "胜"/"负"）
    recent: [
      { result: "胜", map: "迷核", score: "19/14/7", time: "10-24 21:47" },
      { result: "负", map: "炼狱", score: "7/18/13", time: "10-24 20:59" },
      { result: "负", map: "炼狱", score: "14/20/19", time: "10-23 22:15" },
    ],
    // 求和实锤照片（放 assets/photos/，留空则隐藏该区块）
    drawPhoto: "chess-draw.jpg",
    drawCaption: "「对方请求和棋」—— 象棋桌上的日常，证据已永久保存",
    // 底部吐槽/情话
    quote: "胜率 22.2%，但快乐 100%。五子棋局已预约，象棋求和次数：保密 🤫",
  },

  // 回忆页时间线（保留在页面底部，往下翻还有这一年的大事记）
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
