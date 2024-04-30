import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Loading from './Loading';
// Import the Loading component

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        setLoading(true)
        fetch("https://assignment-10-server-liart-ten.vercel.app/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false); // Set loading state to false after data is fetched
            });
    }, []);

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center max-w-[700px] mx-auto">
                    <h2 className="md:text-[40px] text-[28px] font-bold">From The Blogs</h2>
                    <p className=" dark:text-gray-600">Delve deeper into the world of art and craft with our engaging blog, where we explore trends, techniques, and stories behind the creations</p>
                </div>
                {loading ? ( // Render loading indicator if loading
                    <Loading />
                ) : (
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {blogs.map((blog) => (
                            <Blog key={blog.id} blog={blog} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;
