/**
 * Created by loc on 9/7/2017.
 */
import React, {Component, PropTypes} from 'react';
import T from "i18n-react";

export default class Team extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    render() {
        let info = [
            {
                avatar: "assets/Yann Le Gentil.jpg",
                name: "Yann Le Gentil",
                position: "Founder & CTO",
                desc: "Senior Delivery Manager / Technical Quality Manager. Business Intelligence, SAP, Data Warehousing, Business Strategy, Master Data Management",
                link: "https://www.linkedin.com/in/ylegentil/"
            },
            {
                avatar: "assets/Peter Arnoldi.jpg",
                name: "Peter Arnoldi",
                position: "Advisor",
                desc: "CEO and owner at EGN. International Sales & Marketing leader with a consistent track record of building winning teams and delivering superior profit growth.",
                link: "https://www.linkedin.com/in/peterarnoldi/"
            },{
                avatar: "assets/Subodh Kaushik.jpg",
                name: "Subodh Kaushik",
                position: "Manager",
                desc: "Business Development Manager. Technical Leadership, Solution Architecture, Managing Distribution Channels, Enterprise Software",
                link: "https://www.linkedin.com/in/subodhkaushik/"
            },{
                avatar: "assets/Ballard Pham.jpg",
                name: "Ballard Pham",
                position: "Developer",
                desc: "Web developer. AngularJS, React, Flux, CSS, Bootstrap, MySQL, Javascript, Backbone, jQuery",
                link: "https://www.linkedin.com/in/ballard-pham-84642575/"
            },{
                avatar: "assets/Leonid Yeromin.jpg",
                name: "Leonid Yeromin",
                position: "Developer",
                desc: "Frontend developer. JavaScript, Node.js, JQuery Mobile, HTML, CSS, PHP, Sympony, MySQL, Ruby on Rails, Python",
                link: "https://www.linkedin.com/in/leonid-yeromin-44610456/"
            },{
                avatar: "assets/Alyona Matakova.jpg",
                name: "Alyona Matakova",
                position: "Developer",
                desc: "She is Senior Frontend Developer. Web development, HTML, Javascript, CSS, Drupal, PHP, Adobe Photoshop",
                link: "https://www.linkedin.com/in/alyonamatakova/"
            },
        ];

        return (
            <div className="container-fluid team">
                <div className="container text-center">
                    <h1>{T.translate("team.title")}</h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="info">
                                <a href={info[0].link} target="_blank">
                                    <img className="img-circle person" src={info[0].avatar}/>
                                </a>
                                <div>
                                    <p><strong>{info[0].name}</strong></p>
                                    <h5><strong>{info[0].position}</strong></h5>
                                    <p>
                                        {info[0].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="info">
                                <a href={info[1].link} target="_blank">
                                    <img className="img-circle person" src={info[1].avatar}/>
                                </a>
                                <div>
                                    <p><strong>{info[1].name}</strong></p>
                                    <h5><strong>{info[1].position}</strong></h5>
                                    <p>
                                        {info[1].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="info">
                                <a href={info[2].link} target="_blank">
                                    <img className="img-circle person" src={info[2].avatar}/>
                                </a>
                                <div>
                                    <p><strong>{info[2].name}</strong></p>
                                    <h5><strong>{info[2].position}</strong></h5>
                                    <p>
                                        {info[2].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="info">
                                <a href={info[3].link} target="_blank">
                                    <img className="img-circle person" src={info[3].avatar}/>
                                </a>
                                <div>
                                    <p><strong>{info[3].name}</strong></p>
                                    <h5><strong>{info[3].position}</strong></h5>
                                    <p>
                                        {info[3].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="info">
                                <a href={info[4].link} target="_blank">
                                    <img className="img-circle person" src={info[4].avatar}/>
                                </a>
                                <div>
                                    <p><strong>{info[4].name}</strong></p>
                                    <h5><strong>{info[4].position}</strong></h5>
                                    <p>
                                        {info[4].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="info">
                                <a href={info[5].link} target="_blank">
                                    <img className="img-circle person" src={info[5].avatar}/>
                                </a>
                                <div>
                                    <p><strong>{info[5].name}</strong></p>
                                    <h5><strong>{info[5].position}</strong></h5>
                                    <p>
                                        {info[5].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
