const Cover = ({ img, heading }) => {
  return (
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
        <div className="p-[55px] bg-white w-3/4 mx-auto">
          <h1 className="text-3xl text-center">{heading}</h1>
          <p className="mt-[8px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
