/**
 * Created by loc on 8/9/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class Roadmap2 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div id="roadmap" className="container-fluid roadmap">
                <div className="container">
                    <h1 className="text-center title">{T.translate("roadmap.title")}</h1>
                    <ul  className="roadmap-list">
                        <li  className="roadmap-item finished">
                            <div  className="roadmap-item-top">
                                Q1 2017
                            </div>
                            <div  className="roadmap-item-bottom">
                                Start of project <br/> Research: blockchain technology, ethereum smart contract
                            </div>
                        </li>
                        <li  className="roadmap-item finished">
                            <div  className="roadmap-item-top">
                                Q3 2017
                            </div>
                            <div  className="roadmap-item-bottom">
                                Start ICO <br/> Build website, marketing, token sale
                            </div>
                        </li>
                        <li  className="roadmap-item">
                            <div  className="roadmap-item-top">
                                Q4 2017
                            </div>
                            <div  className="roadmap-item-bottom">
                                Development phase 1 <br/> Build core framework, design database, APIs
                            </div>
                        </li>
                        <li  className="roadmap-item">
                            <div  className="roadmap-item-top">
                                Q1 2018
                            </div>
                            <div  className="roadmap-item-bottom">
                                Development phase 2 <br/> Account, content management functions
                            </div>
                        </li>
                        <li  className="roadmap-item">
                            <div  className="roadmap-item-top">
                                Q3 2018
                            </div>
                            <div  className="roadmap-item-bottom">
                                Development phase 3 <br/> Payment functions
                            </div>
                        </li>
                        <li  className="roadmap-item">
                            <div  className="roadmap-item-top">
                                Q1 2019
                            </div>
                            <div  className="roadmap-item-bottom">
                                Test and Release
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
