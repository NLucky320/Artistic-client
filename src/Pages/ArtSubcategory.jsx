import React, { useEffect, useState } from 'react';
 import { IoPricetag } from "react-icons/io5";
import { FcRating } from "react-icons/fc";

import { Link, useParams } from "react-router-dom";
const ArtSubcategory = () => {
    const { subcategory_Name } = useParams(); // Using useParams to get the subcategory name from the URL
    const [items, setItems] = useState([]);
   
    useEffect(() => {
        fetch(`https://assignment-10-server-liart-ten.vercel.app/subcategory/${subcategory_Name}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
            .catch(error => console.error('Error fetching subcategory data:', error)); // Adding error handling
    }, [subcategory_Name]); // Adding subcategory_Name to the dependency array
    
    // console.log(items);
    return (
        <div>
                {items?.map((item) => (
                    <div
                        key={item._id}
                        className="items-center max-w-xl mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 m-4"
                    >
                        <div className="space-y-4 p-4">
                            <div>
                                <img
                                    src={item?.image}
                                    alt=""
                                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold dark:text-violet-600">
                                  Item:  {item.item_Name}
                                </h3>
                            </div>
                            <div className="space-y-2">
                                <h5 className=" font-semibold dark:text-violet-600">
                                   Subcategory: {item.subcategory_Name}
                                </h5>
                            </div>
                            <div className="space-y-2">
                                <p className="dark:text-violet-600">
                                   Description: {item?.short_description}
                                </p>
                            </div>
                               
                        </div>
                        <div className="flex justify-between items-start text-start pt-2 border-b border-dashed pb-2">
                            <div className="flex gap-2 items-start">
                                <div className="text-xl">
                                    <IoPricetag />
                                </div>
                                <div className="text-[16px] text-[#181726]">
                                    Price: {item?.price}$
                                </div>
                            </div>

                            <div className="flex gap-2 items-start">
                                <div className="text-xl">
                                    <FcRating />
                                </div>
                                <div className="text-[16px] text-[#181726]">
                                    Rating: {item?.rating}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-start text-start pt-4 pb-2">
                             <div className="text-[16x] text-[#181726]">
                                    Processing Time: {item?.processing_time}
                                </div>
                           <Link to={`/subcategory/viewDetails/${item._id}`}> <button className="btn bg-primary text-white">View Details</button></Link>
                    </div>
                    </div>
                ))}
        </div>
    );
};

export default ArtSubcategory;