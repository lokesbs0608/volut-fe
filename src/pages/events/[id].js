import React from "react";

const BlogDetails = ({ blog }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src={blog?.image}
                    alt={blog?.title}
                    className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {blog.title}
                    </h1>
                    <div
                        className="text-gray-700 text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
