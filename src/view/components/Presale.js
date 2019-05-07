/**
 * Created by loc on 8/16/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";
import {request} from "../loader/HttpRequest";
import $ from "jquery";

//https://www.matryx.ai/pre-sale

export default class Presale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            isAccept: false
        }
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    onClickSubmit() {
        this.setState({
            isAccept: true
        });
    }

    onClickClose() {
        this.props.onClose();
    }
    render() {
        /*
        * <div className="acceptment">
            <div className="checkbox">
                <label><input type="checkbox"
                              ref="ckbAccept1"
                              onChange={this.onClickCheckbox.bind(this)}
                              value=""/>
                    {T.translate("presale.acceptment")}
                </label>
            </div>

        </div>
        */

        let jsxJoin = "";
        if (this.state.isAccept) {
            jsxJoin = (
                <div className="acceptment">
                    <div>{T.translate("crowdsale.address")} :</div>
                    <br/>
                    <img src="assets/0x5a5E34163AA95D913F3153D13fe0B9d8Bbd37b66.png" width={200} height={200}/>
                    <h3 className="address">
                        0x5a5E34163AA95D913F3153D13fe0B9d8Bbd37b66
                    </h3>
                </div>
            );
        } else {
            jsxJoin = (
                <div>
                    <div className="warning">
                        {T.translate("presale.terms")}
                    </div>
                    <br/>
                    <div className="btn-group">
                        <button type="button" className="btn btn-ok"
                                onClick={this.onClickSubmit.bind(this)}
                        >{T.translate("presale.join")}</button>
                    </div>
                </div>
            );
        }

        return (
            <div className="container presale">
                <h1 className="text-center title">{T.translate("presale.title")}</h1>

                <div className="text-center">
                    EZMarket token is an ERC20-TOKEN. You can view our code
                    <a href="https://etherscan.io/address/0x12CF1CbAdde369a01D58F31Ff57E91db8c34364a#code" target="_blank"> here</a>
                </div>
                <div className="text-center">
                    {T.translate("presale.desc")}
                </div>
                <br/>

                <div className="text-center">
                    {jsxJoin}
                </div>
            </div>
        )
    }
}
