import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const AllCraftsItems = () => {
  const [craftsItems, setCraftsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-server-liart-ten.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setCraftsItems(data);
        setLoading(false); // Move setLoading(false) inside the fetch callback to set loading to false after data is fetched
      });
  }, []);

  return (
    <div className="mt-12 md:mt-[80px] p-6 md:p-16 text-center">
      <Helmet>
        <title>Artistic | All Crafts</title>
      </Helmet>
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-bold text-[28px] md:text-[40px] pt-4">
          All Art Items
        </h2>
        <p className="py-4">
          Our platform attracts a diverse audience of art enthusiasts,
          collectors, and shoppers seeking one-of-a-kind handmade treasures. By
          listing your craft item with us, you'll gain exposure to potential
          customers from around the world.
        </p>
      </div>

      <div className="overflow-x-auto whitespace-nowrap">
              <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="hidden md:block">Image</th>
            <th className="">Subcategory Name</th>
            <th>Item Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="w-100%">
          {/* Conditionally render loading indicator or crafts items */}
          {loading ? (
            <tr>
              <td colSpan="6">
                <Loading />
              </td>
            </tr>
          ) : (
            craftsItems.map((craftsItem, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="hidden md:block">
                  <div className="mask mask-squircle w-12 h-12 ">
                    <img src={craftsItem.image} alt="image" />
                  </div>
                </td>
                <td className="">{craftsItem.subcategory_Name}</td>
                <td> {craftsItem.item_Name}</td>
                <td> {craftsItem.price}</td>
                <td>
                  <Link
                    to={`viewDetails/${craftsItem._id}`}
                    className="btn bg-primary text-white btn-xs"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
</div>
    </div>
  );
};

export default AllCraftsItems;
