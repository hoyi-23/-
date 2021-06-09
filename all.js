// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//scroll事件
//點擊主要專案區塊-贊助專案-滾動到贊助表單
const gotoform = document.querySelectorAll('.gotoform');
const formPost = document.querySelector("#fillform");
function GotoForm(e){
  formPost.scrollIntoView({ behavior: 'smooth'});
}
gotoform.forEach(btn => btn.addEventListener('click',GotoForm,false));

//點擊頁面選單將頁面移至畫面內
function heightToTop(ele) {
  let bridge = ele;
  let root = document.body;
  let height = 0;
  do {
    height += bridge.offsetTop;
    bridge = bridge.offsetParent;
  } while (bridge !== root);

  return height;
}
function goToTab() {
  window.scrollTo({
    top: heightToTop(document.getElementsByClassName("tab-content")[0]) - 70,
    behavior: "smooth",
  });
}

//hide elements(手機贊助釘選按鈕) when user reaches the bottom of the webpage
document.onscroll = function() {
  const phoneBtn = document.getElementById('phone-btn');
  const showArea = document.getElementById('main');
  const showArea_top = showArea.offsetTop;
  const showArea_height = showArea.clientHeight;
  const showArea_bottom = showArea_top + showArea_height;
  console.log(showArea_bottom);
  const scrollTop = document.documentElement.scrollTop;
  const viewport_height = document.documentElement.clientHeight;
  const scrollTop_bottom = scrollTop + viewport_height;
  console.log(scrollTop_bottom);
  if(scrollTop_bottom > showArea_bottom){
    phoneBtn.style.display='none';
  }else{
    phoneBtn.style.display='';
  }
};


//表單驗證
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
})();