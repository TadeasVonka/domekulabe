const scrollToVylet = document.getElementById("scroll-to-vylet");
const vyletElement = document.getElementById("vylet");
const smoothScrollDuration = 900; // define a constant for the duration

scrollToVylet.addEventListener("click", () => {
  vyletElement.scrollIntoView({
    behavior: "smooth",
    duration: smoothScrollDuration,
  });
});
