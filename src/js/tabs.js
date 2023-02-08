function activateTab(captionSelector, contentSelector, activeSelectot) {
  const tabs = document.querySelectorAll(`.${captionSelector}`);
  const tabContents = document.querySelectorAll(`.${contentSelector}`);

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Удаляем активный класс со всех вкладок
      tabs.forEach((tab) => tab.classList.remove(activeSelectot));
      tabContents.forEach((content) =>
        content.classList.remove(activeSelectot)
      );

      // Добавляем активный класс на текущую и содержимое вкладки
      this.classList.add("active");
      document.getElementById(this.dataset.tab).classList.add(activeSelectot);
    });
  });
}

activateTab("tabs__caption", "tabs__content", "active");
