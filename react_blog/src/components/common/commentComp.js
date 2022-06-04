import React, {useContext, useState} from 'react';
import axios from 'axios';
import {BLOG_COMMENT_URL} from "../utils/urls";
import {store} from "../stateManagement/store";
import {commentTriggerAction} from "../stateManagement/actions";

const CommentComp = (props) => {
    const [commentData, setCommentData] = useState({blog_id: props.id});
    const [loading, setLoading] = useState(false);
    const {dispatch} = useContext(store);

    const onChange = (e) => {
        setCommentData({
            ...commentData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(BLOG_COMMENT_URL, commentData).then(
            (res) => {
                // console.log(res.data);
                setLoading(false);
                alert('comment sent');
                window.location.reload();
                setCommentData({blog_id: props.id});
                dispatch({ type: commentTriggerAction, payload: true });
            },
            (err) => {
                console.log(err.response);
                setLoading(false);
            }
        );
    };

    return (
        <div className='comment-comp'>
            <h3>Write a comment!</h3>
            <form onSubmit={onSubmit}>
                <input
                    placeholder='Enter your name'
                    name='name' value={commentData.name || ''}
                    onChange={onChange} /><br/><br/>

                <textarea
                    placeholder="Enter your comment"
                    rows={5}
                    cols={60}
                    name='comment'
                    value={commentData.comment || ''}
                    onChange={onChange} required /><br/>

                <button type='submit' disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            </form>
        </div>
    );
};

export default CommentComp;
