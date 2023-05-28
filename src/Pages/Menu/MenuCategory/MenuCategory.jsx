import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../../Shared/MenuCard/MenuCard";

const MenuCategory = ({ items, titles, coverImg }) => {
  return (
    <div className="p-8">
      {titles && <Cover img={coverImg} titles="Our Menu"></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((menuItem) => (
          <MenuCard key={menuItem._id} menuItem={menuItem}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
