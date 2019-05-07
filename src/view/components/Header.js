/**
 * Created by loc on 8/7/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from 'i18n-react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    onClickDemo() {
        window.open('https://ezmarket.io/demo', '_blank');
    }
    onClickBounty() {
        window.open('https://ezmarket.io/bounty', '_blank');
    }
    render() {
        let jsx="";
        let isLogged = false;
        if (!isLogged) {
            jsx = (
                <li><a href="#">{T.translate("menu.login")}</a></li>
            );
        } else {
            jsx = (
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        {T.translate("menu.login")}
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="#section41">{T.translate("menu.setting")}</a></li>
                        <li><a href="#section42">{T.translate("menu.referer")}</a></li>
                        <li><a href="#section42">{T.translate("menu.logout")}</a></li>
                    </ul>
                </li>
            );
        }
        return (
        <div className="header">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <div className="logo">
                                <img src="assets/icon2.png" alt="E"/>
                                {/*<span style={{color:'green'}}>Z</span>*/}
                                <span style={{color:'white'}}>ZMarket</span>
                            </div>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home">{T.translate("menu.home")}</a></li>
                            <li><a href="#token">{T.translate("menu.token")}</a></li>
                            <li><a href="#roadmap">{T.translate("menu.roadmap")}</a></li>
                            <li><button className="btn btn-bounty" onClick={this.onClickBounty}>{T.translate("menu.bounty")}</button></li>
                            <li>
                                <button className="btn btn-demo" onClick={this.onClickDemo}>{T.translate("button.demo")}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}
