# 募資平台_拼拼
這次的募資網站，運用BootStrap5為主要框架來製作，製作過程中遇到的困難點主要有兩個:
1. Sass 自訂樣式修改 [文章一](https://hoyis-note.coderbridge.io/2021/06/01/BS5-SCSS/)  [文章二](https://hoyis-note.coderbridge.io/2021/05/31/SASS-SCSS/)
2. 使用BS-tooltip/表單驗證時的JS部分
3. Scroll 事件運用


-----
## tooltip 工具提示框
基本上的設定在BS5上都寫得非常清楚，但特別需要注意的是
**tooltip出於效能原因工具提示是選擇性加入的，因此你必須自己將它們初始化**
初始化需要再JS加上以下程式碼
```
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
```

## 表單驗證
使用需要加上此段程式碼
```
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    },
    false
    );
  });
```

-----
## Scroll 事件運用
募資網站中，我想要做到
1. 點擊專案募資的按鈕，移動到表單區塊。
2. 手機下方釘選的募資按鈕，只在中間區塊時出現。

### 點擊專案募資的按鈕，移動到表單區塊
這邊我使用 **scrollIntoView** 的方式
點擊後將指定區塊移入視窗中
```
const gotoform = document.querySelector('.gotoform');
const formPost = document.querySelector("#fillform");
function GotoForm(e){
  formPost.scrollIntoView({ behavior: 'smooth'});
}
gotoform.addEventListener('click',GotoForm,false);
```

### 手機下方釘選的募資按鈕，在底部表單出現後消失
製作的觀念:
讓 特定物件 在 滾動到某個 特定高度 時消失，我們需要先取得想要物件消失的 特定高度!
    ![](https://static.coderbridge.com/img/hoyi-23/c4d5d11e5c34473fa63aef4ea5ba0d77.png)

1. 首先，取得顯示範圍最底部的高度。
offsetTop: 回傳元素和 offsetParent(母元素) 之間的距離。
clientHeight: 元素所包含的「子元素」的高度，其中包含了padding，但不包含邊界及捲軸。
2. 第二，動態取得視窗範圍最底部的高度。
3. 第三，條件句。當 **視窗範圍最底部的高度** 大於 **顯示範圍最底部的高度**時，隱藏特定物件。
```
document.onscroll = function() {
  var phoneBtn = document.getElementById('phone-btn');
  var showArea = document.getElementById('main');
  var showArea_top = showArea.offsetTop;
  var showArea_height = showArea.clientHeight;
  var showArea_bottom = showArea_top + showArea_height;
  console.log(showArea_bottom);
  var scrollTop = document.documentElement.scrollTop;
  var viewport_height = document.documentElement.clientHeight;
  var scrollTop_bottom = scrollTop + viewport_height;
  console.log(scrollTop_bottom);
  if(scrollTop_bottom > showArea_bottom){
    phoneBtn.style.display='none';
  }else{
    phoneBtn.style.display='';
  }
};
```
