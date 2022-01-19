function modal(
    selectorModal,
    selectorClose,
    selectorContent,
    dataTitle,
    dataDecr
  ) {
    const modalBox = document.querySelector(selectorModal),
      modalClose = document.querySelector(selectorClose),
      contentModal = document.querySelector(selectorContent),
      headingModal = document.createElement("h2"),
      descrModal = document.createElement("div");
  
      modalBox.style.display = "flex";
      contentModal.classList.add("modal-show");
    headingModal.classList.add("title-h2");
    descrModal.classList.add("content-descr");
  
    contentModal.append(headingModal);
    contentModal.append(descrModal);
      headingModal.innerHTML = `${dataTitle}`;
      descrModal.innerHTML = `${dataDecr}`;
    
  
    modalClose.addEventListener("click", () => {
      modalBox.style.display = "none";
      contentModal.classList.remove("modal-show");
      document.body.style.overflow = "";
      headingModal.innerHTML = '';
      descrModal.innerHTML = '';
    });
    modalBox.addEventListener("click", (e) => {
      if (e.target == modalBox) {
        modalBox.style.display = "none";
        contentModal.classList.remove("modal-show");
        document.body.style.overflow = "";
        headingModal.innerHTML = '';
        descrModal.innerHTML = '';
      }
    });
  }
  export default modal;