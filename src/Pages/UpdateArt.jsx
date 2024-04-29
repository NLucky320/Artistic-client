import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateArt = () => {
     const initialData = useLoaderData();
    const [item, setItem] = useState(initialData);

    useEffect(() => {
        setItem(initialData);
    }, [initialData])
  const handleUpdateCraftItem = event => {
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

    const updatedCraftItem = {
        item_Name,
        subcategory_Name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        image
    };

    fetch(`https://assignment-10-server-liart-ten.vercel.app/crafts/${item._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCraftItem)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                setItem(updatedCraftItem);
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft item Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        })
        .catch(error => {
            console.error('Error updating craft item:', error);
        });
};

    return (
        <div className="bg-[#F4F3F0] mt-12 md:mt-[80px] p-6 md:p-16 text-center">
            <Helmet>
                        <title>Artistic | Update Art</title>
                    </Helmet>
          
            <div className='max-w-[700px] mx-auto'>
                     <h2 className="text-xl md:text-3xl font-extrabold pt-4">Update Art Item</h2>
            <p className='py-4'> Our platform attracts a diverse audience of art enthusiasts, collectors, and shoppers seeking one-of-a-kind handmade treasures. By listing your craft item with us, you'll gain exposure to potential customers from around the world.</p>
       </div>
            <form onSubmit={handleUpdateCraftItem}>
                {/* form item_name and subcategory_name row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_Name" defaultValue={item.item_Name}placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>

<select className='w-full p-4 border-solid rounded-lg ' name="subcategory_Name" defaultValue={item.subcategory_Name} >

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
                            <input type="text" name="short_description" defaultValue={item.short_description} placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                       <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={item.price}  placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="rating" defaultValue={item.rating}  placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                      <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" defaultValue={item.processing_time}  placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 {/* form customization and stock status row */}
                <div className="md:flex mb-8">
                          <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>

<select className='p-4 border-solid rounded-lg  w-full' name="customization" defaultValue={item.customization} >

  <option value="Yes">Yes</option>
  <option value="No">No</option>
 
                        </select>
                        </div>
                           <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>

<select className='p-4 border-solid rounded-lg  w-full' name="stockStatus" defaultValue={item.stockStatus} >
 
  <option value="In Stock">In Stock</option>
  <option value="Made to Order">Made to Order</option>

</select>
                </div>
                </div>
            
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" defaultValue={item.image} />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Art" className="btn btn-block bg-primary text-white" />

            </form>
        </div>
    );
};

export default UpdateArt;