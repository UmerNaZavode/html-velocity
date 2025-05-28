import './../scss/style.scss'

// Табы

const tabsBtns = document.querySelectorAll(".tabs__nav button")
const tabsItems = document.querySelectorAll(".tabs__item")

// Скрывает табы и отбирает класс "active" у кнопки
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

// Показывает переданный номер таба и делаеи его кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove("hide")
    tabsBtns[index].classList.add("active")
}

hideTabs();
showTab(0)

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

//Якори
const anchors = document.querySelectorAll(".header__nav a")

anchors.forEach(anc => {
   anc.addEventListener("click", function(event) {
      event.preventDefault();

      const id = anc.getAttribute("href");
      const elem = document.querySelector(id);

      window.scroll({
          top: elem.offsetTop,
          behavior: "smooth"
      });
   });
});

