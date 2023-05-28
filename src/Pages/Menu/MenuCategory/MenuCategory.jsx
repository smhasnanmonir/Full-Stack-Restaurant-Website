import Cover from "../../Shared/Cover/Cover";
import ItemsCover from "../../Shared/Cover/ItemsCover";
import MenuCard from "../../Shared/MenuCard/MenuCard";

const MenuCategory = ({ items, titles, coverImg, heading }) => {
  return (
    <div className="p-8">
      {titles && (
        <ItemsCover
          img={coverImg}
          heading={heading}
          titles={titles}
        ></ItemsCover>
      )}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((menuItem) => (
          <MenuCard key={menuItem._id} menuItem={menuItem}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
