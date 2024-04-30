import Banner from "./homeComponents/Banner/Banner";
import CraftedItems from "./homeComponents/CraftedItems/CraftedItems";
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
            <CraftedItems></CraftedItems>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;