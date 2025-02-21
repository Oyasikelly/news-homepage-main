document.getElementById("menuIcon").addEventListener("click", function () {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.add("slide-right");

  document.getElementById("close-menu").addEventListener("click", () => {
    if (mobileNav.classList.contains("slide-right")) {
      mobileNav.classList.remove("slide-right");
    }
  });
  mobileNav.addEventListener("click", () => {
    mobileNav.classList.remove("slide-right");
  });
});
