var csslist = document.querySelector(".top-nav").classList

const toggleblack = (chkel) => {
  console.log(chkel)
  let element = document.querySelector(".top-nav");
    if(chkel.checked == true){
      element.classList.add("blackstyle");
    } else{
      element.classList.remove("blackstyle");
    }
    console.log(chkel.checked)
};

// window.addEventListener("DOMContentLoaded", function() {
//   document.querySelector("#addcss").addEventListener('change', function(el) {
//   console.log(el.target.checked);
//   localStorage.setItem('input_checked', el.target.checked );
//   if ( localStorage.getItem('input_checked') !== null ) {
//       document.querySelector('#chk').checked = localStorage.getItem('input_checked') === 'true';
//     }
//   }
// });
  
/*進場動態*/

setTimeout(function () {
    $(".top-nav").removeClass("pre-rehearsal");
}, 800);/*拿掉隱藏用CSS*/
setTimeout(function () {
    $(".LinkList").removeClass("start-ani");
}, 7000);/*拿掉延遲用CSS*/