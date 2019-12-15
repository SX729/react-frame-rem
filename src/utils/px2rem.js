/**
 * Created by zhang on 2019/11/6.
 */
// 基准大小
const baseSize = 16
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 1024 宽的缩放比例，可根据自己需要修改。如果设计稿是750，那就改为750
  const scale = document.documentElement.clientWidth / 1024
  // const scale = document.body.clientWidth / 1024
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  // document.documentElement.style.fontSize =30+'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
