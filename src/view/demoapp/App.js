/**
 * Created by carter on 8/16/2017.
 */
import React, {Component, PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer1';
import Theme from './Theme';
import Code from './Code1';
import Coming from './Code';
import Popup from "./PopupContainer";
import Bounty from "./Bounty";
import Ebook from "./Ebook";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={name:'theme',
            showPopup:false
        };
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    showPopup(bool){
        this.refs.popupContainer.showPopup(!this.state.showPopup);
    }

    onClickHdl(name){
        this.setState({name:name});
    }

    render() {
        let jsx = <Theme/>;
        switch (this.state.name) {
            case "theme":
                jsx = (
                    <Theme showDetail={this.showPopup.bind(this)}/>
                );
                break;
            case "code":
                jsx = (
                    <Code/>
                );
                break;
            case "ebook":
                jsx = (
                    <Ebook/>
                );
                break;
            default:
                jsx = (
                    <Coming/>
                );
                break;
        }
        return (
            <div>
                <Header onClickTab={this.onClickHdl.bind(this)}/>
                <div className="demoapp">
                    {jsx}
                </div>
                <Footer/>
                <div className="popup">
                    <Popup
                        ref="popupContainer"
                    />
                </div>
            </div>
        )
    }
}
