import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageURL = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL} />
                </div>
                <div className="media-body">
                    <div className="videoHeading">{video.snippet.title}</div>
                    <div className="videoDescription">{video.snippet.description}</div>
            </div>
            </div>
        </li>
    );
};

export default VideoListItem;