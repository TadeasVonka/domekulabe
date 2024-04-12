let data, lang;

// Funkce pro uložení vybraného jazyka do úložiště localStorage
const saveLanguage = (lang) => {
  localStorage.setItem("selectedLanguage", lang);
};

// Funkce pro načtení vybraného jazyka z localStorage
const loadLanguage = () => {
  return localStorage.getItem("selectedLanguage");
};

const translate = (lang) => {
  fetch("./lang/" + lang + ".json")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      [...document.querySelectorAll("[data-block]")].forEach(
        (block) =>
          (block.innerHTML =
            data[block.getAttribute("data-block")][
              block.getAttribute("data-txt")
            ])
      );
    });
};

// Načtení vybraného jazyka z úložiště localStorage, pokud existuje.
lang = loadLanguage() || "cz";
translate(lang);

document.querySelectorAll(".btn-lang").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    lang = e.target.getAttribute("data-lang");
    translate(lang);
    saveLanguage(lang);
  });
});
