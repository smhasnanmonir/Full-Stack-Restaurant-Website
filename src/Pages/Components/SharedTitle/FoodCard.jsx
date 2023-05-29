const FoodCard = ({ items }) => {
  return (
    <div className="card-1 bg-[#e9e6e2] text-center relative">
      <p className="absolute right-3 top-3 px-4 py-2 bg-black text-white">
        ${items.price}
      </p>
      <img className="w-full" src={items.image} />
      <div className="p-[24px] space-y-2">
        <h1 className="text-xl font-bold">{items.name}</h1>
        <p className="">{items.recipe}</p>
        <button className="btn-one">add to cart</button>
      </div>
    </div>
  );
};

export default FoodCard;
