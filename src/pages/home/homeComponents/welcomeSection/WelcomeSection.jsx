import img1 from './../../../../assets/images/home/welcome/cms-banner-1.jpg'
import img2 from './../../../../assets/images/home/welcome/cms-banner-2.jpg'
import './../../../../styles/font.css'


const WelcomeSection = () => {
    return (
        <div className='py-10 md:py-14 container mx-auto'>
            <h1 className='text-center text-3xl md:text-[40px] font-semibold font-jost'>Welcome to Our Store</h1>
            <p className='max-w-[85%] md:max-w-[80%] mx-auto text-center text-[#666666]  text-lg font-jost mt-5 md:mt-6'>
            Step into our store and immerse yourself in a world of curated treasures. From exquisite craftsmanship to unparalleled quality, discover a shopping experience like no other.
            </p>
            {/* img container */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20 mt-8 md:mt-12'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
        </div>
    );
};

export default WelcomeSection;