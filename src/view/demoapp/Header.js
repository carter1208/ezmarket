    /**
     * Created by carter on 8/16/2017.
     */
    import React, {Component, PropTypes} from 'react';
    export default class Header extends Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
        }

        componentWillUnmount() {
        }

        show(e){
            e.preventDefault();
            $('a').removeClass('is-active');
            $(e.currentTarget).addClass('is-active');
            this.props.onClickTab(e.currentTarget.text);
        }

        render() {
            return (
                <div className="header-demo">
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
                                        {/*<span style={{color:'green'}}>E</span>*/}
                                        <span style={{color:'white'}}>ZMarket</span>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#" className="is-active" onClick={this.show.bind(this)}>theme</a></li>
                                        <li><a href="#" onClick={this.show.bind(this)}>code</a></li>
                                        <li><a href="#" onClick={this.show.bind(this)}>photo</a></li>
                                        <li><a href="#" onClick={this.show.bind(this)}>audio</a></li>
                                        <li><a href="#" onClick={this.show.bind(this)}>ebook</a></li>
                                        <li><a href="#" onClick={this.show.bind(this)}>graphic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    }
