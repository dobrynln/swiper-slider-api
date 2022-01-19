import setPositionSlide from '../modules/bgPositionMobile'
import createTemplate from '../modules/createTemplate'
import initSlider from '../modules/swiperInit'
import Slide from '../modules/classSlider'
function getSlides(url) {
  return axios.get(url);
}
function postLike(id, count) {
  return axios.post(
    `https://private-5579fc-grchhtml.apiary-mock.com/slides/${id}/like`,
    {
      likeCnt: count,
    }
  );
}

function CheckAndRequest(data, url) {
  let buttonNext = document.querySelector(".slide-button-next");
  buttonNext.addEventListener("click", () => {
    let lastSlide = document.querySelector(".swiper-slide-active");
    let idSlide = lastSlide.getAttribute("data-active");
    let lastSlideActive = data[data.length - 1];
    idSlide++;
    setPositionSlide()
    if (lastSlideActive.id === idSlide) {
      lastSlide.removeAttribute("data-active");
      RequestSecond(url);
      let buttonPrev = document.querySelector(".slide-button-prev");
      buttonPrev.addEventListener('click', () => {
        if(buttonPrev.classList.contains('swiper-button-disabled')) {
          buttonPrev.classList.remove('swiper-button-disabled')
        }
      })
    }
  });
}
function RequestSecond(url) {
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
export {getSlides};
export {postLike};
export {CheckAndRequest};
export {RequestSecond};