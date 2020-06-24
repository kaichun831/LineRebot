module.exports = async function App(context) {
  var text = context.event.text;
  if (text == 'hi') {
    return SayHi;
  } else if (text.match('凱鈞') || text.match('KG')) {
    return SayLove;
  } else if (text == '幹' || text == '乾') {
    return dirtyTalk;
  } else if (text.match('是誰')) {
    return whoUR;
  } else if (text.match('哈哈哈')) {
    return laugh;
  } else if (text.match('親愛的')) {
    return baby;
  } else if (text.match('閉嘴')) {
    return shutUp;
  }
  return null;
  // return context.sendText(context.event.text);
};

async function SayHi(context) {
  await context.sendText(`Hi`);
}
async function SayLove(context) {
  await context.sendText('Love U');
}
async function dirtyTalk(context) {
  await context.sendText('你再說一次試試看? 明天就是端午節，你不想當粽子吧');
}
async function whoUR(context) {
  await context.sendText('來自火星的K');
}
async function laugh(context) {
  await context.sendText('有什麼好笑的，我也要笑 哈哈哈哈');
}
async function baby(context) {
  await context.sendText('我也是你親愛的嗎?');
}
async function shutUp(context) {
  await context.sendText('請你用你的嘴讓我閉上');
}
