import React from 'react';

const CraftsItem = ({craftsItem}) => {
    return (
       <div className="card space-y-3 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={craftsItem.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600 text-nowrap overflow-hidden text-ellipsis">{ craftsItem.item_name}</span>
		<h2 className="text-xl font-semibold tracking-wide">{ craftsItem.subcategory_Name}</h2>
	</div>
            <p className="dark:text-gray-800">{craftsItem.short_description}</p>
            <div>
                 <a href={`/viewDetails/${craftsItem._id}`} className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary hover:bg-secondary text-white">View Details</a>
           </div>
</div>
    );
};

export default CraftsItem;
