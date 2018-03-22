import React from 'react';

export const Comment = ({ owner, text }) => (
  <div>
    <b>{owner}</b> {text}
  </div>
);
