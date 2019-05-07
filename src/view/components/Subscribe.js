/**
 * Created by loc on 8/16/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";
import {request} from "../loader/HttpRequest";
import $ from "jquery";

export default class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            msg: ""
        }
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    onClickSubmit() {
        let email = this.refs.txtEmail.value;
        if (this.validateEmail(email)) {
            let xmlhttp;
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp=new XMLHttpRequest();
            } else {  // code for IE6, IE5
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    alert(xmlhttp.responseText);
                }
            }

            xmlhttp.open("POST", "https://ezmarket.io/presale.php");
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send("txtemail=" + email);

            this.setState({
                isSubmitted: true,
                msg: ""
            });
        } else {
            this.setState({
                msg: "Please enter a valid email address"
            });
        }
    }
    onSubmitComplete() {
        this.setState({
            isSubmitted: true,
            msg: ""
        });
    }

    onClickClose() {
        this.props.onClose();
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    render() {
        let btnStyle = "btn btn-subscribe";
        let jsx = "";
        if (this.state.isSubmitted) {
            jsx = (
                <div className="row ">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10 message">
                        {T.translate("subscribe.thanks")}
                        <div style={{fontSize:"13px",color: "#dc9355", marginTop:"5px"}}>
                            (If you do not receive the confirmation message within a few minutes of signing up, please check your Spam or Bulk E-Mail folder just in case the confirmation email got delivered there instead of your inbox. If so, select the confirmation message and mark it Not Spam, which should allow future messages to get through.)
                        </div>
                    </div>
                    <div className="col-sm-1"/>
                </div>
            );
        } else {
            jsx = (
                <div className="row form-group">
                    <div className="col-sm-2"/>
                    <div className="col-sm-6">
                        <input ref="txtEmail" type="text" className="form-control required" placeholder={T.translate("subscribe.email")}/>
                    </div>
                    <div className="col-sm-2">
                        <button type="button" className={btnStyle}
                                onClick={this.onClickSubmit.bind(this)}
                        >{T.translate("button.subscribe")}</button>
                    </div>
                    <div className="col-sm-2"/>
                    <div className="col-sm-12 warning">
                        {this.state.msg}
                    </div>
                </div>
            );
        }
        return (
            <div className="container-fluid subscribe">
                <div className="container v-boxes">
                    <div className="box">
                        <h2 className="text-center">{T.translate("subscribe.title")}</h2>
                        <div className="text-center">
                            {jsx}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
