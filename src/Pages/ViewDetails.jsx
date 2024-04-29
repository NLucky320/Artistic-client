import React, { useEffect, useState } from "react";
import { IoPricetag } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";
const ViewDetails = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
        photo: user.photoURL || "",
      });
    }
  }, [user]);
  const craftsItem = useLoaderData();
  return (
    <div
      key={craftsItem._id}
      className="items-center max-w-xl mx-auto p-4 shadow-md mt-12 md:mt-[80px]"
    >
      {" "}
      <Helmet>
        <title>Artistic | Details</title>
      </Helmet>
      <div className="flex space-x-4 pb-6">
        <img
          alt=""
          src={formData.photo}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            {formData.name}
          </a>
          <span className="text-xs dark:text-gray-600">{formData.email}</span>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <img
            src={craftsItem?.image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold dark:text-violet-600">
            Item Name: {craftsItem?.item_Name}
          </h3>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold dark:text-violet-600">
            Subcategory Name: {craftsItem?.subcategory_Name}
          </h2>
        </div>
        <div className="space-y-2">
          <p className=" dark:text-violet-600">
            Description: {craftsItem?.short_description}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm dark:text-violet-600">
            Processing Time: {craftsItem?.processing_time}
          </p>
        </div>
        <div className="flex justify-between items-start text-start pt-4 border-y border-dashed pb-2">
          <div className="text-[16px] ">
            Stock Status: {craftsItem?.stockStatus}
          </div>

          <div className="text-[16px] ">
            Customization: {craftsItem?.customization}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start text-start py-2">
        <div className="flex gap-2 items-start">
          <div className="text-xl">
            <IoPricetag />
          </div>
          <div className="text-[16px] ">
            Price: {craftsItem?.price}$
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <div className="text-xl">
            <FcRating />
          </div>
          <div className="text-[16px] ">
            Rating: {craftsItem?.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
