import React from 'react';
import { Link } from 'react-router-dom';

const ArtCategory = ({craftsCategory}) => {
    return (
             <Link to={`/subcategory/${craftsCategory.subcategory_Name}`} className="card space-y-3 shadow-xl image-full h-[300px]">
            {/* <div>
                 <a href={`/viewDetails/${craftsItem._id}`} className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary hover:bg-secondary text-white">View Details</a>
           </div> */}
                       <figure  className="h-full">
                <img src={craftsCategory.image} alt="" className="h-full w-full object-cover" />
            </figure>
  <div className="card-body absolute inset-0 flex justify-center items-center text-center">
                <h2 className="text-xl font-semibold">{craftsCategory.subcategory_Name}</h2>
                </div>
</Link>
    );
};

export default ArtCategory;