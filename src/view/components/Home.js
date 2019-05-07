/**
 * Created by loc on 8/8/2017.
 */
import React, {Component, PropTypes} from 'react';
import StopWatch from "./StopWatch";
import T from "i18n-react";
import Diaglog from "./Diaglog";
import Progress from "./Progress";
import Crowdsale from "./Crowdsale";
import Presale from "./Presale";

/*
* GMT
* presale time  : Sunday, October 1, 2017 10:00:00 AM       1506852000000
* start time    : Saturday, October 14, 2017 10:00:00 AM    1507975200000
* end time      : Saturday, November 25, 2017 10:00:00 AM   1511604000000
* total         : 6 weeks
*
* Local:
* GMT+7
**/

export default class Home extends Component {
    constructor(props) {
        super(props);

        let week = 7 * 24 * 60 * 60 * 1000;
        // this.presaleTime = 1506852000000; //1-10
        this.presaleTime = 1506765600000; //30-9
        this.startTime   = 1507975200000;
        this.endTime     = this.startTime + (6 * week);
        this.deadlines   = [
            this.startTime + 1 * week,
            this.startTime + 2 * week,
            this.startTime + 3 * week,
            this.startTime + 4 * week,
            this.startTime + 5 * week,
            this.startTime + 6 * week
        ];
        this.prices = [1300, 1250, 1200, 1150, 1100, 1000];

        //TESTING
        // let second = 1000;
        // let minute = 60*1000;
        // let now = new Date();
        // now = now.getTime();
        // this.presaleTime = now + 1 * second;
        // this.startTime = now + 5 * second;
        // this.endTime = this.startTime + 600 * second;
        // this.deadlines = [
        //     this.startTime + 10 * second,
        //     this.startTime + 20 * second,
        //     this.startTime + 30 * second,
        //     this.startTime + 40 * second,
        //     this.startTime + 50 * second,
        //     this.startTime + 60 * second
        // ];
        //END TEST

        this.state = {
            isPresale: false,
            isStart: false,
            isEnd: false,
            rate: 0
        }
    }
    componentDidMount() {
        this.checkStatus();
    }
    componentWillUnmount() {
    }

    checkStatus() {
        let isStart = false;
        let isPresale = false;

        let now = new Date();
        now = now.getTime();

        if (now < this.presaleTime) {
            //set timeout to start presale
            this.tID = setTimeout(this.startPresale.bind(this), this.presaleTime - now);
        } else if (now < this.startTime) {
            //start presale
            this.startPresale();
        } else if (now < this.endTime) {
            //start sale
            this.startSale();
        }

    }

    startPresale() {
        clearTimeout(this.tID);
        this.setState({isPresale:true});
    }

    startSale() {
        this.getRate();
        setInterval(this.getRate.bind(this), 60*1000); //60s
        this.setState({
            isStart:true
        })
    }

    getRate() {
        let now = new Date();
        now = now.getTime();

        let rate = 0;
        for (let i=0 ; i < this.deadlines.length; i++) {
            if (now < this.deadlines[i]) {
                rate = this.prices[i];
                break;
            }
        }
        this.setState({rate: rate});
    }

    onClickPresale() {
        this.refs.refPresale.openModal();
    }

    onClosePresale() {
        this.refs.refPresale.closeModal();
    }

    onCountDownSaleComplete() {
        this.setState({
            isEnd: true
        });
    }

    onCountDownStartComplete() {
        this.startSale();
    }

    render() {
        let jsx = "";
        if (this.state.isEnd) {
            jsx = (
                <div>
                    <h1>{T.translate("crowdsale.end")}</h1>
                </div>
            );
        } else if (this.state.isStart) {
            jsx = (
                <div>
                    <h1>{T.translate("crowdsale.title")}</h1>
                    <div className="row">
                        <StopWatch
                            key="1"
                            endTime={this.endTime}
                            onCountDownComplete={this.onCountDownSaleComplete.bind(this)}
                        />
                    </div>
                    <br/>
                    {/*<Progress/>*/}
                    <div><strong>{T.translate("crowdsale.rate")} : 1 ETH = {this.state.rate} EZM</strong></div>
                    <br/>
                    <Crowdsale/>
                </div>
            );
        } else {
            let jsxPresale = (
                <div className="row">
                    <button
                        className="btn btn-presale"
                        onClick={this.onClickPresale.bind(this)}
                    >
                        {T.translate("button.presale")}
                    </button>
                </div>
            );
            let jsxPrepare = (
                <div className="row">
                    <br/>
                    <h4 style={{color: 'cyan'}}>Pre-sale will start on Sunday, October 1, 2017</h4>
                </div>
            );

            jsx = (
                <div>
                    {
                        //this.state.isPresale ? jsxPresale : jsxPrepare
                    }
                    <h3>{T.translate("countdown.title")}</h3>
                    <div className="row">
                        <StopWatch
                            key="2"
                            endTime={this.startTime}
                            onCountDownComplete={this.onCountDownStartComplete.bind(this)}
                        />
                    </div>

                </div>
            );
        }
        return (
            <div id="home" className="container-fluid home">
                <div className="bg-overlay">
                    <h1>{T.translate("home.title")}</h1>
                    <div className="home-content">
                        <p>
                            {T.translate("home.content")}
                        </p>
                        <div className="h-line"/>
                    </div>

                    {jsx}

                    <Diaglog
                        ref="refPresale"
                        isOpen={false}
                        contentLabel=""
                    >
                        <Presale
                            onClose={this.onClosePresale.bind(this)}
                        />
                    </Diaglog>
                </div>
            </div>
        )
    }
}
