import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const FeaturedSlider = ({ subCategories }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container container mx-auto max-w-[90%]">
      <Slider {...settings}>
        {subCategories?.map((singleCategory, index) => (
          <div
            key={index}
            className=" rounded-3xl overflow-hidden relative px-4 "
          >
            <img
              className="h-[400px] mx-auto  w-full rounded-3xl object-cover object-center"
              src={singleCategory.image}
              alt=""
            />
            <div className="absolute bg-black opacity-50 inset-y-0 inset-x-4 rounded-3xl"></div>
            <div className="absolute z-10 bottom-12 drop-shadow-2xl w-[90%] px-1 text-center ">
              <div className="h-full w-full flex flex-col items-center justify-center">
                <Link to={`/allitems/${singleCategory.subcategoryTitle}`}>
                  <h3 className="text-white text-2xl font-medium">
                    {singleCategory.subcategoryTitle}
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedSlider;
