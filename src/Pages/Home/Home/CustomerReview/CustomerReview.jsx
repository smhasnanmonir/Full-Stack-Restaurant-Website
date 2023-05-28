import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import logo from "../../../../assets/icon/quote.png";

const CustomerReview = () => {
  const [opinion, setOpinion] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/smhasnanmonir/API-Testing/main/ReviewAPI"
    )
      .then((res) => res.json())
      .then((data) => setOpinion(data));
  }, []);
  console.log(opinion);
  return (
    <section className="mb-[45px]">
      <SharedTitle
        heading="What out Client Say"
        subHeading="Testimonials"
      ></SharedTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {opinion.map((opini) => (
          <SwiperSlide key={opini._id}>
            <div className="w-[150px] mx-auto">
              <Rating style={{ maxWidth: 180 }} value={opini.rating} readOnly />
            </div>
            <div className="space-y-2">
              <img className="w-[128px] mx-auto" src={logo} alt="logo" />
              <p className="w-1/2 mx-auto mt-[40px]">{opini.details}</p>
              <p className="text-[#CD9003] text-center text-2xl">
                {opini.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerReview;
