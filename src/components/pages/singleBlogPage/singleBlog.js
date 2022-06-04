import React, {useState, useEffect} from 'react';
import BlogCardExtra from "../../common/blogCardExtra";
import '../../../default.scss'
import './singleBlog.scss';
import MainLayout from "../../layouts/mainlayout";
import CommentComp from "../../common/commentComp";
import Comments from "../../common/comments";
import axios from 'axios';
import {BLOG_URL} from "../../utils/urls";
import Skeleton from "react-loading-skeleton";
import {useParams} from "react-router-dom";
import moment from "moment";


const SingleBlog = (props) => {
    const [fetching, setFetching] = useState(true);
    const [activeBlog, setActiveBlog] = useState({
        author: {
            username: ''
        },
        content: '',
        cover: '',
        title: '',
        created_at: Date
    });

    let params = useParams();

    useEffect(() => {
        const url = BLOG_URL+params['slug']
        axios.get(url).then(
            (res) => {
                const activeBlog = res.data
            setActiveBlog(activeBlog);
                setFetching(false);
            // console.log(activeBlog);
            }).catch(err => {
            console.log(err);
        })
    }, []);

        return (<>
            <MainLayout />
            <div className='singleBlog'>
                <div className='cover-main' style={{backgroundImage: `url(${activeBlog.cover})`}}/>
                <br/>
                <div className='blogPage'>

                        {
                            fetching ? (<div className='blogListContainer'>
                                    <div>
                                        <Skeleton className='blogCard' height={40} width={100}/>
                                        <Skeleton className='blogCard' height={40} width={200}/>
                                        <Skeleton className='blogCard' height={40}/>
                                        <Skeleton className='blogCard' height={40}/>
                                        <Skeleton className='blogCard' height={40}/>
                                    </div>
                                </div>) :
                                (<div className='blogListContainer'>
                                <h2 dangerouslySetInnerHTML={{__html: activeBlog.title}}/>
                            <div className='author text-capitalize'>
                                Created By: {activeBlog.author.username}, on {moment(new Date(activeBlog.created_at)).format('YYYY-MM-DD')}
                            </div>
                            <p dangerouslySetInnerHTML={{__html: activeBlog.content}} />

                            <CommentComp id={activeBlog.id} />
                            <Comments id={activeBlog.id}/>
                                </div>)
                        }

                    <div className='blogExtras'>
                        <h4>Related Blogs</h4>
                        <BlogCardExtra />
                        <BlogCardExtra />
                        <BlogCardExtra />
                        <BlogCardExtra />
                    </div>
                </div>
            </div>
            </>
        );
}

export default SingleBlog;