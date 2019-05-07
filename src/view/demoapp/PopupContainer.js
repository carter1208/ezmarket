/**
 * Created by carter on 10/10/2017.
 */
import React, {Component, PropTypes} from 'react';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        this.showPopup = this.showPopup.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    showPopup(isShow) {
        this.setState({
            isShow: isShow
        });
    }

    onClickClose() {
        this.setState({isShow:false})
    }
    render() {
        if (!this.state.isShow) {
            return <div></div>;
        }
        return (
<<<<<<< HEAD
            <div className="popup">
                <div className="product">
                    <img/>
                    <div className="social">

                            <a className="facebook" title="Become a fan on Facebook" href="#">
                                <i className="fa fa-facebook"></i>
                                <span className="sr-only">Facebook</span>
                            </a>

                            <a className="youtube" title="EZMarket Video on YouTube" href="#">
                                <i className="fa fa-youtube"></i>
                                <span className="sr-only">YouTube</span>
                            </a>

                            <a className="pinterest" title="EZMarket on Pinterest" href="#">
                                <i className="fa fa-pinterest"></i>
                                <span className="sr-only">Pinterest</span>
                            </a>

                            <a className="google-plus" title="EZMarket on Google Plus" href="#">
                                <i className="fa fa-google-plus"></i>
                                <span className="sr-only">Google Plus</span>
                            </a>

                            <a className="twitter" title="EZMarket on Twitter" href="#">
                                <i className="fa fa-twitter"></i>
                                <span className="sr-only">Twitter</span>
                            </a>

                    </div>
                </div>
                <button type="button" className="btn btn-success" onClick={this.onClickClose.bind(this)}>Click</button>
=======
            <div className="popupContainer">
               <div className="product">
                   <img src={this.state.img}/>
                   <div className="social">
                       <div className="preview">
                           <div id="fullscreen" className="item-preview__preview-buttons">
                               <a className="preview" title="Live Preview" href="#">
                                   Live Preview
                                   <i className="fa fa-search"></i>
                                   <span className="sr-only"> Live Preview</span>
                               </a>
                           </div>
                           <div className="item-social">
                               <div className="btn-group">
                                   <a className="facebook" title="Become a fan on Facebook" href="#">
                                       <i className="fa fa-facebook"></i>
                                       <span className="sr-only">Facebook</span>
                                   </a>
                                   <a className="youtube" title="EZMarket Video on YouTube" href="#">
                                       <i className="fa fa-youtube"></i>
                                       <span className="sr-only">YouTube</span>
                                   </a>
                                   <a className="pinterest" title="EZMarket on Pinterest" href="#">
                                       <i className="fa fa-pinterest"></i>
                                       <span className="sr-only">Pinterest</span>
                                   </a>
                                   <a className="google-plus" title="EZMarket on Google Plus" href="#">
                                       <i className="fa fa-google-plus"></i>
                                       <span className="sr-only">Google Plus</span>
                                   </a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
                <div className="price">

                </div>
>>>>>>> ab7d4d586c7a3dc1c01c22067d9540b153e16892
            </div>
        )
    }
}