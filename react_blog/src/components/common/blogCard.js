import React from 'react';
import moment from "moment";
import { Link } from 'react-router-dom';

const removeTags = (content) => {
    const regex = /(<([^>]+)>)/gi; //removes html tags from fetched strings
    const regex2 = /(&([a-z]+);)/gi;  //removes ampersand from fetched strings
    return content.replace(regex, '').replace(regex2, '');
}

const BlogCard = (props) => {
     console.log(props)
    return (
        <div className="blogCard" key={props.id}>
            <div className="blogImage" style={{backgroundImage: `url(${props.data.cover})` }}/>
            <div className="blogContent">
                <div className="blogTitle">{props.data.title}</div>

                <p>
                    {removeTags(props.data.content).toString().substring(0, 200)}
                    {/*if the original length of string is more than 100, the ... below renders*/}
                    {removeTags(props.data.content).toString().length>200 && '...'}
                </p>
                <Link to={`/${props.data.slug}`}><button>Continue Reading</button></Link>

                <div className="footer">
                    <span className="textCapitalized">
                        Created by {props.data.author.username}, on {moment(new Date(props.data.created_at)).format('YYYY-MM-DD')}
                    </span> {/*to style the date - npm import moment*/}
                </div>
            </div>
        </div>
    )
}

export default BlogCard;