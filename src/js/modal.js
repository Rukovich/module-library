function modal(triggerSelector, modalSelector, activeSelector) {
  const modalTrigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);

  function openModal() {
    modal.classList.toggle(`${activeSelector}`);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.toggle(`${activeSelector}`);
    document.body.style.overflow = "";
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal());
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") === "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains(`${activeSelector}`)) {
      closeModal();
    }
  });

  //Открывает модальное окно при скролле в конец страницы
  /*
  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
  */
}
modal("[data-modal]", ".modal", "active_modal");
