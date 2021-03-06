import React from 'react';
import VideoPlayerCodeSnippet from '../../../codesnippet/VideoPlayerCodeSnippet';
import AudioPlayerCodeSnippet from '../../../codesnippet/AudioPlayerCodeSnippet';
import SlideshowPlayerCodeSnippet from '../../../codesnippet/SlideshowPlayerCodeSnippet';
import SlideshowSoundtrackPlayerCodeSnippet from '../../../codesnippet/SlideshowSoundtrackPlayerCodeSnippet'
import AudioVinylPlayerCodeSnippet from '../../../codesnippet/AudioVinylPlayerCodeSnippet';
import custom from '../../../../img/custom.png';


import ReactWebMediaPlayer from 'react-web-media-player';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="container center mt-5 showcase-header">
                <p>
                    You will find bellow some examples of what you can do with the React Video Player. Find the complete API doc of all the configurations and properties <span><Link to={`/docs`}>here</Link></span>.
                </p>
            </div>
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white pt-5">
                        <ReactWebMediaPlayer
                            id="1"
                            title="Big Buck Bunny - 2008"
                            thumbnail="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
                            video="https://nusid.net/video.mp4"
                            style={{ margin: "auto", marginTop: "0px" }}
                        />
                    </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h3 className="mb-4">Video player</h3>
                        <VideoPlayerCodeSnippet />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img pt-5">
                        <ReactWebMediaPlayer
                            id="2"
                            width={400} height={400}
                            title="Key Notez - Summer"
                            thumbnail={"https://nusid.net/album-cover.jpg"}
                            audio="https://nusid.net/audio.mp3"
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h3 className="mb-4">Audio player</h3>
                        <AudioPlayerCodeSnippet />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img pt-5">
                        <ReactWebMediaPlayer
                            width={400} height={400}
                            title="Key Notez - Summer"
                            thumbnail={"https://nusid.net/album-cover.jpg"}
                            audio="https://nusid.net/audio.mp3"
                            vinyl={{ img: "https://nusid.net/album-cover.jpg", rpm: 10 }}
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h3 className="mb-4">Retro vinyl audio player</h3>
                        <AudioVinylPlayerCodeSnippet />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white pt-5">
                        <ReactWebMediaPlayer
                            title="My Slideshow Player"
                            thumbnail="https://nusid.net/slide1.jpg"
                            slideshow={
                                [{
                                    img: "https://nusid.net/slide1.jpg",
                                    endTime: 4.0
                                }, {
                                    img: "https://nusid.net/slide2.jpg",
                                    endTime: 8.0
                                }, {
                                    img: "https://nusid.net/slide3.jpg",
                                    endTime: 12.0
                                }, {
                                    img: "https://nusid.net/slide4.jpg",
                                    endTime: 16.0
                                }, {
                                    img: "https://nusid.net/slide5.jpg",
                                    endTime: 20.0
                                }, {
                                    img: "https://nusid.net/slide6.jpg",
                                    endTime: 24.0
                                }, {
                                    img: "https://nusid.net/slide7.jpg",
                                    endTime: 28.0
                                }]}
                            style={{ margin: "auto", marginTop: "80px", marginBottom: "30px" }}
                        />
                    </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h3 className="mb-4">Slideshow player</h3>
                        <SlideshowPlayerCodeSnippet />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white pt-5">
                        <ReactWebMediaPlayer
                            title="My Audio & Slideshow Player"
                            thumbnail="https://nusid.net/slide1.jpg"
                            audio="https://nusid.net/audio.mp3"
                            slideshow={
                                [{
                                    img: "https://nusid.net/slide1.jpg",
                                    endTime: 4.0
                                }, {
                                    img: "https://nusid.net/slide2.jpg",
                                    endTime: 8.0
                                }, {
                                    img: "https://nusid.net/slide3.jpg",
                                    endTime: 12.0
                                }, {
                                    img: "https://nusid.net/slide4.jpg",
                                    endTime: 16.0
                                }, {
                                    img: "https://nusid.net/slide5.jpg",
                                    endTime: 20.0
                                }, {
                                    img: "https://nusid.net/slide6.jpg",
                                    endTime: 24.0
                                }, {
                                    img: "https://nusid.net/slide7.jpg",
                                    endTime: 28.0
                                }]}
                            style={{ margin: "auto", marginTop: "80px", marginBottom: "30px" }}
                        />
                    </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h3 className="mb-4">Slideshow player with audio soundtrack</h3>
                        <SlideshowSoundtrackPlayerCodeSnippet />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-12 my-auto showcase-text">
                        <h3 className="mt-3">Customizable elements</h3>
                    </div>
                </div>
                <div className="row no-gutters">

                    <div className="col-lg-6 order-lg-1  my-auto showcase-text">
                        <img className="img-fluid mb-5 float-right" src={custom} alt="" />
                    </div>
                    <div className="col-lg-6 order-lg-2 my-auto">
                        <ul style={{listStyle: "decimal", fontSize: "22px"}} className="ml-5">
                            <li><HashLink to="/docs#color">Choose the menu color</HashLink></li>
                            <li><HashLink to="/docs#title">Choose the player title</HashLink></li>
                            <li><HashLink to="/docs#thumbnail">Choose the thumbnail</HashLink></li>
                            <li><HashLink to="/docs#buttons">Add your custom buttons</HashLink></li>
                            <li><HashLink to="/docs#logo">Add your logo</HashLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
