var React = require('react')
var ReactDOM = require('react-dom')

import { createStore } from 'redux'

console.log(Django.posts);
// components
// class components
class LogIn extends React.Component {
    render(){
        return (
            <div>
            <a href={Django.urls.log_out}>Sign Up</a>|<a href={Django.urls.post}>Post</a>
            </div>
        )
    }
}

class Title extends React.Component {
    render(){
        return (
            <h3>w/{Django.wall}</h3>
        )
    }
}


// function component

const Counter = ({
    like,
    dislike,
    id
}) => (
    <div className="vote">
    <div><a onClick={voteLike}>▲</a></div>
    <div>{like ? like: '0'}</div>
    <div>{dislike ? dislike: '0'}</div>
    <div><a onClick={voteDislike}>▼</a></div>
    </div>
);

const Post = ({
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

class Posts extends React.Component {
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


// reducers

const posts = (state = [], action) => {
    switch (action.type) {
        case 'POST':
            return [...state, action.post];
        case 'VOTE':
            return state.map(post =>{
                if(post.id !== action.id){
                    return post;
                }

                return {
                    id: post.id,
                    username: post.username,
                    title: post.title,
                    content: post.content,
                    url: post.url,
                    like: post.like + action.like,
                    dislike: post.dislike + action.dislike
                };
            });
        default:
            return state;
    }
}

const postStore = createStore(posts);

// dispatchers
function voteLike(id){
    postStore.dispatch({
        type: 'VOTE',
        like: 1,
        dislike: 0,
        id: id
    });
}

function voteDislike(id){
    postStore.dispatch({
        type: 'VOTE',
        like: 0,
        dislike: 1,
        id: id
    });
}

// render
const render = () => {
    ReactDOM.render(
        <div>
        <LogIn />
        <Title />
        <Posts posts={postStore.getState()}/>
        </div>,
    document.getElementById('container')
    );
}

postStore.subscribe(render);
render();

// Data from view
Django.posts.map((post) => {
    postStore.dispatch({
        type: 'POST',
        post: post});
});

// websocket stuff
var wallSocket = new WebSocket('ws://' + window.location.host + '/'+Django.wall+'/');
var userSocket = new WebSocket('ws://' + window.location.host + '/users/');

userSocket.onopen = function open() {
    console.log('WebSockets connection created.');
};

userSocket.onmessage = function message(event) {
    var data = JSON.parse(event.data);
    // NOTE: We escape JavaScript to prevent XSS attacks.
    if(event.data.type === 'POST'){
        wallStore.dispatch({
            type: 'POST',
            post: event.data.post
        })
    }
    else{
        var username = encodeURI(data['username']);
        var user = $('li').filter(function () {
            return $(this).data('username') == username;
        });
        if (data['is_logged_in']) {
            user.html(username + ': Online');
        }
        else {
            user.html(username + ': Offline');
        }
    }
};

if (userSocket.readyState == WebSocket.OPEN) {
    userSocket.onopen();
}

