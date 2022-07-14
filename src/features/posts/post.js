import React from "react";
import './post.css';

const Post = () => {
    return (
        <div className="post">
            <div className="topLine">
                <p>NEWS</p>
            </div>
            <div className="headLine">
                <h2>Headline</h2>
                <p>image</p>
            </div>
            <div className="bottomLine">
                <p id="poster">posted by</p>
                <p id="timeStamp">posted time</p>
                <p id="commentsLink">so many comments</p>
            </div>
        </div>
    )
};

export default Post;