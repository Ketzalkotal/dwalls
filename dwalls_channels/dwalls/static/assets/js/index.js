import React from 'react'
import ReactDOM from 'react-dom'

// components
import {LogIn, Title, Posts, Counter} from './components'
import { posts } from './reducers'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './Api'

const store = createStore(posts);

// Data from view
Django.posts.map((post) => {
    store.dispatch({
        type: 'POST',
        post: post});
});

// render
const render = () => {
    ReactDOM.render(
        <div>
        <LogIn />
        <Title />
        <Posts posts={store.getState()}/>
        </div>,
    document.getElementById('container')
    );
}

