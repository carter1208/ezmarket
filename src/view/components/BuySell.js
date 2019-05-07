/**
 * Created by loc on 8/9/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class BuySell extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        /*
        <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="text-center">
                                <img src="assets/upload-folder.png" width={imgSize} height={imgSize} />
                            </div>
                            <div>
                                {T.translate("buysell.upload")}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="text-center">
                                <img src="assets/bitcoin-bag.png" width={imgSize} height={imgSize} />
                            </div>
                            <div>
                                {T.translate("buysell.payment")}
                            </div>
                        </div>
                    </div>
        * */
        let imgSize = 100;
        return (
            <div className="container-fluid buy-sell">
                <div className="container">
                    <div className="row text-center">
                        <h1>{T.translate("buysell.title")}</h1>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-sm-10">
                            <div className="head">Decentralized </div>
                            EZMarket is a decentralized application built on the Ethereum blockchain.
                            It has no centralized authority. It don’t require a middleman to function or to manage a user’s information.
                            No central point of failure, it's can't be shut down, our items are available at all times.
                        </div>
                        <div className="col-sm-2 text-center">
                            <img src="assets/decentralized.png" width={imgSize} height={imgSize} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-2 hidden-xs text-center">
                            <img src="assets/easy.png" width={imgSize} height={imgSize} />
                        </div>
                        <div className="col-sm-10">
                            <div className="head">Easy </div>
                            With EZMarket, you can buy items with a few clicks. Smart contracts are the bridge on blockchain to connect buyers and sellers.
                            Transactions are completed in a trustless manner and automatically
                        </div>
                        <div className="col-xs-12 visible-xs text-center">
                            <img src="assets/easy.png" width={imgSize} height={imgSize} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="head">Fast </div>
                            We are using decentralized database on blockchain, and caching technology to speed up application.
                            All operations are fast, secured and immediately synchronized
                        </div>
                        <div className="col-sm-2 text-center">
                            <img src="assets/fast.png" width={imgSize} height={imgSize} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-2 hidden-xs text-center">
                            <img src="assets/saving.png" width={imgSize} height={imgSize} />
                        </div>
                        <div className="col-sm-10">
                            <div className="head">Low fees </div>
                            Smart contracts save you money since we knock out the presence of an intermediary.
                            You don't have to pay a notary to witness your transaction
                        </div>
                        <div className="col-sm-12 visible-xs text-center">
                            <img src="assets/saving.png" width={imgSize} height={imgSize} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="head">Privacy </div>
                            The payment is executed by smart contract, so it's absolutely anonymous. User don't have to provide any personal information.
                            It makes you stay away from any kind of leak or attack.
                        </div>
                        <div className="col-sm-2 text-center">
                            <img src="assets/privacy.png" width={imgSize} height={imgSize} />
                        </div>
                    </div>

                    <br/>
                    <div className="row text-center white-paper">
                        <div className="title">
                                White Paper
                        </div>
                        <ul className="list">
                        <li className="list-item">
                            <a href="assets/wpen.pdf" target="_blank">
                                <img width={100} src="assets/wpicon1.png"/>
                                <div>English</div>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="assets/wpid.pdf" target="_blank">
                                <img width={100} src="assets/wpicon1.png"/>
                                <div>Indonesian</div>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="assets/wpph.pdf" target="_blank">
                                <img width={100} src="assets/wpicon1.png"/>
                                <div>Filipino</div>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="assets/wpvn.pdf" target="_blank">
                                <img width={100} src="assets/wpicon1.png"/>
                                <div>Vietnamese</div>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="assets/wpcn.pdf" target="_blank">
                                <img width={100} src="assets/wpicon1.png"/>
                                <div>Chinese</div>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="assets/wpua.pdf" target="_blank">
                                <img width={100} src="assets/wpicon1.png"/>
                                <div>Ukrainian</div>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="assets/wppt.pdf" target="_blank">
                                <img width={100} src="assets/wpicon1.png"/>
                                <div>Portuguese</div>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
