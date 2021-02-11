import React from 'react';
import './Post.css';
import {Avatar} from "@material-ui/core";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar src={profilePic}
                className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>De timestamp doet het nog niet...</p>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="" />
            </div>

            <div className="post-options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
            </div>
        </div>
    )
};

export default Post;