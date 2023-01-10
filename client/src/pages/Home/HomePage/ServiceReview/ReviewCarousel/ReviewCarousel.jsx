import React from "react";
import SwiperCarousel from "~/components/SwipperCarousel/SwiperCarousel";
import UserFeedBack from "./UserFeedBack/UserFeedBack";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const userFeedbacksData = [
  {
    rareArr: [faStar, faStar, faStar, faStar, faStar],
    title: "Would highly recommend",
    content:
      "Fantastic service and communication throughout and the final product looks stunning in our new house...",
    name: "Mr Sam Smith",
    time: "Thứ Sáu, 3 tháng 6, 2022",
  },
  {
    rareArr: [faStar, faStar, faStar, faStar, faStar],
    title: "Excellent store and staff",
    content: "Replaced hall, stairs and landing carpet",
    name: "Mrs C W Jones",
    time: "Thứ Hai, 20 tháng 6, 2022",
  },
  {
    rareArr: [faStar, faStar, faStar, faStar, faStar],
    title: "All staff very helpful. Ple...",
    content: "Just an all round fantastic service.",
    name: "Client de confiance",
    time: "Thứ Năm, 16 tháng 6, 2022",
  },
  {
    rareArr: [faStar, faStar, faStar, faStar, faStar],
    title: "Would highly recommend",
    content:
      "Fantastic service and communication throughout and the final product looks stunning in our new house...",
    name: "Mr Sam Smith",
    time: "Thứ Sáu, 3 tháng 6, 2022",
  },
  {
    rareArr: [faStar, faStar, faStar, faStar, faStar],
    title: "Would highly recommend",
    content:
      "Fantastic service and communication throughout and the final product looks stunning in our new house...",
    name: "Mr Sam Smith",
    time: "Thứ Sáu, 3 tháng 6, 2022",
  },
];

const userFeedBackArr = () => {
  return userFeedbacksData.map((feedBack, index) => {
    return <UserFeedBack feedBack={feedBack} key={index} />;
  });
};

const ReviewCarousel = (props) => {
  return (
    <SwiperCarousel
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={1}
      isLoop={true}
      swiperSlidesData={userFeedBackArr()}
    />
  );
};

export default ReviewCarousel;
