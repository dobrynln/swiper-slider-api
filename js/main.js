//Создание слайдов
class Slide {
  constructor(title, descr, likeCount, img, parentNode, id) {
    this.title = title;
    this.descr = descr;
    this.likeCount = likeCount;
    this.img = img;
    this.id = id;
    this.parentChild = document.querySelector(parentNode);
    this.titleHint = title;
    this.countLiks();
    this.stringSub();
  }
  stringSub() {
    if (this.title.length >= 15) {
      this.title = `${this.title.substring(0, 15)}...`;
    }
    this.title = this.title;
  }
  countLiks() {
    if (localStorage.getItem(this.id)) {
      this.likeCount = localStorage.getItem(this.id);
    }
  }
  render() {
    let slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.setAttribute("data-active", this.id);
    if (this.img === "" || this.img === null) {
      this.img = "img/not-image.jpg";
    }
    slide.innerHTML += `
          <div class="swiper-slide__item" style="background-image: url(${this.img});">
         
          <img src="img/line.png" alt="Line" class="line-h1">
          <div class="swiper-slide__item-bottom">
          <div class="swiper-slide__item-social">
          <button class="btn-share" data-social="ok" type="button">
            <svg class="svg-social" viewBox="0 0 39 37" width="35">
            <g>
              <path
              fill="#727272"
              d="M18.3,24.6c-2.4-0.2-4.5-0.8-6.4-2.2c-0.2-0.2-0.5-0.3-0.7-0.5c-0.8-0.8-0.9-1.6-0.2-2.5
             c0.5-0.8,1.5-1,2.4-0.5c0.2,0.1,0.4,0.2,0.5,0.3c3.4,2.3,8.1,2.4,11.6,0.1c0.3-0.3,0.7-0.5,1.1-0.6c0.8-0.2,1.6,0.1,2,0.8
             c0.5,0.8,0.5,1.6-0.1,2.2c-1,1-2.1,1.6-3.4,2.1c-1.2,0.5-2.5,0.7-3.8,0.8c0.2,0.2,0.3,0.3,0.4,0.4c1.8,1.7,3.5,3.5,5.3,5.2
             c0.6,0.6,0.7,1.3,0.4,2c-0.4,0.8-1.2,1.2-2,1.2c-0.5,0-0.9-0.3-1.2-0.6c-1.3-1.3-2.7-2.6-4-3.9c-0.4-0.4-0.6-0.3-0.9,0
             c-1.3,1.3-2.7,2.7-4.1,4c-0.6,0.6-1.4,0.7-2.1,0.4c-0.8-0.4-1.2-1.1-1.2-1.9c0-0.5,0.3-0.9,0.6-1.3c1.8-1.7,3.5-3.4,5.2-5.1
             C18,24.9,18.1,24.8,18.3,24.6z
             M19.8,18.7c-4.3,0-7.7-3.4-7.7-7.6c0-4.2,3.5-7.6,7.8-7.6c4.3,0,7.8,3.4,7.7,7.7C27.6,15.3,24,18.7,19.8,18.7z
              M23.6,11.1c0-2.1-1.7-3.7-3.8-3.7c-2.1,0-3.8,1.7-3.8,3.7c0,2.1,1.7,3.7,3.8,3.7C21.9,14.8,23.6,13.2,23.6,11.1z"
              />
            </g>
            </svg>
          </button>
          <button class="btn-share" data-social="vk">
            <svg
            class="svg-social"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="#727272;"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M34.952 15.1203C35.1417 14.4985 34.952 14.0425 34.0551 14.0425H31.0839C30.3279 14.0425 29.9824 14.437 29.7928 14.8702C29.7928 14.8702 28.2821 18.506 26.1415 20.8634C25.4505 21.5494 25.1348 21.766 24.7582 21.766C24.5698 21.766 24.2962 21.5494 24.2962 20.9276V15.1203C24.2962 14.3742 24.078 14.0425 23.448 14.0425H18.7792C18.3078 14.0425 18.0232 14.3875 18.0232 14.7165C18.0232 15.4225 19.0936 15.5856 19.2033 17.5753V21.8917C19.2033 22.8371 19.0312 23.0095 18.6519 23.0095C17.6452 23.0095 15.1957 19.3604 13.7419 15.1831C13.4588 14.3715 13.1729 14.0439 12.4142 14.0439H9.44438C8.59489 14.0439 8.42554 14.4383 8.42554 14.8716C8.42554 15.6498 9.43219 19.5008 13.1146 24.5941C15.5696 28.072 19.0258 29.9574 22.1745 29.9574C24.0618 29.9574 24.2948 29.5389 24.2948 28.8168V26.188C24.2948 25.3509 24.475 25.1824 25.0725 25.1824C25.5115 25.1824 26.2675 25.4017 28.0301 27.0772C30.0434 29.0642 30.3767 29.9561 31.508 29.9561H34.4778C35.3259 29.9561 35.75 29.5376 35.5061 28.7112C35.2392 27.8888 34.2773 26.6921 33.001 25.276C32.3073 24.4684 31.2709 23.5992 30.9552 23.1647C30.5149 22.6044 30.6422 22.357 30.9552 21.8596C30.9566 21.8609 34.5754 16.8305 34.952 15.1203Z"
              fill="#727272"
            />
            </svg>
          </button>
          <button class="btn-share" data-social="fb">
            <svg
            class="svg-social"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="#727272;"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M16.4662 22.763H19.0317V33.3246C19.0317 33.5331 19.2007 33.7021 19.4092 33.7021H23.7591C23.9676 33.7021 24.1366 33.5331 24.1366 33.3246V22.8127H27.0858C27.2776 22.8127 27.4389 22.6688 27.4608 22.4783L27.9087 18.5901C27.921 18.4831 27.8871 18.3759 27.8156 18.2957C27.7439 18.2154 27.6414 18.1694 27.5338 18.1694H24.1367V15.732C24.1367 14.9973 24.5323 14.6247 25.3127 14.6247C25.4239 14.6247 27.5338 14.6247 27.5338 14.6247C27.7423 14.6247 27.9113 14.4557 27.9113 14.2472V10.6781C27.9113 10.4696 27.7423 10.3006 27.5338 10.3006H24.4728C24.4512 10.2996 24.4032 10.2979 24.3326 10.2979C23.8014 10.2979 21.9553 10.4021 20.497 11.7437C18.8812 13.2304 19.1058 15.0105 19.1595 15.3191V18.1693H16.4662C16.2577 18.1693 16.0887 18.3383 16.0887 18.5468V22.3854C16.0887 22.5939 16.2577 22.763 16.4662 22.763Z"
              fill="#727272"
            />
            </svg>
          </button>
          </div>
            <div class="swiper-slide__item-people">
              <button class="btn-like" data-id="${this.id}">
                <svg
                  class="svg-like"
                  width="39"
                  height="37"
                  viewBox="0 0 39 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 18.2426H7.21056V35.548H0V18.2426ZM35.4541 13.556H25.2367L25.3594 9.5182L26.4408 4.3266L24.8761 0H21.3936L20.6723 6.36706L17.067 11.8977L15.7477 18.9855H12.0197V35.548L20.795 36.0529H31.0702L34.8555 33.349L38.1001 19.721L35.4541 13.556Z"
                    fill="#727272"
                  />
                </svg>
              </button>
              <div class="like-block">
                like: <span class="like-block__counter" data-id="${this.id}">${this.likeCount}</span>
              </div>
            </div>
           
          </div>
        </div>
          `;
    this.parentChild.append(slide);
  }
}
//
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
            console.log(res.status);
            modal(
              ".modal",
              ".close-modal",
              ".modal-content",
              res.status,
              res.data.desc,
              res.data.title
            );
          });
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
        let shiftX =
          e.changedTouches[0].pageX -
          getComputedStyle(backSlide)
            .backgroundPosition.replace(/[^\d\+]/g, "")
            .substring(0, 1);
          let res = shiftX/3
          console.log(res)
        if (res < 0) {
          res = 0;
        }
        if (res > 100) {
          res = 100;
        } else {
          backSlide.style.backgroundPositionX = res + "%";
        }

        // let touchobj = e.changedTouches[0].pageX
        // console.log(touchobj)

        // backSlide.style.backgroundPositionX = (imageSlide + dist ) + 'px'
        // console.log(( (imageSlide + dist > window.screen.width) ? window.screen.width : (imageSlide + dist < 0)? 0 : imageSlide + dist ))
        // if(imageSlide + dist >= 100) {
        //   console.log('1', imageSlide - dist)
        //   //backSlide.style.backgroundPositionX = (imageSlide + dist) + '%'
        // } else if (imageSlide + dist > 100 ) {
        //   console.log('2', imageSlide - dist)
        //   //backSlide.style.backgroundPositionX = ( (imageSlide - dist >= 100)? 100 : imageSlide - dist ) + '%'
        // } else {
        //   console.log('3', imageSlide + dist)
        //   //backSlide.style.backgroundPositionX  = (imageSlide + dist ) + '%'
        // }
        e.preventDefault();
      },
      false
    );
    // backSlide.addEventListener("touchmove", (e) => {
    //   let touches = e.changedTouches;
    //   let x = touches[0].clientX;
    //   backSlide.style.backgroundPositionX =
    //   e.preventDefault()
    //   return false
    // });
  });
}
// backSlide.style.backgroundPositionX= `${sum[i]}%`
//Запросы
function getSlides(url) {
  return axios.get(url);
}

getSlides(
  "https://private-5579fc-grchhtml.apiary-mock.com/slides?offset=0&limit=3"
).then((res) => {
  let swipperWrapper = document.querySelector(".swiper");
  if (res.status === 200) {
    res.data.data.forEach(({ title, desc, likeCnt, imgUrl, id, titleHint }) => {
      new Slide(
        title,
        desc,
        likeCnt,
        imgUrl,
        ".swiper-wrapper",
        id,
        titleHint
      ).render();
    });
    CheckAndRequest(
      res.data.data,
      "https://private-5579fc-grchhtml.apiary-mock.com/slides?offset=3&limit=3"
    );
    createTemplate(res.data.data);
    initSlider(0);
    swipperWrapper.style.display = "flex";
  }
});
function RequestSecond(id, url) {
  axios.get(url).then((res) => {
    res.data.data.forEach(({ title, desc, likeCnt, imgUrl, id, titleHint }) => {
      new Slide(
        title,
        desc,
        likeCnt,
        imgUrl,
        ".swiper-wrapper",
        id,
        titleHint
      ).render();
    });
    createTemplate(res.data.data);
    initSlider(2);
  });
}
function CheckAndRequest(data, url) {
  let buttonNext = document.querySelector(".slide-button-next");
  buttonNext.addEventListener("click", () => {
    let lastSlide = document.querySelector(".swiper-slide-active");
    let idSlide = lastSlide.getAttribute("data-active");
    let lastSlideActive = data[data.length - 1];
    idSlide++;
    if (lastSlideActive.id === idSlide) {
      lastSlide.removeAttribute("data-active");
      RequestSecond(lastSlideActive.id, url);
    }
  });
}
function postLike(id, count) {
  return axios.post(
    `https://private-5579fc-grchhtml.apiary-mock.com/slides/${id}/like`,
    {
      likeCnt: count,
    }
  );
}
//модалки
function modal(
  selectorModal,
  selectorClose,
  selectorContent,
  dataStatus,
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

  if (dataStatus === 200) {
    headingModal.innerHTML = `${dataTitle}`;
    descrModal.innerHTML = `${dataDecr}`;
  } else {
    headingModal.innerHTML = "Что-то пошло не так...";
    descrModal.innerHTML = "Попробуйте перезагрузить страницу";
  }

  modalClose.addEventListener("click", () => {
    modalBox.style.display = "none";
    contentModal.classList.remove("modal-show");
    document.body.style.overflow = "";
  });
  modalBox.addEventListener("click", (e) => {
    if (e.target == modalBox) {
      modalBox.style.display = "none";
      contentModal.classList.remove("modal-show");
      document.body.style.overflow = "";
    }
  });
}
// init swiper
function initSlider(slide) {
  var interleaveOffset = 0.5;
  var swiperOptions = {
    speed: 1000,
    watchSlidesProgress: true,
    allowTouchMove: false,
    initialSlide: slide,
    navigation: {
      nextEl: ".slide-button-next",
      prevEl: ".slide-button-prev",
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(
            ".swiper-slide__item"
          ).style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(
            ".swiper-slide__item"
          ).style.transition = speed + "ms";
        }
      },
    },
  };
  var swiper = new Swiper(".grechkaSwiper", swiperOptions);
  swiper.init();
}
//поделиться записью
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
function share(social, url) {
  var urlSoc = false;
  switch (social) {
    case "ok":
      urlSoc = "https://connect.ok.ru/offer?url=" + url;
      break;
    case "vk":
      urlSoc = "https://vk.com/share.php?url=" + url;
      break;
    case "fb":
      urlSoc = "https://www.facebook.com/sharer/sharer.php?u=" + url;
      break;
  }
  if (urlSoc) {
    var width = 800,
      height = 500;
    var left = (window.screen.width - width) / 2;
    var top = (window.screen.height - height) / 2;
    social_window = window.open(
      urlSoc,
      "share_window",
      "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left
    );
    social_window.focus();
  }
}
