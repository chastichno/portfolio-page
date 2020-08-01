import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import jobListing from "../images/fm-job-listings.png";
import remark from "../images/remark.png";
import pomodoro from "../images/pomodoro.png";
import bookmarkLanding from "../images/bookmarkLanding.png";

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontend: false,
            personal: true,
            demo: false
        }
        this.showOption = this.showOption.bind(this);
    }

    showOption(event) {
        console.log(this.state);
        this.setState({
            frontend: false,
            personal: false,
            demo: false
        })
        console.log(event.target.name);
        this.setState({
            [event.target.name]: true
        })
    }

    render() {
        return (
            <Layout>
                <Head title="Home" />
                <div className="home">
                    <header className="home__intro">
                        <div className="container">
                            <h1 className="home__greeting">Hey there,</h1>
                            <h2 className="home__title">I am <span className="home__highlight">Ana</span>, a full-stack web developer.</h2>
                            <p className="home__entering">I am avialiable for working on your next project!</p>
                        </div>
                    </header>
                    <section id="portfolio" className="portfolio">
                        <div className="portfolio__choose">
                            <Link onClick={this.showOption} to="#portfolio" name="personal" className={this.state.personal ? "portfolio__option_act portfolio__option" : "portfolio__option"}>Personal Projects</Link>
                            <Link onClick={this.showOption} to="#portfolio" name="frontend" className={this.state.frontend ? "portfolio__option_act portfolio__option" : "portfolio__option"}>Frontend Mentor Projects</Link>
                            <Link onClick={this.showOption} to="#portfolio" name="demo" className={this.state.demo ? "portfolio__option_act portfolio__option" : "portfolio__option"}>Demo</Link>
                        </div>

                        <div id="frontend" className={this.state.frontend ? "show" : "hide"}>
                            <ul className="portfolio__list container">
                                <li className="portfolio__item">
                                    <a target="_blank" href="https://job-listing-dynamic.vercel.app/" className="portfolio__image"><img src={jobListing} alt=""></img></a>
                                    <div className="portfolio__text">
                                        <a target="_blank" href="https://job-listing-dynamic.vercel.app/"><h3>Job listing</h3></a>
                                        <p>Job listing website fetching data from JSON file.</p>
                                        <p>Tools:</p>
                                        <ul>
                                            <li>React</li>
                                            <li>Sass</li>
                                        </ul>
                                        <a target="_blank" href="https://github.com/chastichno/Job-listing-dynamic">view the code</a>
                                    </div>
                                </li>
                                <li className="portfolio__item">
                                    <a target="_blank" href="https://bookmark-landing-page-git-master.chastichno.vercel.app/" className="portfolio__image"><img src={bookmarkLanding} alt=""></img></a>
                                    <div className="portfolio__text">
                                        <a target="_blank" href="https://bookmark-landing-page-git-master.chastichno.vercel.app/"><h3>Bookmark Landing Page</h3></a>
                                        <p>Landing page</p>
                                        <p>Tools:</p>
                                        <ul>
                                            <li>Vanilla JS</li>
                                            <li>Sass</li>
                                        </ul>
                                        <a target="_blank" href="https://github.com/chastichno/bookmark-landing-page">view the code</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="personal" className={this.state.personal ? "show" : "hide"}>
                            <ul className="portfolio__list container">
                                <li className="portfolio__item">
                                    <a target="_blank" href="https://shielded-caverns-22917.herokuapp.com/" className="portfolio__image"><img src={remark} alt=""></img></a>
                                    <div className="portfolio__text">
                                        <a target="_blank" href="https://shielded-caverns-22917.herokuapp.com/"><h3>Bugs tracker app</h3></a>
                                        <p>Application for creating the list of bugs</p>
                                        <p>Tools:</p>
                                        <ul>
                                            <li>React</li>
                                            <li>Node.js</li>
                                            <li>Mongoose</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                        <a target="_blank" href="https://github.com/chastichno/remarks-tracker/">view the code</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="demo" className={this.state.demo ? "show" : "hide"}>
                            <ul className="portfolio__list container">
                                <li className="portfolio__item">
                                    <a target="_blank" href="https://codepen.io/anastasiia-chashchina/pen/eYJLNLx" className="portfolio__image"><img src={pomodoro} alt=""></img></a>
                                    <div className="portfolio__text">
                                        <a target="_blank" href="https://codepen.io/anastasiia-chashchina/pen/eYJLNLx"><h3>Pomodoro Clock</h3></a>
                                        <p>Pomodoro technique clock</p>
                                        <p>Tools:</p>
                                        <ul>
                                            <li>React</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Layout >
        )
    }
}

export default IndexPage