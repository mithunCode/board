/* eslint-disable react/prop-types */
const AnalyticCard = ({ src, name, num, bg }) => {
  return (
    <div className="rounded-[20px] w-[40%]   " style={{ backgroundColor: bg }}>
      <div className="flex justify-end ">
        <img src={src} alt="" className=" p-3 text-black " />
      </div>

      <p className="text-xs px-4" style={{ fontFamily: "Lato" }}>
        {name}
      </p>
      <p
        className="text-xs px-4 py-3 "
        style={{ fontFamily: "Open Sans", fontWeight: "700", fontSize: "24px" }}
      >
        {num}
      </p>
    </div>
  );
};

export default AnalyticCard;
