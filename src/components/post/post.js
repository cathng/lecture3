import React from 'react';
import './post.css';
import { Avatar } from '../avatar';
import { Comment } from './comment.js';

export const Post = ({ date, location, likes, owner, imageUrl, comments=[] }) => (
  <div className="post">
    <div className="post__header">
      <div className="post__avatar">
        <Avatar avatarUrl={owner.avatarUrl} />
      </div>
      <div className="post__header-info">
        <div><b>{owner.name}</b></div>
        <div>{location}</div>
      </div>
    </div>
    <img className="post__img" src={imageUrl} alt='post'/>
    <div className="post__body">
      <div className="post__likes"><b>{likes} likes</b></div>
      { comments.map(comment => <Comment owner={comment.owner} text={comment.text} />) }
      <hr className="post__body-separator" />
      <input placeholder="Add a comment..." className="post__comment-input"/>
    </div>
  </div>
);
