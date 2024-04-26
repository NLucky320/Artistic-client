import React from 'react';

const Blog = ({blog}) => {
    return (
      <article className="flex flex-col bg-[#F7F4EF] dark:bg-gray-50">
					<img alt="" className="object-cover w-full h-52 p-4 dark:bg-gray-500" src={blog.image} />
				
				<div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{ blog.name}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{ blog.title}</h3>
                <p>{ blog.description}</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>{blog.publishedDate}</span>
						<span>{blog.views} views</span>
					</div>
				</div>
			</article>
    );
};

export default Blog;