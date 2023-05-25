import { useEffect, useState } from "react";
import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/smhasnanmonir/API-Testing/main/popular.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div>
      <SharedTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SharedTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((menuItem) => (
          <MenuCard key={menuItem._id} menuItem={menuItem}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
