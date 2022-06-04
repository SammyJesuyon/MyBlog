import React, {useContext, useEffect, useState} from 'react';
import CommentCard from "./commentCard";
import axios from 'axios';
import {BLOG_COMMENT_URL} from "../utils/urls";
import {store} from "../stateManagement/store";
import {commentTriggerAction} from "../stateManagement/actions";

const Comments = (props) => {
    const [fetching, setFetching] = useState(true);
    const [commentList, setCommentList] = useState([]);

    const {state: {commentTrigger}, dispatch} = useContext(store);

    useEffect(() => {
        if (commentTrigger) {
            axios.get(BLOG_COMMENT_URL + `?blog_id=${props.id}`).then(
                (res) => {
                    setCommentList(res.data)
                    setFetching(false)
                    console.log(res.data);
                },
                (err) => {
                    console.log(err.response);
                }
            );
            dispatch({ type: commentTriggerAction, payload: false });
        }
        }, [commentTrigger]);

    return (
        <div className='commentList'>
            <h3>Comments</h3>
            {fetching && <i>Loading...</i>}
            {!fetching && commentList.length < 1 ? (<h4>No comment available</h4>) : (
                commentList.reverse().map((item, key) => {
                    return <CommentCard key={key} data={item} />;
                })
            )}
        </div>
    );
};

export default Comments;