import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, videoClick }) => {
  return (
    <div>
      {videos.map((video) => {
        return (
          <VideoItem
            videoClick={videoClick}
            key={video.id.videoId}
            video={video}
          ></VideoItem>
        );
      })}
    </div>
  );
};

export default VideoList;
