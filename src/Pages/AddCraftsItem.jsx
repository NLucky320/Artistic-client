import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const AddCraftsItem = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleAddCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;

    // Retrieve form data
    const item_Name = form.item_Name.value;
    const subcategory_Name = form.subcategory_Name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    const image = form.image.value;
    const name = formData.name;
    const email = formData.email;

    const newCraftItem = {
      item_Name,
      subcategory_Name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      image,
      name,
      email,
    };

    // console.log(newCraftItem);
    form.reset();
    fetch("https://assignment-10-server-liart-ten.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft item added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className=" bg-gradient-to-r from-[#F9F3F0] via-[#FCE7DC] to-[#F9F3F0] mt-12 md:mt-[80px] p-6 text-center ">
      <Helmet>
                        <title>Artistic | Add Crafts</title>
                    </Helmet>
      <div className="max-w-[800px] mx-auto text-black">
        <h2 className="font-bold text-[28px] md:text-[40px] pt-4">
          Add Art Item
        </h2>
        <p className="py-4">
          {" "}
        Enhance your artistic collection with our 'Add Art Item' feature! Whether you're an established connoisseur or just beginning your journey as an art enthusiast, this tool empowers you to expand your repertoire and curate your own gallery with ease.
        </p>
      </div>
      <form onSubmit={handleAddCraftItem}>
        {/* form item_name and subcategory_name row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="item_Name"
                placeholder="Item Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>

            <select
              className="input input-bordered w-full"
              name="subcategory_Name"
            >
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
        </div>
        {/* form short description and price row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="short_description"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form rating and processing time row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="processing_time"
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form customization and stock status row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>

            <select
              className="input input-bordered w-full"
              name="customization"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>

            <select className="input input-bordered w-full" name="stockStatus">
              <option value="In Stock">In Stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
        </div>
        {/* form name and email row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="displayName"
                placeholder="Name"
                value={formData.name}
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Art"
          className="btn btn-block bg-primary text-white"
        />
      </form>
    </div>
  );
};

export default AddCraftsItem;
