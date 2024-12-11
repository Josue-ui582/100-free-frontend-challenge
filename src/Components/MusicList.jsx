import React, { useState } from "react";
import clsx from "clsx";

const MusicList = ({ day, hours, musicTitle, musicDescription, bgColor }) => {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handlePaymentClick = () => {
    setIsSoldOut(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl hover:shadow-lg cursor-pointer">
      <div className={clsx(`bg-${bgColor} p-3 rounded-md text-center w-full md:w-auto`)}>
        <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">{day}</p>
        <h2 className="text-md sm:text-lg md:text-xl font-bold text-gray-800">{hours}</h2>
      </div>

      <div className="text-center md:text-left w-full md:w-auto">
        <h2 className="text-md sm:text-lg md:text-xl font-bold text-gray-800">{musicTitle}</h2>
        <p className="font-medium text-xs sm:text-sm md:text-base">{musicDescription}</p>
      </div>

      <div className="w-full md:w-auto text-center md:text-right">
        <button
          onClick={handlePaymentClick}
          className={clsx(
            "rounded px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 font-semibold transition-all duration-300",
            isSoldOut ? "bg-gray-300 text-gray-700 cursor-not-allowed" : "bg-black text-white"
          )}
          disabled={isSoldOut}
        >
          {isSoldOut ? "Sold Out!" : "Buy a Ticket"}
        </button>
      </div>
    </div>
  );
};

export default MusicList;