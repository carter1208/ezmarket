/**
 * Created by loc on 8/10/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class StopWatch extends Component {
    constructor(props) {
        super(props);

        let isOver = false;
        this.endTime = this.props.endTime || new Date(2017, 9, 30, 0, 0, 0);
        let now = new Date();
        if (now >= this.endTime) {
            isOver = true;
        }
        this.state = {
            isOver: isOver,
            days: "0",
            hours: "0",
            minutes: "0",
            seconds: "0"
        }

    }
    componentDidMount() {
        let now = new Date();
        if (now < this.endTime) {
            this.start();
        } else {
            this.stop();
        }
    }
    componentWillUnmount() {
    }

    countdown() {
        let now           = new Date();
        let diff          = new Date(this.endTime - now);
        let seconds_left  = Math.floor(diff.valueOf() / 1000);

        let seconds  = Math.floor(seconds_left / 1) % 60;
        let minutes  = Math.floor(seconds_left / 60) % 60;
        let hours    = Math.floor(seconds_left / 3600) % 24;
        let days     = Math.floor(seconds_left / 86400) % 86400;

        this.setState({
            days, hours, minutes, seconds
        });
        if (now >= this.endTime) {
            this.stop();
        }
    }

    start() {
        this.tId = setInterval(this.countdown.bind(this), 1000);
    }

    stop() {
        clearInterval(this.tId);
        if (this.props.onCountDownComplete) {
            this.props.onCountDownComplete();
        }
    }

    render() {
        if (this.state.isOver) {
            return <div></div>;
        }
        return (
            <div className="countdown">
                <div className="col-lg-1 col-xl-2"></div>

                <div className="col-md-12 col-lg-10 col-xl-8">
                    <div className="col-md-2"/>
                    <div className="col-md-2">
                        <div className="count-number">
                            {this.state.days}
                        </div>
                        <div className="count-label">{T.translate("countdown.days")}</div>
                    </div>

                    <div className="col-md-2">
                        <div className="count-number">
                            {this.state.hours}
                        </div>
                        <div className="count-label">{T.translate("countdown.hours")}</div>
                    </div>

                    <div className="col-md-2">
                        <div className="count-number">
                            {this.state.minutes}
                        </div>
                        <div className="count-label">{T.translate("countdown.minutes")}</div>
                    </div>

                    <div className="col-md-2">
                        <div className="count-number">
                            {this.state.seconds}
                        </div>
                        <div className="count-label">{T.translate("countdown.seconds")}</div>
                    </div>
                    <div className="col-md-2"/>
                </div>

                <div className="col-lg-1 col-xl-2"></div>


            </div>
        )
    }
}
