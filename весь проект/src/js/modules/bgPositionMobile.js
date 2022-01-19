function setPositionSlide() {
    let mobileSlidesClick = document.querySelectorAll(".swiper-slide__item");
    if (window.screen.width >= 375 || window.screen.width <= 768) {
      mobileSlidesClick.forEach(slide => { 
        slide.style.backgroundPositionX = "23%";
      })
    }
  }
  
export default setPositionSlide;