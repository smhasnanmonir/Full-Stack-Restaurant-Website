const MenuCard = ({ menuItem }) => {
  const { name, recipe, image, price } = menuItem;
  return (
    <div className="flex space-x-4 mb-10">
      <div>
        <img
          style={{ borderRadius: "0 200px 200px 2000px" }}
          className="w-[104px]"
          src={image}
          alt={name}
        />
        <h3 className="uppercase">{name}-------------------</h3>
        <p className="w-3/4">{recipe}</p>
      </div>
      <p className="text-yellow-400">${price}</p>
    </div>
  );
};

export default MenuCard;
