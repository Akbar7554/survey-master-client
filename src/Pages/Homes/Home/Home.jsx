import Banner from "../Banner/Banner";
import FAQ from "../Faq/Faq";
import HowItWork from "../HowItWork/HowItWork";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <Testimonial></Testimonial>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;