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

const Post = ({
    username,
    title,
    content,
    url
}) => (
    <div className="post">
       <h4>{title}</h4>
       <div><a href={url}>{url}</a></div>
       <div>{content}</div>
       <h6>user: {username ? username: 'Anonymous'}</h6>
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
            />
        );
        return (
            <div id="posts">{postDivs}</div>
        );
    }
}

// reducers

const posts = (state = [], action) => {
    switch (action.type) {
        case 'POST':
            state.push(action.post);
            return state;
        default:
            return state;
    }
}

const postStore = createStore(posts);

//const postStore = createStore(posts);

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

// test stuff
//postStore.dispatch({
//    type: 'POST',
//    post: {
//        pk: '1',
//        fields: {
//            title: 'Title',
//            username: 'test',
//            content: 'first',
//        }
//    }
//});
//
//postStore.dispatch({
//    type: 'POST',
//    post: {
//        pk: '2',
//        fields: {
//            title: 'Blah',
//            username: 'haha',
//            content: 'Hello world!',
//        }
//    }
//});

Django.posts.map((post) => {
    postStore.dispatch({
        type: 'POST',
        post: post});
});
// websocket stuff
var socket = new WebSocket('ws://' + window.location.host + '/'+Django.wall+'/');

socket.onopen = function open() {
    console.log('WebSockets connection created.');
};

socket.onmessage = function message(event) {
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

if (socket.readyState == WebSocket.OPEN) {
    socket.onopen();
}

