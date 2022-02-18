// 轮播的滑块
const wrappers = document.querySelectorAll(".wrapper");
// 缩览图
const thumbnails = document.querySelectorAll(".thumbnailsContainer li");
// loading
const loading = document.querySelectorAll(".loadingContianer .loading");

opacityWrapper();

// 显示第一张图片
updateStyle(0);
let number = 0;
let timer;
// 轮播
timer = setInterval(loop, 6000);

// 点击缩览图时
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = () => {
    clearInterval(timer);
    opacityWrapper();
    updateStyle(i);
    number = i;
    timer = setInterval(loop, 6000);
  };
}

// 初始化函数,该函数把所有 图片设置为透明
function opacityWrapper() {
  for (let i = 0; i < thumbnails.length; i++) {
    // wrappers[i].style.opacity = 0;
    // loading[i].classList.remove("active");
    // thumbnails[i].style.backgroundColor = "";
    updateStyle(i, 0, "remove", "");
  }
}
// 轮播函数
function loop() {
  opacityWrapper();
  number++;
  if (number == wrappers.length) number = 0;
  updateStyle(number);
}
// 更改样式
function updateStyle(index, opacity = 1, method = "add", color = "#252525") {
  wrappers[index].style.opacity = opacity;
  loading[index].classList[method]("active");
  thumbnails[index].style.backgroundColor = color;
}
