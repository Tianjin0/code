var ocase = document.querySelector("ul[id=num]");
var oli = document.querySelectorAll("li");
var opics = document.querySelector("div[id=pics]");
var oimg = document.querySelectorAll("img");
var oleft = document.querySelector("span[id=left]");
var oright = document.querySelector("span[id=right]");
var index = 0;

function switchimg () {
  for (var i = 0;i < oli.length;i++) {
    oli[i].className = "";
    oimg[i].className = "";
  }
  oli[index].className = "selected";
  oimg[index].className = "selected";
}

var timer = setInterval (function () {
  index++;
  if (index == oimg.length) {
    index = 0;
  }
  switchimg(index);
},1000);

opics.onmouseover = function () {
  clearInterval(timer);
};
opics.onmouseout = function () {
  timer = setInterval (function () {
    switchimg(index);
  },1000);
};
