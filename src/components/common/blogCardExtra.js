import React from 'react';

const BlogCardExtra = (props) => {
    return (
        <div className="blogCardExtra">
            <div className="blogImage" />
            <div className="blogContent">
                <div className="blogTitle">Blog Title</div>
                <button>Read Blog</button>
                <div className="footer">
                    Created by Samson Kitigo, on 16-05-2022
                </div>
            </div>
        </div>
    )
}

export default BlogCardExtra;