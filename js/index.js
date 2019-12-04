// Your code goes here
// var glow = $(".logo-heading");
// setInterval(function(){
//     glow.toggleClass('glow');
// }, 1000);



const logoImg = document.querySelector(".logo-heading")
console.log(logoImg);
//1. mouseenter 
logoImg.addEventListener("mouseenter", () => {
    logoImg.style.transform = "scale(2)";
    logoImg.style.transition = "transform 0.3s"
  })
  //2.mouse leave
  logoImg.addEventListener("mouseleave", () => {
    logoImg.style.transform = "scale(1)"
  });

//3. on click event
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "gold";
    })
  })

//4. double click event
const colorText = document.querySelector('body');
colorText.addEventListener("dblclick", () => {
    colorText.style.color= "orange";
    colorText.style.background= "black";
})

//5. keydown
//this checks wha key pressed on console
window.addEventListener('keydown', event => {
    //key pressed
    console.log(event.key)
})

//6. auxclick
const rotImg = document.querySelector(".img-content")

rotImg.addEventListener("auxclick", () => {
    rotImg.style.transform="rotate(30deg)"
})

//7. load
//this also prints on the console
window.addEventListener('load', e => {
    console.log("You are now connected to the mainframe.");
})

// 8.Wheel
const bod = document.querySelector('body');
const navHeader = document.querySelector('.main-navigation');
console.log(navHeader);
bod.addEventListener('wheel', () => {
    navHeader.style.position="absolute";
    navHeader.style.top="150%";
    navHeader.style.transform="rotate(0.9turn)";
})

//9. Drag
const lastImg = document.querySelector('.content-destination img');
lastImg.addEventListener('drag', () => {
    lastImg.style.width="100%";
    navHeader.style.transform="";
})

//10.Mouseover
const h2M = document.querySelector('.text-content h2')
h2M.addEventListener('mouseover', () => {
    navHeader.style.position="fixed";
    navHeader.style.top="0";
    colorText.style.color= "hotpink";

})
