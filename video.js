// 因为下面要控制display样式，所以用id来获取节点比较好。
var iphone = document.getElementById("iphone-box");
var pc = document.getElementById("pc-box");
var mask = document.getElementById("mask")
// 判断PC端还是移动端
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true; 
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
        }
    }
    return flag; //为true则表示PC端
}

if (IsPC()) {
    pc.style.display = "block"
} else {
    iphone.style.display = "block"
}



// 判断是否为微信中打开
function isWeiXin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') != -1) {
      return true;
    } else {
      return false;
    }
}
// 如果是微信打开则显示蒙层
if (isWeiXin()) {
    mask.style.display = "block"
}
// 点击下载按钮
function download(){
    if(isWeiXin()){
        alert("请在浏览器中打开")
    }else {
        console.log(1)
    }
}