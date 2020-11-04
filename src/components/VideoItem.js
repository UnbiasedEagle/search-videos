import React from 'react';

const VideoItem = ({ video, videoClick }) => {
  const onVideoClick = () => {
    videoClick(video);
  };

  return (
    <div
      onClick={onVideoClick}
      className='card horizontal'
      style={{ cursor: 'pointer' }}
    >
      <div className='card-image '>
        <img
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          className='responsive-img'
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
      </div>
      <div className='card-content'>
        <p>{video.snippet.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;
