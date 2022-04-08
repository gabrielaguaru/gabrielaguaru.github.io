export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabMenu[1].classList.add("active");
    tabContent[1].classList.add("active");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add("active", direction);

      tabMenu.forEach((content) => {
        content.classList.remove("active");
      });
      tabMenu[index].classList.add("active");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
