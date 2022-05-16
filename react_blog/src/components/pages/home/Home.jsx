import React from 'react';
import './Home.scss';

const Home = (props) => {
    return (
        <div className="blog-container">
            <div className="navbar">
                <div className="brand">SamsBlog</div>
                <div className="navRight">

                    <div className="navLinks">
                        <a href="#">Facebook</a>
                    </div>

                    <div className="navLinks">
                        <a href="#">Twitter</a>
                    </div>

                    <div className="navLinks">
                        <a href="#">LinkedIn</a>
                    </div>

                    <div className="navLinks">
                        <a href="#">Log in</a>
                    </div>

                </div>
            </div>
            <div className="banner">
                <h2>Welcome to SamsBlog!</h2>
                <p>Here you will find all the latest news from every genre.</p>
                <div className="searchBlog">
                    <input placeholder="Search blog contents"/>
                </div>
            </div>
            <div className="blogListContainer">
                <div className="blogList">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="blogExtras">
                        <h4>Top Blogs</h4>
                        <BlogCardExtra />
                        <BlogCardExtra />
                        <BlogCardExtra />
                        <BlogCardExtra />
                </div>
            </div>
        </div>
    );
};

const BlogCard = (props) => {
    return (
        <div className="blogCard">
            <div className="blogImage" />
            <div className="blogContent">
                <div className="blogTitle">Blog Title</div>
                <p>This is some part of the blog content...</p>
                <button>Continue Reading</button>
                <div className="footer">
                    <div className="author">Created by Samson, On 16-05-2022</div>
                </div>
            </div>
        </div>
    )  
}

const BlogCardExtra = (props) => {
    return (
        <div className="blogCardExtra">
            <div className="blogImage">
                <div className="blogContent">
                    <div className="blogTitle">Blog Title</div>
                    <button>Read Blog</button>
                    <div className="footer">
                        Created by Samson Kitigo, on 16-05-2022
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;