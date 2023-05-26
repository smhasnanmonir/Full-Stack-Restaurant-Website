import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-bg text-white">
      <div className="md:px-[150px] md:py-[75px] md:my-[45px]">
        <SharedTitle
          heading="Featured Item"
          subHeading="Check it out"
        ></SharedTitle>
        <div className="md: flex justify-center  items-center py-8 px-16">
          <div>
            <img src={featuredImg} alt="featuredImg" />
          </div>
          <div className="space-y-3 md:ml-14">
            <p>March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
