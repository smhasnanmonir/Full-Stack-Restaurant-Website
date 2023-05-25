const SharedTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-4/12 text-center mx-auto">
      <p className="text-yellow-300 mb-4 text-xl">{subHeading}</p>
      <p className="text-4xl uppercase border-y-4 py-4 mb-8">{heading}</p>
    </div>
  );
};

export default SharedTitle;
