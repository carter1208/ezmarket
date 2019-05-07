/**
 * Created by loc on 9/7/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class Crowdsale extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div className="crowdsale">
                    <div className="col-sm-2"/>
                    <div className="col-sm-8">
                        <div className="acceptment">
                            <div>{T.translate("crowdsale.address")}</div>
                            <br/>
                            <img src="assets/0x5a5E34163AA95D913F3153D13fe0B9d8Bbd37b66.png" width={200} height={200}/>
                            <h3 className="address">
                                0x5a5E34163AA95D913F3153D13fe0B9d8Bbd37b66
                            </h3>
                        </div>
                        <div className="warning text-left">
                            <ul>
                                <li>
                                    {T.translate("crowdsale.note1")}
                                </li>
                                <li>
                                    {T.translate("crowdsale.note2")}
                                </li>
                                <li>
                                    {T.translate("crowdsale.note3")}
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className="col-sm-2"/>
            </div>
        );
    }
}
