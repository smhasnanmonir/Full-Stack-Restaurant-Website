import FoodCard from "../../Components/SharedTitle/FoodCard";

const OderTab = ({ foodItem }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
      {foodItem.map((items) => (
        <FoodCard items={items} key={items._id}></FoodCard>
      ))}
    </div>
  );
};

export default OderTab;
