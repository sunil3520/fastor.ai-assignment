import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import { IoStar } from "react-icons/io5";

const SingleProduct = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.ProductReducer?.products);
  let filterData = products && products?.filter((el) => el.restaurant_id == id);
  const { restaurant_name, rating, images, location, avg_cost_for_two } =
    filterData?.[0];
  return (
    <div className="">
      <img
        src={images?.[0].url && images?.[0].url}
        alt={restaurant_name && restaurant_name}
      />
      <div className="p-5 shadow-lg  h-[100vh]">
        <div className=" flex justify-between ">
          <div>
            <h2 className="font-bold ">{restaurant_name}</h2>
            <p>{` ${location?.city_name} ${location?.state_name}`}</p>
          </div>
          <div className="flex items-center">
            <IoStar />
            <span>{rating?.restaurant_avg_rating}</span>
          </div>
        </div>
        <div className="flex items-center text-orange-500">
          <BiSolidOffer />
          <span className="text-[12px]">4 Offers trending</span>
        </div>
        <div className="text-[#515151] font-[500] text-[14px] mt-8">
        Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
