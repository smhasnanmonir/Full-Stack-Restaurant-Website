import { Helmet } from "react-helmet-async";
import Featured from "../../Shared/Featured/Featured";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import CallUs from "./CallUs/CallUs";
import ChefService from "./ChefService/ChefService";
import CustomerReview from "./CustomerReview/CustomerReview";
import RecommendedItems from "./RecommendedItems/RecomendedItems";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <RecommendedItems></RecommendedItems>
      <Featured></Featured>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
