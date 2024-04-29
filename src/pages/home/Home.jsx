import Banner from "./homeComponents/Banner/Banner";
import WelcomeSection from "./homeComponents/welcomeSection/WelcomeSection";


const Home = () => {
    return (
        <div>
            {/* This is home */}
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
        </div>
    );
};

export default Home;