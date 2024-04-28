import React from 'react';
import { IoPricetag } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { useLoaderData } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
const ViewDetails = () => {
    const craftsItem = useLoaderData();
    return (
        <Slide direction="up">
            <Helmet>
                        <title>Artistic | Details</title>
                    </Helmet>
             <div
                        key={craftsItem._id}
                        className="items-center max-w-xl mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 m-4 mt-12 md:mt-[80px]"
        >
             <div className="space-y-2">
                                <h2 className="text-xl font-bold text-center dark:text-violet-600">
                                  Subcategory Name:  {craftsItem?.subcategory_Name}
                                </h2>
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
                                <div className="text-[16px] text-[#181726]">
                                    Stock Status: {craftsItem?.stockStatus}
                                </div>

                                <div className="text-[16px] text-[#181726]">
                                    Customization: {craftsItem?.customization}
                                </div>
                            </div>
                           
                        </div>
                        <div className="flex justify-between items-start text-start pt-2 border-b border-dashed pb-2">
                            <div className="flex gap-2 items-start">
                                <div className="text-xl">
                                    <IoPricetag />
                                </div>
                                <div className="text-[16px] text-[#181726]">
                                    Price: {craftsItem?.price}$
                                </div>
                            </div>

                            <div className="flex gap-2 items-start">
                                <div className="text-xl">
                                    <FcRating />
                                </div>
                                <div className="text-[16px] text-[#181726]">
                                    Rating: {craftsItem?.rating}
                                </div>
                            </div>
                        </div>
    
                    </div>
        </Slide>
        
    );
};

export default ViewDetails;