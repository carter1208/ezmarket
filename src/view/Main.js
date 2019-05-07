/**
 * Created by loc on 8/7/2017.
 */
import React, {Component, PropTypes} from 'react';
import Header from "./components/Header";
import {request} from "./loader/HttpRequest";
import T from 'i18n-react';
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";
import BuySell from "./components/BuySell";
import TokenHolder from "./components/TokenHolder";
import Distribution from "./components/Distribution";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Roadmap2 from "./components/Roadmap2";
import Partner from "./components/Partner";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.language = "en";
        this.state = {
            isReady: false
        }
    }
    componentDidMount() {
        this.loadLanguage();
    }
    loadLanguage() {
        let url="";
        switch (this.language) {
            case "en":
                url = "./lang/en.json";
                break;
        }
        request.get(url, null, this.onLoadLanguage.bind(this), this.onLoadLanguageError.bind(this));
    }
    onLoadLanguage(data) {
        T.setTexts(data);
        this.setState({
            isReady: true
        })
    }
    onLoadLanguageError(error) {
    }


    componentWillUnmount() {
    }
    render() {
        if (!this.state.isReady) {
            return (
                <div></div>
            )
        }

        return (
            <div>
                <Header/>
                <Home/>
                <BuySell/>
                <TokenHolder/>
                <Distribution/>
                <Roadmap2/>
                <Team/>
                <Partner/>
                <Subscribe/>
                <Footer/>
                <div></div>
            </div>
        )
    }
}
