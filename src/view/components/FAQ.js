/**
 * Created by loc on 8/9/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class FAQ extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        let jsxQA = [];
        for (var i=1; i <= 7; i++) {
            jsxQA.push(
                <div key={i} className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + i}>
                                {T.translate("faq.q" + i)}
                            </a>
                        </h4>
                    </div>
                    <div id={"collapse" + i} className="panel-collapse collapse">
                        <div className="panel-body">
                            {T.translate("faq.a" + i)}
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div id="faq" className="container-fluid faq">
                <div className="container">
                    <div className="panel-group" id="accordion">
                        {jsxQA}
                    </div>
                </div>
            </div>
        )
    }
}
