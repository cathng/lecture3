import React from 'react';
import { Post } from '../post';
import './timeline.css'

export const Timeline = ({ posts }) => (
  <div className="timeline">
    <div className="timeline__post-container">
      { posts.map(post => (
        <div className="timeline__post">
          <Post {...post} />
        </div>) )
      }
    </div>
  </div>
);
