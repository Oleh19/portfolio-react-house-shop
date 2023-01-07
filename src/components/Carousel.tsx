import { FC, useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

interface ICarouselProps {
  photos: string[];
}
// const countSliders = window.screen.width <= 850 ? 1 : 3;

const Carousel: FC<ICarouselProps> = ({ photos }) => {
  const [prevEl, setPrevEl] = useState<any | null>(null);
  const [nextEl, setNextEl] = useState<any | null>(null);
  const [countSliders, setCountSliders] = useState(3);

  useEffect(() => {
    const numberSlides = window.innerWidth;
    if (numberSlides <= 850) {
      setCountSliders(1);
    } else {
      setCountSliders(3);
    }
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-body">
        <Swiper
          navigation={{ prevEl, nextEl }}
          slidesPerView={countSliders}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}>
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className="swipper-slide">
              <div>
                <img src={photo} alt="titlePhoto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-button-block">
          <button className="slider-button" ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className="slider-button" ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
