import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SharedTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SharedTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((menuItem) => (
          <MenuCard key={menuItem._id} menuItem={menuItem}></MenuCard>
        ))}
      </div>
      <div className="w-[120px] mx-auto">
        <button className="btn btn-outline border-0 border-b-4 text-black ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
