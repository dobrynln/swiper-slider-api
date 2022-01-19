import getParams from '../modules/getParamsShare'
import {postLike} from '../modules/request'
import modals from '../modules/modal'
function createTemplate(data) {
    setTimeout(() => {
      let activeSlide = document.querySelectorAll(".heading-slide");
      activeSlide.forEach((slide) => {
        slide.addEventListener("mouseover", (e) => {
          let desrcHint = e.currentTarget.getAttribute("data-tooltip");
          let hint = document.createElement("div");
          hint.classList.add("heading-slide__hint");
          hint.innerHTML = `${desrcHint}`;
          slide.append(hint);
        });
        slide.addEventListener("mouseout", () => {
          let textSelector = document.querySelector(".heading-slide__hint");
          textSelector.remove();
        });
      });
    }, 2000);
    let mobileSlides = document.querySelector(".swiper-slide__item");
    if (window.screen.width >= 320 && window.screen.width <= 767) {
      mobileSlides.style.backgroundPositionX = "25%";
    }
    getParams();
    data.forEach((item) => {
      let buttonsLike = document.querySelectorAll(".btn-like");
      buttonsLike.forEach((button) => {
        if (
          localStorage.getItem(`isLike ${item.id}`) ===
          button.getAttribute("data-id")
        ) {
          button.classList.add("active-like");
          button.disabled = true;
        }
        button.addEventListener("click", (e) => {
          let likeCount = document.querySelector(`span[data-id="${item.id}"]`);
          let attrCount = likeCount.getAttribute("data-id");
          if (e.currentTarget.getAttribute("data-id") === attrCount) {
            likeCount.innerHTML = `${item.likeCnt + 1}`;
            postLike(attrCount, item.likeCnt + 1).then((res) => {
              modals(".modal", ".close-modal", ".modal-content", res.data.desc, res.data.title);
              console.log('like')
              console.log(modals)
            }).catch(() => {
              modals(
                ".modal",
                ".close-modal",
                ".modal-content",
                "Попробуйте перезагрузить страницу",
                "Что-то пошло не так..."
              );
              button.classList.remove("active-like")
              localStorage.setItem(attrCount, item.likeCnt);
              likeCount.innerHTML = `${item.likeCnt}`
            })
            localStorage.setItem(attrCount, item.likeCnt + 1);
            localStorage.setItem(`isLike ${attrCount}`, item.id);
            e.currentTarget.classList.add("active-like");
            e.currentTarget.disabled = true;
          }
        });
      });
    });
    let backgroundSlide = document.querySelectorAll(".swiper-slide__item");
    backgroundSlide.forEach((backSlide) => {
      backSlide.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
          let posX = e.changedTouches[0].pageX;
          let resPosX = posX / 5;
          if (window.screen.width >= 320 && window.screen.width <= 375) {
            resPosX = posX / 3;
          }
          if (resPosX < 0) {
            resPosX = 0;
          } else if (resPosX > 100) {
            resPosX = 100;
          } else {
            backSlide.style.backgroundPositionX = resPosX + "%";
          }
        },
        false
      );
    });
  }
  export default createTemplate;