const menuIcon = document.querySelectorAll(".fa-bars");
const nav_mobile = document.querySelector(".menu-mobile");
for (let i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("click", handleMenu);
}

function handleMenu() {
  if (nav_mobile.style.display === "none") {
    nav_mobile.style.display = "block";
  } else {
    nav_mobile.style.display = "none";
  }
}
