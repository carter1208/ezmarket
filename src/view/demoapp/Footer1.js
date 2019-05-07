/**
 * Created by carter on 8/22/2017.
 */

import React, {Component, PropTypes} from 'react';
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    render() {
        return (
            <footer className="content-footer">
                <div className="container">
                    <div className="footer-bottom text-center">
                        <br/>
                        <p className="t-body h-m0" >
                            <small data-reactid="260">
                                *All content on this site is for illustrative purpose only.
                                We are not responsible for the copyright of these contents
                            </small>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 block block-social">
                                    <h3 className="head-sm">Connect with Us</h3>
                                    <p>We're on Social Networks. Follow us &amp; get in touch!</p>
                                    <ul className="ico-links social-links">
                                        <li>
                                            <a className="facebook" title="Become a fan on Facebook" href="#">
                                                <i className="fa fa-facebook"></i>
                                                <span className="sr-only">Facebook</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="youtube" title="EZMarket Video on YouTube" href="#">
                                                <i className="fa fa-youtube"></i>
                                                <span className="sr-only">YouTube</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="pinterest" title="EZMarket on Pinterest" href="#">
                                                <i className="fa fa-pinterest"></i>
                                                <span className="sr-only">Pinterest</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="google-plus" title="EZMarket on Google Plus" href="#">
                                                <i className="fa fa-google-plus"></i>
                                                <span className="sr-only">Google Plus</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" title="EZMarket on Twitter" href="#">
                                                <i className="fa fa-twitter"></i>
                                                <span className="sr-only">Twitter</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-6 block block-newsletter">
                                    <div className="modal fade" id="getResponseMessage" role="dialog" aria-labelledby="jaLinkSubscribeLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h4 className="modal-title" id="jaLinkSubscribeLabel">Newsletter</h4>
                                                </div>
                                                <div className="modal-body" style={{color: '#888'}}>
                                                    <div className="message-success">
                                                        Woohoo! You're now up to date with JoomlArt!<br/>
                                                        The confirmation email has been sent to you as well! See you in the inbox!
                                                    </div>
                                                    <div className="message-failure">
                                                        There's something wrong. Please try to do it again. Thank you.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div name="responeform" className="getResponseForm">
                                        <input type="hidden" name="getpostdata" value="get"/>
                                        <h3 className="head-sm">Monthly Newsletter</h3>
                                        <div className="subscribe-form">
                                            <p>Get our awesome releases and latest updates with exclusive news and offers in your inbox.</p>
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                                                        <input type="email" id="mce-EMAIL" className="form-control" name="cm-tulkdt-tulkdt" placeholder="Email Address" data-reactid="235"/>
                                                        <span className="input-group-btn"><input type="button" value="Subscribe" className="btn btn-primary btn-getResponse" name="Subscribe"/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="subscribe-result">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content">
                                <h3>Programs</h3>
                                <ul className="programs-list">
                                    <li className="program-item program-moneyback">
                                        <strong>100%</strong> Money Back Guarantee <span>No hassles, no question asked!</span>
                                    </li>
                                    <li className="program-item program-affiliate">
                                        EZMarket <span>Most Powerful Market page builder</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="copyright">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-5">
                                <small>Copyright © 2017. All Rights Reserved.</small>
                            </div>
                            <div className="col-md-7">
                                <div className="copyright-menu">
                                    <ul className="nav  nav-pills nav-stacked ">
                                        <li className="item-690">
                                            <a href="#">Partners</a>
                                        </li>
                                        <li className="item-691">
                                            <a href="#">Terms of Use</a>
                                        </li>
                                        <li className="item-692">
                                            <a href="#">Privacy</a>
                                        </li>
                                        <li className="item-693">
                                            <a href="#">Refund Policy</a>
                                        </li>
                                        <li className="item-694">
                                            <a href="#">Licenses</a>
                                        </li>
                                        <li className="item-725">
                                            <a href="#">Contact Us</a>
                                        </li>
                                        {/*<li className="item-764">*/}
                                            {/*<a href="#">JA Builder</a>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </footer>
        )
    }
}