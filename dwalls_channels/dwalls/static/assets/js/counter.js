import React from 'react'

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

// components
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

export default Counter
