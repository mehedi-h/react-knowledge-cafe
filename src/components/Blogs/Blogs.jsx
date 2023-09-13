import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmarks}) => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        fetch('/public/blogs.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-xl md:text-3xl font-medium md:font-semibold">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddBookmarks={handleAddBookmarks} >
                    </Blog>)
            }
        </div>
    );
};

export default Blogs;