import { FC, useState } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
import 'swiper/css'

import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

interface ICarouselProps {
  photos: string[];
}

// const carouselAnimation = {
//   hidden: {
//     y: 100,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 1.5 },
//   },
// };

const Carousel: FC<ICarouselProps> = ({ photos }) => {
  const [prevEl, setPrevEl] = useState<any | null>(null);
  const [nextEl, setNextEl] = useState<any | null>(null);

  return (
    <div className="carousel">
      <div className="carousel-body">
        <Swiper
          navigation={{ prevEl, nextEl }}
          slidesPerView={4}
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

// return (
//   <motion.div
//     className="carousel"
//     variants={carouselAnimation}
//     initial="hidden"
//     whileInView="visible">
//     <motion.div className="inner-carousel">{content}</motion.div>
//   </motion.div>
// );
