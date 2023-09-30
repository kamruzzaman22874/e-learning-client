import CoreFeature from "../../CoreFeature/CoreFeature";
import Banner from "../Banner/Banner";
import ChooseHistudy from "../ChooseHistudy/ChooseHistudy";
import TopFeatures from "../TopFeatures/TopFeatures";

const Home = () => {
    return (
        <div>
            <Banner/>
            <ChooseHistudy/>
            <CoreFeature/>
            <TopFeatures/>
        </div>
    );
};

export default Home;