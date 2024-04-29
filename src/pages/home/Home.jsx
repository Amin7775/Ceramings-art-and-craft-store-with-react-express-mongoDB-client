import Banner from "./homeComponents/Banner/Banner";
import FeaturedCategories from "./homeComponents/SubCategories/FeaturedCategories";
import WhyChooseUs from "./homeComponents/WhyChooseUs/WhyChooseUs";
import WelcomeSection from "./homeComponents/welcomeSection/WelcomeSection";


const Home = () => {
    return (
        <div>
            {/* This is home */}
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <FeaturedCategories></FeaturedCategories>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;