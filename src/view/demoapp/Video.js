/**
 * Created by carter on 8/25/2017.
 */
import React, {Component, PropTypes} from 'react';
export default class Video extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    pauseVideo(e){
        $(e.currentTarget).get(0).pause();
    }
    playVideo(e){
        $(e.currentTarget).get(0).play();
    }

    show(e){
        let isPlaying = e.currentTarget.childNodes[1].currentTime > 0 && !e.currentTarget.childNodes[1].paused && !e.currentTarget.childNodes[1].ended
            && e.currentTarget.childNodes[1].readyState > 2;
        $(e.currentTarget.childNodes[1]).show();
        if(!isPlaying) {
            $(e.currentTarget.childNodes[1].play());
        }
        $(e.currentTarget.childNodes[1]).css('top', (e.currentTarget.offsetTop + 100) + 'px');
        $(e.currentTarget.childNodes[1]).css('left', (e.currentTarget.offsetLeft + 50) + 'px');
    }

    hide(e){
        $(e.currentTarget.childNodes[1]).hide()
        if(!e.currentTarget.childNodes[1].paused) {
            $(e.currentTarget.childNodes[1].pause());
        }
    }

    render() {
        return (
            <div className="video">
                <div className="container">
                <h1>Videos Collection</h1>
                <div className="content">
                    <strong>Featured</strong>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/Workit.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/Workit.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.12</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/walking_on_stripes.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/walking_on_stripes.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.14</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/Steptwo.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/Steptwo.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.16</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <strong>Food</strong>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/Cest_chaud.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/Cest_chaud.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.15</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/Burrito_Time.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/Burrito_Time.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/HalfStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.11</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/Camping_Breakfast.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/Camping_Breakfast.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/HalfStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.09</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <strong>Tech</strong>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/Writing-Working.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/Writing-Working.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.1</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/Comic_Book.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/Comic_Book.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/HalfStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.1</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                            <div className="item">
                                <img src="https://s3.amazonaws.com/coverr-public/poster/Two_Guys_Walking.jpg" width="360px" height="202px"/>
                                <video className="vid" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} hidden>
                                    <source src="https://coverr.co/s3/mp4/Two_Guys_Walking.mp4"/>
                                </video>
                                <div className="stat">
                                    <span className="star">
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                        <img src="https://cdn.vsassets.io/v/20170824T204035/_content/FullStar.svg" width="10" height="10"/>
                                    </span>
                                    <span className="price">
                                        <strong>0.12</strong> ETH
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}/**
 * Created by carter on 8/28/2017.
 */
