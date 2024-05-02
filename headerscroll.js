// JavaScript pro přidání/odebrání třídy při scrollování
window.addEventListener("scroll", function () {
  const header = document.getElementById("myHeader");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("xl:drop-shadow-cs");
  } else {
    header.classList.remove("xl:drop-shadow-cs");
  }
});
