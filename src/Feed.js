import React from 'react';
import "./Feed.css";
import StoryReal from './StoryReal';
import "./StoryReal.css";
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReal />
            <MessageSender />
            
            <Post 
                profilePic='https://pbs.twimg.com/profile_images/1183746792938180613/1JGtqeNn_400x400.jpg'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='Achu Yakub'
                image='http://code.org/shared/images/social-media/codeorg2019_social.png'
            />
            <Post 
                profilePic='https://pbs.twimg.com/profile_images/1183746792938180613/1JGtqeNn_400x400.jpg'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='Achu Yakub'
                image='https://images.unsplash.com/photo-1599664085797-ee9c3934e1cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
            />
            <Post 
                profilePic='https://pbs.twimg.com/profile_images/1183746792938180613/1JGtqeNn_400x400.jpg'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='Achu Yakub'
            />
        </div>
    )
}

export default Feed
