import React, { useState, useEffect } from 'react';
import './Home.scss';
import '../../../default.scss';
import axios from "axios";
import {BLOG_URL} from "../../utils/urls";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //to use this icon, npm i --save @fortawesome/free-solid-svg-icons
                                                                    //npm i --save @fortawesome/free-regular-svg-icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MainLayout from "../../layouts/mainlayout";
import BlogCard from "../../common/blogCard";
import BlogCardExtra from "../../common/blogCardExtra";


const Home = (props) => {
    const [fetching, setFetching] = useState(true)
    const [blogList, setBlogList] = useState([])

    useEffect( () => {
        getBlogContent();
    }, [])

    const getBlogContent = () => {
        {/*The then() method returns a Promise. It takes up to two arguments:
        callback functions for the success and failure cases of the Promise.*/}
        axios.get(BLOG_URL).then(res => {
            setBlogList(res.data); //after the data has been fetched
            setFetching(false); //setFetch stops getting data
            // console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="blog-container">
            <MainLayout />
            <div className="banner">
                <h2>Welcome to AnimeBlog!</h2>
                <p>Here you will find all the latest news from every genre.</p>

                <div className="searchBlog">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                    <input placeholder="Search blog contents"/>
                </div>
            </div>
            <div className="blogListContainer">
                {fetching ? (
                        <div className='blogList'>
                            <Skeleton className='blogCard' height={250}/>
                            <Skeleton className='blogCard' height={250}/>
                            <Skeleton className='blogCard' height={250}/>
                            <Skeleton className='blogCard' height={250}/>
                        </div>
                    ) : (
                        <div className="blogList">
                            {blogList.map((item, id) => (
                               <BlogCard id={id} data={item} key={id}/>
                            ))}
                        </div>
                    )}

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

export default Home;