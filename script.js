const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navigation a");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("change");
  });
});
const goUpBtn = document.getElementById("go-up-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }
}

goUpBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
