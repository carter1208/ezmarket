/**
 * Created by loc on 8/16/2017.
 */
import React, {Component, PropTypes} from 'react';
import {request} from "../loader/HttpRequest";
import T from "i18n-react";

/*
total supply : 150 000 000 100%
crowdsale    : 114 000 000 76%
bounty       :   6 000 000 4%
company      :  30 000 000 20%
 */
export default class Distribution extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        let contractCode = "";
        return (
            <div id="token" className="container-fluid distribution">
                <div className="container">
                    <h1 className="text-center">{T.translate("distribution.title")}</h1>
                    <div className="h-boxes text-center">
                        <div className="col-sm-12 col-md-6 box">
                            <h3>{T.translate("distribution.distribution")}</h3>

                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.token_name")} </div>
                                <div className="col-sm-6 col-right">EZMarket</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.token_symbol")} </div>
                                <div className="col-sm-6 col-right">EZM</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.start_date")} </div>
                                <div className="col-sm-6 col-right">14/10/2017</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.end_date")} </div>
                                <div className="col-sm-6 col-right">25/11/2017</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.max_cap")} </div>
                                <div className="col-sm-6 col-right">150,000,000 EZM</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.accept_currency")} </div>
                                <div className="col-sm-6 col-right">ETH</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.rate")} </div>
                                <div className="col-sm-6 col-right">1 ETH = 1,000 EZM</div>
                            </div>

                        </div>

                        {/*<div className="col-sm-2 col-lg-2"></div>*/}

                        <div className="col-sm-12 col-md-6 box">
                            <div>
                                <h3>{T.translate("distribution.bonus")}</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.week1")} </div>
                                <div className="col-sm-6 col-right bonus">+30%</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.week2")} </div>
                                <div className="col-sm-6 col-right bonus">+25%</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.week3")} </div>
                                <div className="col-sm-6 col-right bonus">+20%</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.week4")} </div>
                                <div className="col-sm-6 col-right bonus">+15%</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.week5")} </div>
                                <div className="col-sm-6 col-right bonus">+10%</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left">{T.translate("distribution.after")} </div>
                                <div className="col-sm-6 col-right bonus">{T.translate("distribution.no_bonus")} </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-left"> </div>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <div className="h-line"/>

                    <div className="row">
                        <div className="h-box text-center">
                            <div className="col-sm-12 col-lg-6 box">
                                <h3>{T.translate("distribution.token-allocation")}</h3>
                                <div>
                                    <img src="assets/chart11.png" />
                                </div>

                            </div>
                            <div className="col-sm-12 col-lg-6 box">
                                <h3>{T.translate("distribution.fund_raise")}</h3>
                                <div>
                                    <img src="assets/chart2.png" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <div className="text-center">
                        EZMarket token is an ERC20-TOKEN. You can view our code
                        <a href="https://etherscan.io/address/0x12CF1CbAdde369a01D58F31Ff57E91db8c34364a#code" target="_blank"> here</a>
                    </div>

                </div>
            </div>
        )
    }
}
