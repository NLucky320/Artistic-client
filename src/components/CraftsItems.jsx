import React, { useEffect, useState } from 'react';
import CraftsItem from './CraftsItem';
import Loading from './Loading'; // Import the Loading component

const CraftsItems = () => {
    const [craftsItems, setCraftsItems] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
          setLoading(true);
        fetch("https://assignment-10-server-liart-ten.vercel.app/crafts")
            .then((res) => res.json())
            .then((data) => {
                setCraftsItems(data);
                setLoading(false); // Set loading state to false after data is fetched
            });
    }, []);

    return (
        <div>
            <div className="p-4 mt-12 md:mt-[80px] text-center">
                <div className='max-w-[700px] mx-auto pb-6'>
                    <h2 className="md:text-[40px] text-[28px] font-bold pb-6">Art and Crafts</h2>
                    <p>Welcome to our vibrant online space dedicated to celebrating the beauty and creativity of art and craft! </p>
                </div>

                {/* Conditionally render loading indicator or crafts items */}
                {loading ? (
                    <Loading /> // Render loading indicator if loading
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {craftsItems.slice(0, 6).map(craftsItem => <CraftsItem key={craftsItem.id} craftsItem={craftsItem}></CraftsItem>)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CraftsItems;
