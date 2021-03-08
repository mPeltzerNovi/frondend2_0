import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

//https://www.laserinternational.org/wp-content/uploads/2016/12/Vaughn-Harrison-Hiking-in-Mexico-940x438-840x438.jpg

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://www.prodirectrunning.com/productimages/V3_1_Main/161593.jpg"
                message="Deauville was geweldig!!! Aanrader voor iederen!"
                timestamp="This is a timestamp"
                username="Claudia"
                image="https://acupoflife.nl/wp-content/uploads/2014/01/Screen-Shot-2014-01-09-at-21.50.57.jpg"

            />
            <Post
                profilePic="https://outdoor-and-country-res.cloudinary.com/image/upload/e_trim:2/bo_8px_solid_white/c_pad,b_white,w_1000,h_1200,f_auto,q_auto/v1581524995/product/234544.jpg"
                message="Je bent zo in Garmisch. super voor een weekendje weg in de winter! Leuk huisje ook."
                timestamp="This is a timestamp"
                username="Piet"
                image="https://www.chalet-pillerseetal.com/images/ski/skifahren-pillerseetal2.jpg"
            />
            <Post />

        </div>
    )
}

export default Feed;