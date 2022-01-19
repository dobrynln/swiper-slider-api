import share from '../modules/share'
function getParams() {
    let buttonSocial = document.querySelectorAll(".btn-share");
    buttonSocial.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.currentTarget === btn) {
          let social = e.currentTarget.getAttribute("data-social");
          let urlShare = location.href;
          share(social, urlShare);
        }
      });
    });
  }
  export default getParams;