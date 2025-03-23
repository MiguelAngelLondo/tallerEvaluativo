import React, { useState } from 'react';

export const N2 = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const total = likeCount - dislikeCount;

  return (
    <div className='Like-Dislike'>
      <div className="card">
        <button onClick={handleLike}>I Like it</button>
        <button onClick={handleDislike}>I don’t Like it</button>
        <p className='likes'>Likes: <span>{likeCount}</span></p>
        <p className='dislikes'>Dislikes: <span>{dislikeCount}</span></p>
        <p className='total'>Total Likes: <span>{total}</span></p>
      </div>
    </div>
  );
};
