/**
 * Created by loc on 9/7/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class Partner extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    render() {
        let info = [
            {
                logo: "assets/icoAlert.png",
                link: "https://www.icoalert.com/"
            },
            {
                logo: "assets/coingecko.png",
                link: "https://www.coingecko.com/"
            },
            {
                logo: "assets/icoTracker.png",
                link: "https://icotracker.net/"
            },
            {
                logo: "assets/coinhills.png",
                link: "https://www.coinhills.com/"
            },
            {
                logo: "assets/cryptocompare.png",
                link: "https://www.cryptocompare.com/"
            },
            {
                logo: "assets/icotimeline.png",
                link: "https://icotimeline.com/"
            },
            {
                logo: "assets/insiderpro.png",
                link: "https://en.insider.pro/"
            },
            {
                logo: "assets/icotick.png",
                link: "http://icotick.com/"
            },
            {
                logo: "assets/bl4nkcode.png",
                link: "https://bl4nkcode.info/ico_list"
            },

        ];

        return (
            <div className="container-fluid partner">
                <div className="container text-center">
                    <h1>Thank to our Partners</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="info">
                                <a href={info[0].link} target="_blank">
                                    <img className="" src={info[0].logo}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="info">
                                <a href={info[1].link} target="_blank">
                                    <img className="" src={info[1].logo}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="info">
                                <a href={info[2].link} target="_blank">
                                    <img className="" src={info[2].logo}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="info">
                                <a href={info[3].link} target="_blank">
                                    <img className="" src={info[3].logo}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="info">
                                <a href={info[4].link} target="_blank">
                                    <img className="" src={info[4].logo}/>
                                </a>
                            </div>
                        </div><div className="col-sm-3">
                            <div className="info">
                                <a href={info[5].link} target="_blank">
                                    <img className="" src={info[5].logo}/>
                                </a>
                            </div>
                        </div><div className="col-sm-3">
                            <div className="info">
                                <a href={info[6].link} target="_blank">
                                    <img className="" src={info[6].logo}/>
                                </a>
                            </div>
                        </div><div className="col-sm-3">
                            <div className="info">
                                <a href={info[7].link} target="_blank">
                                    <img className="" src={info[7].logo}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="info">
                                <a href={info[8].link} target="_blank">
                                    <img className="" src={info[8].logo}/>
                                </a>
                            </div>
                        </div>
                        {/*<div className="col-sm-3"></div>*/}
                        {/*<div className="col-sm-3"></div>*/}
                        {/*<div className="col-sm-3"></div>*/}
                    </div>
                </div>
            </div>
        );
    }
}
