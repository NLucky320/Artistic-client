import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { IoPricetag } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyArt = ({item}) => {
    const { user } = useAuth() || {};
    const [items, setItems] = useState([]);
    const [sortOption, setSortOption] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/myArt/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [user]);
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    }
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/crafts/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'your art has been deleted',
                                    'success'
                                )
                                const remaining = items.filter(craft => craft._id !== _id);
                                setItems(remaining)
                            }
                        })
                }
            })
   
       
        };
        return (
            <div className=" mt-12 md:mt-[80px] p-6 md:p-16 text-center">
                <div className="max-w-[700px] mx-auto">
                    <h2 className="text-xl md:text-3xl font-extrabold pt-4">Art Item</h2>
                    <p className="py-4">
                        Our platform attracts a diverse audience of art enthusiasts,
                        collectors, and shoppers seeking one-of-a-kind handmade treasures. By
                        listing your craft item with us, you will gain exposure to potential
                        customers from around the world.
                    </p>
                </div>
                <div className="py-14 text-center ">
                    <select
                        className=" px-8 py-3 bg-primary text-white rounded "
                        onChange={handleSortChange}
                        value={sortOption}
                    >
                        <option>Sort By Customization</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
       
                    </select>
                </div>
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
                                    {item.item_Name}
                                </h3>
                            </div>
                            <div className="flex justify-between items-start text-start pt-4 border-b border-dashed pb-2">
                                <div className="text-[16px] text-[#181726]">
                                    Stock Status: {item?.stockStatus}
                                </div>

                                <div className="text-[16px] text-[#181726]">
                                    Customization: {item?.customization}
                                </div>
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
                           <Link to={`/updateArt/${item._id}`}> <button className="btn bg-primary text-white">Update</button></Link>
                            <button onClick={() => handleDelete(item._id)} className="btn bg-primary text-white">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
export default MyArt;