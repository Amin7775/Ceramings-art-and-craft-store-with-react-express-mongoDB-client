import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swipper.css";

import slider1 from "./../../../../assets/images/banner/slider1.jpg";
import slider2 from "./../../../../assets/images/banner/slider2.jpg";
import slider3 from "./../../../../assets/images/banner/slider3.jpg";


const Banner = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        lazy={true}
        rewind={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              background: `url(${slider1})`,
              height: "100vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-30"></div>
            <div className="flex flex-col items-center justify-center h-full ">
              <p className="max-w-[80%] md:max-w-[50%] mx-auto text-slate-200  text-xl lg:text-2xl font-semibold drop-shadow-lg mb-3 lg:mb-5 text-center">
                DISCOVER THE ARTISTRY OF
              </p>
              <h1 className="max-w-[80%] text-white text-3xl lg:text-7xl font-bold drop-shadow-md stroke-black text-center">
                HANDCRAFTED POTTERY
              </h1>

              <p className="max-w-[80%] lg:max-w-[50%] mx-auto text-slate-200   text-lg lg:text-xl drop-shadow-lg mt-5 lg:mt-8 text-center">
                Where each piece is a unique masterpiece crafted with passion and skill.
              </p>
            </div>
          </div>
          {/* <img src={slider3} /> */}
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              background: `url(${slider2})`,
              height: "100vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-30"></div>
            <div className="flex flex-col items-center justify-center h-full ">
              <p className="md:max-w-[50%] mx-auto text-slate-200   text-xl lg:text-2xl font-semibold drop-shadow-lg mb-3 lg:mb-5 text-center">
                THE PERFECT PORTRAYAL OF
              </p>
              <h1 className="text-white text-3xl lg:text-7xl font-bold drop-shadow-md   stroke-black text-center">
                ELEGANT CRAFTWORK
              </h1>

              <p className="max-w-[80%] lg:max-w-[50%] mx-auto text-slate-200   text-lg lg:text-xl drop-shadow-lg mt-5 lg:mt-8 text-center">
                Experience the future of craftworks.
              </p>
            </div>
          </div>
          {/* <img src={slider3} /> */}
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="parallax-bg relative"
            style={{
              background: `url(${slider3})`,
              height: "100vh",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute h-full w-full bg-black opacity-35"></div>
            <div className="flex flex-col items-center justify-center h-full ">
              <p className="max-w-[50%] mx-auto text-slate-200   text-xl lg:text-2xl font-semibold drop-shadow-lg mb-3 lg:mb-5">
                FIND YOUR STYLE
              </p>
              <h1 className="max-w-[80%] text-white text-3xl lg:text-6xl font-bold drop-shadow-md   stroke-black text-center">
                DEFINE YOUR SPACE WITH POTTERY
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
