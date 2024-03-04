import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
const SingleItem = ({restaurant_id,restaurant_name,rating,images,location,avg_cost_for_two}) => {
  return (
    <Link to={`/products/${restaurant_id}`}>
      <div className="flex p-3 gap-[5%] items-center">
        <div className="w-[50%]">
          <img
            className="w-full rounded-2xl"
          src={images[0]?.url}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold ">{restaurant_name}</h2>
          <p>{` ${location?.city_name} ${location?.state_name}`}</p>
          <div className="flex items-center text-orange-500">
            <BiSolidOffer />
            <span className="flex">4 Offers trending</span>
          </div>
          <div className="flex justify-between">
            <div className="">
              <div className="flex items-center">
                <IoStar />
                <span>{rating?.restaurant_avg_rating}</span>
              </div>
              <p className="text-[12px] text-[#8391A1]">Popularity</p>
            </div>
            <div>
              <span>`${avg_cost_for_two}</span>
              <p className="text-[12px] text-[#8391A1]">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;
