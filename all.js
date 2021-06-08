// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//scroll事件
//點擊主要專案區塊-贊助專案-滾動到贊助表單
const gotoform = document.querySelector('.gotoform');
const formPost = document.querySelector("#fillform");
function GotoForm(e){
  formPost.scrollIntoView({ behavior: 'smooth'});
}
gotoform.addEventListener('click',GotoForm,false);

//hide elements(手機贊助釘選按鈕) when user reaches the bottom of the webpage

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