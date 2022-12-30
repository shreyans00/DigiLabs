import React from 'react';
import videoImg from '../Images/video.png';
import Transit from './Transit';

const VideoInfo = () => {
    return (
        <>
            <section className="Video">
                <Transit content="VIDEO TITLE" />
                <h1>Inform users with video sections</h1>
                <img src={videoImg} alt="Video here" />
                <div className="box"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p>
            </section>
        </>
    );
};

export default VideoInfo;