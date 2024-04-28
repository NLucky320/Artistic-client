import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
     const [blogs, setBlogs] = useState([]);
   
    useEffect(() => {
     fetch("https://assignment-10-server-liart-ten.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    }, [])
    // console.log(blogs)
    return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center max-w-[700px] mx-auto">
			<h2 className="text-3xl font-bold">From The Blogs</h2>
			<p className="font-serif dark:text-gray-600">Delve deeper into the world of art and craft with our engaging blog, where we explore trends, techniques, and stories behind the creations</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
		</div>
	</div>
</section>
    );
};

export default Blogs;