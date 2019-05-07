    /**
 * Created by loc on 9/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {request} from "../loader/HttpRequest";
export default class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0
        }
    }
    componentDidMount() {
        this.getBalance();
        setInterval(this.getBalance.bind(this), 10*60*1000);
    }
    componentWillUnmount() {
    }

    getBalance() {
        let url = "https://api.etherscan.io/api?module=account&action=balance&address=0x9d8349cc473FAAD744215246C622d84Ee112a415&tag=latest";
        request.get(url, null, this.onGetDataComplete.bind(this));
    }

    onGetDataComplete(data) {
        if (data && data.status == "1") {
            let wei = data.result;
            let bal = wei / (Math.pow(10, 18));
            this.setState({
                balance: bal.toFixed(3)
            });
        }
    }

    render() {
        let max = 114000;
        let current = 10;
        let percent = Math.ceil((current/max)*100);
        let s1 = {
            width: percent+'%'
        };
        console.log( current, max,percent);
        return (
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <div className="percent-bar">
                        <div className="percent-track" style={s1}>{percent}%
                        </div>
                    </div>
                    <div className="progress-min">Min: 0</div>
                    <div className="progress-max">Max: 114,000</div>
                </div>
                <div className="col-sm-2"/>
            </div>
        )
    }
}
