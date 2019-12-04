// Your code goes here
// var glow = $(".logo-heading");
// setInterval(function(){
//     glow.toggleClass('glow');
// }, 1000);

// 1. mouse events

const logoImg = document.querySelector(".logo-heading")
console.log(logoImg);

logoImg.addEventListener("mouseenter", () => {
    logoImg.style.transform = "scale(1.2)";
    logoImg.style.transition = "transform 0.3s"
  })
  logoImg.addEventListener("mouseleave", () => {
    logoImg.style.transform = "scale(1)"
  });

//2. on click event
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "gold";
    })
  })

  //3. double click event

const colorNav = document.querySelector('.nav-link');
colorNav.addEventListener("dblclick", () => {
    colorNav.style.color= "orange";
})

