import React from 'react'
import { Button } from 'react-bootstrap'

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

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const buttonsInstance = (
        <div className="well" style={wellStyles}>
            <Button bsStyle="primary" bsSize="large" block>Like</Button>
            <Button bsSize="large" block>Hate</Button>
        </div>
        );

// <div><a onClick={voteLike}>▲</a></div>
    //<Button bsStyle="primary" bsSize="large" block>Like</Button>
// components
export const Counter = ({
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

