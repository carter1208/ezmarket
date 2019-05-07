/**
 * Created by loc on 8/25/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.facebook = "https://www.facebook.com/EZMarket-112233276141456/";
        this.twitter = "https://twitter.com/ezmarketsupport";
        this.slack = "https://join.slack.com/t/ezmarketteam/shared_invite/enQtMjQ2NzEyMzU2NTMxLTM2M2E1ZjE1MDA2NDEwYjAyOTU2YjM4NzU1NWNjYmU1OGQwMTJlYWFmMzA4ZjhhYzE3OGVkMWQ4NTJjMjdiZDg";
        this.reddit = "https://www.reddit.com/user/EZMarket/";
        this.bitcointalk = "https://bitcointalk.org/index.php?topic=2215239";
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="container-fluit footer">
                <div className="container">

                    <div className="col-sm-7">
                        <div>{T.translate("footer.join")}</div>
                        <div className="social-link">
                            <a href={this.facebook} target="_blank">
                                <i className="fa fa-facebook" aria-hidden="true"/>
                            </a>
                            <a href={this.twitter} target="_blank">
                                <i className="fa fa-twitter" aria-hidden="true"/>
                            </a>
                            <a href={this.slack} target="_blank">
                                <i className="fa fa-slack" aria-hidden="true"/>
                            </a>
                            <a href={this.reddit} target="_blank">
                                <i className="fa fa-reddit-alien" aria-hidden="true"/>
                            </a>
                            <a href={this.bitcointalk} target="_blank">
                                <i className="fa fa-btc" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-5 text-right">
                        <div style={{marginTop:'10px'}}>EZMarket</div>
                        <div>
                            {T.translate("footer.copyright")}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
