import Featured from "../../Shared/Featured/Featured";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import CustomerReview from "./CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
