/**
 * Created by loc on 8/14/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class TokenHolder extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="container-fluid token-holder">
                <div className="container text-center">
                    <h1> {T.translate("token_holder.title")} </h1>
                    <p>
                        {T.translate("token_holder.desc")}
                    </p>
                </div>
            </div>
        )
    }
}
