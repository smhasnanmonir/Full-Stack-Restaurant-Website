import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import salad from "../../../../assets/home/5salad.png";
import "./RecommendedItems.css";

const RecommendedItems = () => {
  return (
    <div>
      <SharedTitle
        heading="CHEF RECOMMENDS"
        subHeading="---Should Try---"
      ></SharedTitle>
      <div className="flex gap-[24px]">
        <div className="card-1 bg-[#e9e6e2] text-center">
          <img className="w-full" src={salad} />
          <div className="p-[24px]">
            <h1 className="text-xl font-bold">Caeser Salad</h1>
            <p className="">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
          </div>
          <button className="btn-one">add to cart</button>
        </div>
        <div className="card-1 bg-[#e9e6e2] text-center pb-[45px]">
          <img className="w-full" src={salad} />
          <div className="p-[24px]">
            <h1 className="text-xl font-bold">Caeser Salad</h1>
            <p className="">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
          </div>
          <button className="uppercase btn-two">add to cart</button>
        </div>
        <div className="card-1 bg-[#e9e6e2] text-center">
          <img className="w-full" src={salad} />
          <div className="p-[24px]">
            <h1 className="text-xl font-bold">Caeser Salad</h1>
            <p className="">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
          </div>
          <button className="btn-one">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedItems;
