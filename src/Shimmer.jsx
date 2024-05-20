import React from "react";

const Shimmer = () => {
  return (
    <div className="res-card w-[200px] h-[auto] border-[1px] border-solid overflow-hidden m-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 text-sm rounded-xl animate-pulse">
      <div className="food-img w-[100%] h-[100px] bg-gray-300 rounded-xl"></div>
      <div className="heading mb-1 pt-[5px] h-[20px] w-[60%] bg-gray-300 mt-[10px] mx-[2px] rounded"></div>
      <div className="tags mb-1 ml-[2px] pl-[2px] h-[15px] w-[80%] bg-gray-300 rounded"></div>
      <div className="ratings mb-1 ml-[2px] pl-[2px] h-[15px] w-[50%] bg-gray-300 rounded"></div>
      <div className="ratings mb-1 ml-[2px] pl-[2px] h-[15px] w-[40%] bg-gray-300 rounded"></div>
    </div>
  );
};

export default Shimmer;
