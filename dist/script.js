// var csslist = document.querySelector(".top-nav").classList

// const toggleblack = (chkel) => {
//   console.log(chkel)
//   let element = document.querySelector(".top-nav");
//     if(chkel.checked == true){
//       element.classList.add("blackstyle");
//     } else{
//       element.classList.remove("blackstyle");
//     }
//     console.log(chkel.checked)
// };
  
/*進場動態*/

setTimeout(function () {
    document.querySelector(".top-nav").classList.remove("pre-rehearsal");
}, 800);/*拿掉隱藏用CSS*/
setTimeout(function () {
    document.querySelector(".linkList").classList.remove("start-ani");
}, 3500);/*拿掉延遲用CSS*/