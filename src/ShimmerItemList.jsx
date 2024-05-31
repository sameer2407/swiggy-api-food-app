import React from "react";

const ShimmerItemList = () => {
  return (
    <div>
      {Array(5)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="p-5 m-2 border-b-2 border-gray-200 text-base text-left flex justify-around animate-pulse"
          >
            <div className="w-1/2">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="relative item-image w-[156px] h-[144px] bg-gray-300 rounded-xl">
              <div className="absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-400 w-20 h-8 rounded-md"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerItemList;
