/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/bgPositionMobile.js":
/*!********************************************!*\
  !*** ./src/js/modules/bgPositionMobile.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setPositionSlide() {
  let mobileSlidesClick = document.querySelectorAll(".swiper-slide__item");

  if (window.screen.width >= 375 || window.screen.width <= 768) {
    mobileSlidesClick.forEach(slide => {
      slide.style.backgroundPositionX = "23%";
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (setPositionSlide);

/***/ }),

/***/ "./src/js/modules/classSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/classSlider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      this.img = "/dist/img/not-image.jpg";
    }

    slide.innerHTML += `
          <div class="swiper-slide__item" style="background-image: url(${this.img});">
          <div class="swiper-slide__item-top">
            <h1 class="title-h1 heading-slide" data-tooltip="${this.titleHint}">${this.title}</h1>
            <img src="img/logo-bmw.svg" alt="Logo BMW" class="logo-bmw" />
          </div>
          <img src="img/line.png" alt="Line" class="line-h1">
          <div class="swiper-slide__item-descr">
            ${this.descr.substring(0, 60)}...
          </div>
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

/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./src/js/modules/createSlide.js":
/*!***************************************!*\
  !*** ./src/js/modules/createSlide.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTemplate */ "./src/js/modules/createTemplate.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/js/modules/request.js");
/* harmony import */ var _swiperInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiperInit */ "./src/js/modules/swiperInit.js");
/* harmony import */ var _classSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classSlider */ "./src/js/modules/classSlider.js");






function createSlide() {
  (0,_request__WEBPACK_IMPORTED_MODULE_1__.getSlides)("https://private-5579fc-grchhtml.apiary-mock.com/slides?offset=0&limit=3").then(res => {
    let swipperWrapper = document.querySelector(".swiper");

    if (res.status === 200) {
      res.data.data.forEach(_ref => {
        let {
          title,
          desc,
          likeCnt,
          imgUrl,
          id,
          titleHint
        } = _ref;
        new _classSlider__WEBPACK_IMPORTED_MODULE_3__["default"](title, desc, likeCnt, imgUrl, ".swiper-wrapper", id, titleHint).render();
      });
      (0,_request__WEBPACK_IMPORTED_MODULE_1__.CheckAndRequest)(res.data.data, "https://private-5579fc-grchhtml.apiary-mock.com/slides?offset=3&limit=3");
      (0,_createTemplate__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data.data);
      (0,_swiperInit__WEBPACK_IMPORTED_MODULE_2__["default"])(0);
      swipperWrapper.style.display = "flex";
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createSlide);

/***/ }),

/***/ "./src/js/modules/createTemplate.js":
/*!******************************************!*\
  !*** ./src/js/modules/createTemplate.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getParamsShare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/getParamsShare */ "./src/js/modules/getParamsShare.js");
/* harmony import */ var _modules_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/request */ "./src/js/modules/request.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/modal */ "./src/js/modules/modal.js");




function createTemplate(data) {
  setTimeout(() => {
    let activeSlide = document.querySelectorAll(".heading-slide");
    activeSlide.forEach(slide => {
      slide.addEventListener("mouseover", e => {
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

  (0,_modules_getParamsShare__WEBPACK_IMPORTED_MODULE_0__["default"])();
  data.forEach(item => {
    let buttonsLike = document.querySelectorAll(".btn-like");
    buttonsLike.forEach(button => {
      if (localStorage.getItem(`isLike ${item.id}`) === button.getAttribute("data-id")) {
        button.classList.add("active-like");
        button.disabled = true;
      }

      button.addEventListener("click", e => {
        let likeCount = document.querySelector(`span[data-id="${item.id}"]`);
        let attrCount = likeCount.getAttribute("data-id");

        if (e.currentTarget.getAttribute("data-id") === attrCount) {
          likeCount.innerHTML = `${item.likeCnt + 1}`;
          (0,_modules_request__WEBPACK_IMPORTED_MODULE_1__.postLike)(attrCount, item.likeCnt + 1).then(res => {
            (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(".modal", ".close-modal", ".modal-content", res.data.desc, res.data.title);
            console.log('like');
            console.log(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"]);
          }).catch(() => {
            (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(".modal", ".close-modal", ".modal-content", "Попробуйте перезагрузить страницу", "Что-то пошло не так...");
            button.classList.remove("active-like");
            localStorage.setItem(attrCount, item.likeCnt);
            likeCount.innerHTML = `${item.likeCnt}`;
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
  backgroundSlide.forEach(backSlide => {
    backSlide.addEventListener("touchmove", function (e) {
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
    }, false);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createTemplate);

/***/ }),

/***/ "./src/js/modules/getParamsShare.js":
/*!******************************************!*\
  !*** ./src/js/modules/getParamsShare.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/share */ "./src/js/modules/share.js");


function getParams() {
  let buttonSocial = document.querySelectorAll(".btn-share");
  buttonSocial.forEach(btn => {
    btn.addEventListener("click", e => {
      if (e.currentTarget === btn) {
        let social = e.currentTarget.getAttribute("data-social");
        let urlShare = location.href;
        (0,_modules_share__WEBPACK_IMPORTED_MODULE_0__["default"])(social, urlShare);
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (getParams);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modal(selectorModal, selectorClose, selectorContent, dataTitle, dataDecr) {
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
  modalBox.addEventListener("click", e => {
    if (e.target == modalBox) {
      modalBox.style.display = "none";
      contentModal.classList.remove("modal-show");
      document.body.style.overflow = "";
      headingModal.innerHTML = '';
      descrModal.innerHTML = '';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/request.js":
/*!***********************************!*\
  !*** ./src/js/modules/request.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSlides": function() { return /* binding */ getSlides; },
/* harmony export */   "postLike": function() { return /* binding */ postLike; },
/* harmony export */   "CheckAndRequest": function() { return /* binding */ CheckAndRequest; },
/* harmony export */   "RequestSecond": function() { return /* binding */ RequestSecond; }
/* harmony export */ });
/* harmony import */ var _modules_bgPositionMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/bgPositionMobile */ "./src/js/modules/bgPositionMobile.js");
/* harmony import */ var _modules_createTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/createTemplate */ "./src/js/modules/createTemplate.js");
/* harmony import */ var _modules_swiperInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/swiperInit */ "./src/js/modules/swiperInit.js");
/* harmony import */ var _modules_classSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/classSlider */ "./src/js/modules/classSlider.js");





function getSlides(url) {
  return axios.get(url);
}

function postLike(id, count) {
  return axios.post(`https://private-5579fc-grchhtml.apiary-mock.com/slides/${id}/like`, {
    likeCnt: count
  });
}

function CheckAndRequest(data, url) {
  let buttonNext = document.querySelector(".slide-button-next");
  buttonNext.addEventListener("click", () => {
    let lastSlide = document.querySelector(".swiper-slide-active");
    let idSlide = lastSlide.getAttribute("data-active");
    let lastSlideActive = data[data.length - 1];
    idSlide++;
    (0,_modules_bgPositionMobile__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (lastSlideActive.id === idSlide) {
      lastSlide.removeAttribute("data-active");
      RequestSecond(url);
      let buttonPrev = document.querySelector(".slide-button-prev");
      buttonPrev.addEventListener('click', () => {
        if (buttonPrev.classList.contains('swiper-button-disabled')) {
          buttonPrev.classList.remove('swiper-button-disabled');
        }
      });
    }
  });
}

function RequestSecond(url) {
  axios.get(url).then(res => {
    res.data.data.forEach(_ref => {
      let {
        title,
        desc,
        likeCnt,
        imgUrl,
        id,
        titleHint
      } = _ref;
      new _modules_classSlider__WEBPACK_IMPORTED_MODULE_3__["default"](title, desc, likeCnt, imgUrl, ".swiper-wrapper", id, titleHint).render();
    });
    (0,_modules_createTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(res.data.data);
    (0,_modules_swiperInit__WEBPACK_IMPORTED_MODULE_2__["default"])(2);
  });
}






/***/ }),

/***/ "./src/js/modules/share.js":
/*!*********************************!*\
  !*** ./src/js/modules/share.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    let social_window = window.open(urlSoc, "share_window", "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left);
    social_window.focus();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (share);

/***/ }),

/***/ "./src/js/modules/swiperInit.js":
/*!**************************************!*\
  !*** ./src/js/modules/swiperInit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function initSlider(slide) {
  let interleaveOffset = 0.5;
  let swiperOptions = {
    speed: 1000,
    watchSlidesProgress: true,
    allowTouchMove: false,
    initialSlide: slide,
    navigation: {
      nextEl: ".slide-button-next",
      prevEl: ".slide-button-prev"
    },
    on: {
      progress: function () {
        let swiper = this;

        for (let i = 0; i < swiper.slides.length; i++) {
          let slideProgress = swiper.slides[i].progress;
          let innerOffset = swiper.width * interleaveOffset;
          let innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".swiper-slide__item").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function () {
        let swiper = this;

        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        let swiper = this;

        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".swiper-slide__item").style.transition = speed + "ms";
        }
      }
    }
  };
  let swiper = new Swiper(".grechkaSwiper", swiperOptions);
  swiper.init();
}

/* harmony default export */ __webpack_exports__["default"] = (initSlider);

/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof __webpack_require__.g !== 'undefined') {
    local = __webpack_require__.g;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/***/ (function() {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_modules_bgPositionMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modules/bgPositionMobile */ "./src/js/modules/bgPositionMobile.js");
/* harmony import */ var _js_modules_getParamsShare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/modules/getParamsShare */ "./src/js/modules/getParamsShare.js");
/* harmony import */ var _js_modules_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/modules/share */ "./src/js/modules/share.js");
/* harmony import */ var _modules_createSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createSlide */ "./src/js/modules/createSlide.js");
/* harmony import */ var _js_modules_swiperInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/modules/swiperInit */ "./src/js/modules/swiperInit.js");
(__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill)();







window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_createSlide__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_js_modules_swiperInit__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_js_modules_bgPositionMobile__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_js_modules_getParamsShare__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_js_modules_share__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map