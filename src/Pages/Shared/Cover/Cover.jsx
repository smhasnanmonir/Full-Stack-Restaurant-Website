const Cover = ({ img, heading, subHeading }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 w-full h-[250px]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
          <p className="mb-5">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
