import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }
  return (
    <div>
      <div className='video-container' style={{ marginTop: '8px' }}>
        <iframe
          title={video.snippet.title}
          src={`//www.youtube.com/embed/${video.id.videoId}`}
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h5 style={{ color: 'white' }}>{video.snippet.title}</h5>
      </div>
    </div>
  );
};

export default VideoDetail;
