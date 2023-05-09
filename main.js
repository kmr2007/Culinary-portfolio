// Culinary Portfolio

// Sticky Nav Bar
document.addEventListener("scroll", scrollHandler)

let navbar = document.getElementById("navbar")
let sticky = navbar.offsetTop;

function scrollHandler() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }