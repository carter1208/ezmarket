/**
 * Created by loc on 8/9/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class Roadmap extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    onClickBuyTicket() {
        this.refs.refBuyTicket.openModal();
    }
    render() {
        return (
            <div id="roadmap" className="container-fluid roadmap">
                <div className="container">
                    <h1 className="text-center">{T.translate("roadmap.title")}</h1>
                    <section id="conference-timeline">

                        <div className="conference-center-line"></div>

                        <div className="timeline-start">{T.translate("roadmap.q4_2016_a")}</div>

                        <div className="conference-timeline-content">


                            <div className="timeline-article">
                                <div className="content-right-container">
                                    <div className="content-right">
                                        <p>
                                            {T.translate("roadmap.q1_ 2017")}
                                        </p>
                                    </div>
                                </div>
                                <div className="meta-date">
                                    <span className="date">Q1  </span>
                                    <span className="month">2017</span>
                                </div>
                            </div>

                            <div className="timeline-article">
                                <div className="content-left-container">
                                    <div className="content-left">
                                        <p>
                                            {T.translate("roadmap.q3_ 2017")}
                                        </p>
                                    </div>
                                </div>
                                <div className="meta-date active">
                                    <span className="date">Q3  </span>
                                    <span className="month">2017</span>
                                </div>
                            </div>

                            <div className="timeline-article">
                                <div className="content-right-container">
                                    <div className="content-right">
                                        <p>
                                            {T.translate("roadmap.q4_ 2017")}
                                        </p>
                                    </div>
                                </div>
                                <div className="meta-date">
                                    <span className="date">Q4  </span>
                                    <span className="month">2017</span>
                                </div>
                            </div>

                            <div className="timeline-article">
                                <div className="content-left-container">
                                    <div className="content-left">
                                        <p>
                                            {T.translate("roadmap.q1_2018_a")}
                                        </p>
                                    </div>
                                </div>

                                <div className="meta-date">
                                    <span className="date">Q1  </span>
                                    <span className="month">2018</span>
                                </div>
                            </div>

                            <div className="timeline-article">
                                <div className="content-right-container">
                                    <div className="content-right">
                                        <p>
                                            {T.translate("roadmap.q3_2018_a")}
                                        </p>
                                    </div>
                                </div>
                                <div className="meta-date">
                                    <span className="date">Q3  </span>
                                    <span className="month">2018</span>
                                </div>
                            </div>

                            <div className="timeline-article">
                                <div className="content-left-container">
                                    <div className="content-left">
                                        <p>
                                            {T.translate("roadmap.q4_2018_a")}
                                        </p>
                                    </div>
                                </div>
                                <div className="meta-date">
                                    <span className="date">Q4  </span>
                                    <span className="month">2018</span>
                                </div>
                            </div>

                            <div className="timeline-article">
                                <div className="content-right-container">
                                    <div className="content-right">
                                        <p>
                                            {T.translate("roadmap.q1_2019_a")}
                                        </p>
                                    </div>
                                </div>
                                <div className="meta-date">
                                    <span className="date">Q1  </span>
                                    <span className="month">2019</span>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-end">
                            {/*<i className="fa fa-caret-down"></i>*/}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
