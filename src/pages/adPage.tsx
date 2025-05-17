// Import Swiper React components
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '~/styles/custom-swiper-styles.css';

const AdPage = () => {
  return (
    <div>
      <div className="flex justify-between h-[45px]">
        <h2>배민플러스 상고대</h2>
        <div className="flex">
          {['브랜드', '서비스', '리뷰', '지점'].map((item, index) => {
            return (
              <div key={item} className="hidden">
                sadf
              </div>
            );
          })}
          <button type="button">합류하기</button>
        </div>
      </div>
      <div className="w-screen h-[calc(100vh-45px)]">
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AdPage;
