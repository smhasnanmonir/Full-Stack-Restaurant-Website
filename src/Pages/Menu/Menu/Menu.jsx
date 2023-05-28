import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/home/banner.jpg";
import useMenu from "../../../hooks/useMenu";
import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} heading="Our Menu"></Cover>
      <SharedTitle
        heading="Don't Miss"
        subHeading="Today's offer"
      ></SharedTitle>
      {/* Offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desserts */}
      <MenuCategory
        items={dessert}
        titles="Dedessertsserts"
        coverImg={dessertImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
