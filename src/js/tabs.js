document.addEventListener("DOMContentLoaded", () => {
  function ativateTabs(
    tabsSelector,
    tabsHeadSelector,
    tabsBodySelector,
    tabsCaptionSelector,
    tabsCaptionActiveClass,
    tabsContentActiveClass
  ) {
    const tabs = document.querySelector(tabsSelector); //Основной элемент
    const head = tabs.querySelector(tabsHeadSelector); //Элемент с кнопками
    const body = tabs.querySelector(tabsBodySelector); //Элемент с контентом

    //Возвращаем data-tab кнопке
    function getActiveTabName() {
      return head.querySelector(`.${tabsCaptionActiveClass}`).dataset.tab;
    }

    //Возвращаем элемент активной кнопке
    function setActiveContent() {
      if (body.querySelector(`.${tabsContentActiveClass}`)) {
        body
          .querySelector(`.${tabsContentActiveClass}`)
          .classList.remove(tabsContentActiveClass);
      }
      body
        .querySelector(`[data-tab=${getActiveTabName()}]`)
        .classList.add(tabsContentActiveClass);
    }

    // проверяем есть ли активная вкладка, если нет делаем первую по умолчанию
    if (!head.querySelector(`.${tabsCaptionActiveClass}`)) {
      head
        .querySelector(tabsCaptionSelector)
        .classList.add(tabsCaptionActiveClass);
    }

    // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы
    setActiveContent(getActiveTabName());

    head.addEventListener("click", (e) => {
      const caption = e.target.closest(tabsCaptionSelector);
      //если не по кнопке - прерываем
      if (!caption) {
        return;
      }
      if (caption.classList.contains(tabsCaptionActiveClass)) {
        return;
      }

      //Если есть акт кнопка - удаляем класс
      if (head.querySelector(`.${tabsCaptionActiveClass}`)) {
        head
          .querySelector(`.${tabsCaptionActiveClass}`)
          .classList.remove(tabsCaptionActiveClass);
      }

      //Добавляем активный класс кнопке с кликом
      caption.classList.add(tabsCaptionActiveClass);

      // устанавливаем активный элемент контента в соответствии с активной кнопкой
      setActiveContent(getActiveTabName());
    });
  }

  ativateTabs(
    ".section__tabs",
    ".tabs__head",
    ".tabs__body",
    ".tabs__caption",
    "tabs__caption_active",
    "tabs__content_active"
  );
});
