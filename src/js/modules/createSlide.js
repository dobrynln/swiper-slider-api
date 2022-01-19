import createTemplate from './createTemplate'
import {getSlides} from './request' 
import {CheckAndRequest} from './request'
import initSlider from './swiperInit'
import Slide from './classSlider'
function createSlide() {
  getSlides(
    "https://private-5579fc-grchhtml.apiary-mock.com/slides?offset=0&limit=3"
  ).then((res) => {
    let swipperWrapper = document.querySelector(".swiper");
    if (res.status === 200) {
      res.data.data.forEach(
        ({ title, desc, likeCnt, imgUrl, id, titleHint }) => {
          new Slide(
            title,
            desc,
            likeCnt,
            imgUrl,
            ".swiper-wrapper",
            id,
            titleHint
          ).render();
        }
      );
      CheckAndRequest(
        res.data.data,
        "https://private-5579fc-grchhtml.apiary-mock.com/slides?offset=3&limit=3"
      );
      createTemplate(res.data.data);
      initSlider(0);
      swipperWrapper.style.display = "flex";
    }
  });
}
export default createSlide;