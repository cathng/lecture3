import React from 'react';
import './avatar.css';

export const Avatar = ({avatarUrl}) => (
  <div className="avatar">
    <img className="avatar__img" src={avatarUrl} alt="avatar"/>
    <button>Like Me</button>
  </div>
);
