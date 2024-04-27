import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCraftsItems = () => {
       const [craftsItems, setCraftsItems] = useState([]);
   
    useEffect(() => {
     fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => setCraftsItems(data));
    }, [])
    console.log(craftsItems)
    return (
        <div className="bg-[#F4F3F0] mt-12 md:mt-[80px] p-6 md:p-16 text-center">
              <div className='max-w-[700px] mx-auto'>
                     <h2 className="text-xl md:text-3xl font-extrabold pt-4">All Art Items</h2>
            <p className='py-4'> Our platform attracts a diverse audience of art enthusiasts, collectors, and shoppers seeking one-of-a-kind handmade treasures. By listing your craft item with us, you'll gain exposure to potential customers from around the world.</p>
       </div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className='hidden md:block'>Image</th>
        <th  className=''>Subcategory Name</th>
        <th>Item Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
                    {
                        craftsItems.map(craftsItem =>
                         <tr key={craftsItem._id}>
       
        <td  className='hidden md:block'>
       
            
              <div className="mask mask-squircle w-12 h-12 ">
                                    <img src={ craftsItem.image} alt="Avatar Tailwind CSS Component" />
    
        
          </div>
        </td>
        <td className=''>
         {craftsItem.subcategory_Name}
         
        </td>
        <td> {craftsItem.item_Name}</td>
        <td> {craftsItem.price}</td>
        <th>
          <Link to={`viewDetails/${craftsItem._id}`} className="btn bg-primary text-white btn-xs">Details</Link>
        </th>
      </tr>
                        )
     }
     
                    </tbody>
     
   
    
  </table>
</div>
    );
};

export default AllCraftsItems;