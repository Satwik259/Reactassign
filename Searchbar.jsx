import React from "react";
import search from "../assets/images/Search iconsearch.png";
import notification from "../assets/images/Vectorbell.png";
import profile from "../assets/images/image1bom.png";

const Searchbar = () => {
  return (
    <div className="w-full h-10 flex justify-between px-3 items-center">
      <div className="text-2xl font-semibold">Dashboard</div>
      <div className="flex gap-5 justify-end">
        <label className="flex bg-white rounded-30 px-3">
          <input
            type="search"
            placeholder="Search..."
            className="focus:outline-none"
          />
          <img src={search} alt="search" />
        </label>
        <img src={notification} alt="notification" />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Searchbar;
