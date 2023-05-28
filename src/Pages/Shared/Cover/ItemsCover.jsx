const ItemsCover = ({ img, heading }) => {
  return (
    <div>
      <div className="mb-[70px]">
        <div
          className="chefService md:p-[150px]"
          style={{
            backgroundImage: `url("${img}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="p-[55px] bg-black bg-opacity-70  w-3/4 mx-auto">
            <h1 className="text-3xl text-center text-white">{heading}</h1>
            <p className="mt-[8px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCover;
