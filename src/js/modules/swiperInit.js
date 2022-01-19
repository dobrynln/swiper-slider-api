function initSlider(slide) {
    let interleaveOffset = 0.5;
    let swiperOptions = {
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
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress;
            let innerOffset = swiper.width * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(
              ".swiper-slide__item"
            ).style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
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
            swiper.slides[i].querySelector(
              ".swiper-slide__item"
            ).style.transition = speed + "ms";
          }
        },
      },
    };
    let swiper = new Swiper(".grechkaSwiper", swiperOptions);
    swiper.init();
  }
  export default initSlider;