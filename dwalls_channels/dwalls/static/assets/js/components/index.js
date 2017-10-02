import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'

import { Counter } from './counter'
// class components
export class LogIn extends React.Component {
    render(){
        return (
            <div>
            <a href={Django.urls.log_out}>Sign Up</a>|<a href={Django.urls.post}>Post</a>
            </div>
        )
    }
}

export class Title extends React.Component {
    render(){
        return (
            <h3>w/{Django.wall}</h3>
        )
    }
}

// function component
export const Post = ({
    username,
    id,
    title,
    content,
    url,
    like,
    dislike
}) => (
    <div className="post-wrapper">
       <Counter
       like={like}
       dislike={dislike}
       id={id}
       />
       <div className="post-content">
       <h4><a href={url}>{title}</a></h4>
       <div>{content}</div>
       <h6>user: {username ? username: 'Anonymous'}</h6>
       </div>
    </div>
);

export class Posts extends React.Component {
    render(){
        const postDivs = this.props.posts.map((post) =>
            <Post
            key={post.pk}
            username={post.fields.username}
            title={post.fields.title}
            content={post.fields.text}
            url={post.fields.url}
            like='0'
            dislike='0'
            />
        );
        return (
            <div id="posts-wrapper">{postDivs}</div>
        );
    }
}

