import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SharedTitle from "../../Components/SharedTitle/SharedTitle";

const Category = () => {
  return (
    <div>
      <div>
        <SharedTitle
          subHeading={"---From 11:00am to 10:00pm---"}
          heading={"ORDER ONLINE"}
        ></SharedTitle>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={img1} />

          <h1 className="h1-category">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <h1 className="h1-category">Pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h1 className="h1-category">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h1 className="h1-category">Desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <h1 className="h1-category">Salads</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
