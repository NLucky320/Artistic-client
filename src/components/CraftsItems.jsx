import React, { useEffect, useState } from 'react';
import CraftsItem from './CraftsItem';

const CraftsItems = () => {
      const [craftsItems, setCraftsItems] = useState([]);
   
    useEffect(() => {
     fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => setCraftsItems(data));
    }, [])
    console.log(craftsItems)
    return (
        <div>
             <div className="p-4 mt-12 md:mt-[80px] text-center"> 
                <div className='max-w-[700px] mx-auto pb-6'>
                    <h2 className="font-bold text-[40px] pb-6">Art and Crafts</h2>
                <p>Welcome to our vibrant online space dedicated to celebrating the beauty and creativity of art and craft! </p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {
                craftsItems.slice(0, 6).map(craftsItem => <CraftsItem key={craftsItem.id} craftsItem={craftsItem}></CraftsItem> )
            }
            </div>
        </div>
        </div>
    );
};

export default CraftsItems;