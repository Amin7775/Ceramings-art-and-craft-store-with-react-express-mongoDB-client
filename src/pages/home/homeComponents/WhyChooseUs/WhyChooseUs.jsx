import { AiOutlineLine } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";

const WhyChooseUs = () => {
    return (
        <div className="w-full bg-custom-color-3 py-8 md:py-16 px-3">
      <div className="container mx-auto px-2 md:px-5 lg:px-0">
        <h1 className="font-semibold">
          <AiOutlineLine className="inline"></AiOutlineLine> WHY CHOOSE US
        </h1>
        <p className="text-xl md:text-3xl font-bold mt-4 mb-1">
          Because <span className="text-red-500"><Typewriter words={['We Care About You','We Create Solutions For You','We Provide Quality Services To You']} loop={[100]}/></span>
        </p>
        <br />
        <p className="font-semibold">We Also Provide - </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-5 px-1">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-2 md:gap-10">
              <div className="text-center py-5 px-1 md:px-8">
                <BsHeadset className=" text-6xl w-full mb-1"></BsHeadset>
                <h3 className="font-medium mb-2">Order Online</h3>
                <p className="">
                  Enjoy the convenience of booking from the comfort of your home
                  with our user-friendly online ordering platform.
                </p>
              </div>
              <div className="text-center py-5 px-1 md:px-8 ">
                <TbTruckDelivery className=" text-6xl w-full mb-1"></TbTruckDelivery>
                <h3 className="font-medium mb-2">Fast Service</h3>
                <p>
                  We Emphasize a quick response and service availability,
                  ensuring that users can find and book services promptly.
                </p>
              </div>
              <div className="text-center py-5 px-1 md:px-8 ">
                <GrTransaction className=" text-6xl w-full mb-1"></GrTransaction>
                <h3 className="font-medium mb-2">Secure Transactions</h3>
                <p>
                  Assure secure and reliable payment processing for service
                  transactions to build trust and confidence.
                </p>
              </div>
              <div className="text-center py-5 px-1 md:px-8 ">
                <RiExchangeDollarFill className=" text-6xl w-full mb-1"></RiExchangeDollarFill>
                <h3 className="font-medium mb-2">Money Return</h3>
                <p>
                  We stand by our services. If you're not completely
                  satisfied,you can return get refunds for selected services.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 px-2 md:px-2">
            <img
              className="mx-auto  mt-5 md:mt-0"
              src="https://i.ibb.co/Y7sDBPv/team-member-3.jpg"
              alt=""
            />
          </div>
        </div>
        {/* <div className="grid  grid-cols-3 md:h-32 mt-5  bg-yellow-300">
          <div className="text-center my-auto border-r-2 md:border-r-4 border-black">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            <CountUp  enableScrollSpy={true} scrollSpyDelay={500} start={0} end={100} duration={5}   suffix=" +" />
            </h1>
            <p className="text-base md:text-xl font-medium">
              Service Providers
            </p>
          </div>
          <div className="text-center my-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            <CountUp delay={2} enableScrollSpy={true} scrollSpyDelay={500} start={100000} end={150000} duration={5}   suffix=" +" />
            </h1>
            <p className="text-base md:text-xl font-medium">Orders Served</p>
          </div>
          <div className="text-center my-auto border-l-4 border-black">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold ">
            <CountUp delay={2} enableScrollSpy={true} scrollSpyDelay={500} start={100000} end={119000} duration={5}   suffix=" +" />
            </h1>
            <p className="text-base md:text-xl font-medium">5 Start Received</p>
          </div>
        </div> */}
      </div>
    </div>
    );
};

export default WhyChooseUs;