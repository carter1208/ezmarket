/**
 * Created by carter on 8/22/2017.
 */
import React, {Component, PropTypes} from 'react';
export default class Theme extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    showPopup(){
        this.props.showDetail();
    }

    render() {
        return (
            <div className="theme">
                <div className="container">
                    <div className="row">
                        <h2>Templates Collection</h2>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item" onClick={this.showPopup.bind(this)}>
                                <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2017/08/posh-thumb-v1.1.gif"/>
                                <p>POSH</p>
                                <span><strong>0.15</strong> <small>ETH</small></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2015/08/Preview-2-336x206.jpg"/>
                                <p>REIGN PRO</p>
                                <span><strong>0.12</strong> <small>ETH</small></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2015/11/california-highlight-page-336x206.jpg"/>
                                <p>CALIFORNIA</p>
                                <span><strong>0.16</strong> <small>ETH</small></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2016/05/mountain_html5_template_preview-336x206.jpg"/>
                                <p>MOUNTAIN</p>
                                <span><strong>0.1</strong> <small>ETH</small></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2016/01/boots4-first-ever-free-bootstrap-4-template_v2-336x206.jpg"/>
                                <p>BOOTS4</p>
                                <span><strong>0.15</strong> <small>ETH</small></span>
                            </div>
                        </div>
                       <div className="col-lg-4 col-sm-6">
                           <div className="item">
                               <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2017/03/mega_bundle_offer_20161-336x206.jpg"/>
                               <p>MEGA DISCOUNT</p>
                               <span><strong>0.12</strong> <small>ETH</small></span>
                           </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2016/10/elixir_template_preview_1.2-336x206.jpg"/>
                                <p>ELIXIR</p>
                                <span><strong>0.12</strong> <small>ETH</small></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2016/09/PR-Nevada_plus-336x206.jpg"/>
                                <p>NEVADA PLUS PRO</p>
                                <span><strong>0.12</strong> <small>ETH</small></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <img src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2016/09/pr_photography-336x206.jpg"/>
                                <p>PHOTOGRAPHER PRO</p>
                                <span><strong>0.12</strong> <small>ETH</small></span>
                            </div>
                        </div>
                    </div>
                    <div className="signup">
                        <div className="container-signup">
                            <h1>Work Smarter</h1>
                            <h2>Join our vibrant creative community today.</h2>
                            <div className="btn">
                                <button type="button" className="btn btn-success">Create your free EZMarket Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
