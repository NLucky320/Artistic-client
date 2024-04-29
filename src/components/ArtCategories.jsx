import React, { useEffect, useState } from 'react';
import ArtCategory from './ArtCategory';

const ArtCategories = () => {
       const [craftsCategories, setCraftsCategories] = useState([]);
   
    useEffect(() => {
     fetch("https://assignment-10-server-liart-ten.vercel.app/artsubcategory")
      .then((res) => res.json())
      .then((data) => setCraftsCategories(data));
    }, [])
    return (
          <div>
             <div className="p-4 mt-12 md:mt-[80px] text-center"> 
                <div className='max-w-[700px] mx-auto pb-6'>
                    <h2 className="font-bold text-[28px] md:text-[36px] pb-6">Discover Our Art and Craft Categories</h2>
                <p>Step into a world where creativity knows no bounds! Discover our vast array of art and craft categories, each offering a unique opportunity to explore your imagination and bring your ideas to life </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {
               craftsCategories.slice(0, 6).map(craftsCategory => <ArtCategory key={craftsCategory._id} craftsCategory={craftsCategory}></ArtCategory> )
            }
</div>
        </div>
        </div>
    );
};

export default ArtCategories;