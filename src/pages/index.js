import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import jobListing from "../images/fm-job-listings.png";

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
                            <Link onClick={this.showOption} to="#portfolio" activeClassName="portfolio__option_act" name="personal" className="portfolio__option">Personal Projects</Link>
                            <Link onClick={this.showOption} to="#portfolio" activeClassName="portfolio__option_act" name="frontend" className="portfolio__option">Frontend Mentor Projects</Link>
                            <Link onClick={this.showOption} to="#portfolio" activeClassName="portfolio__option_act" name="demo" className="portfolio__option">Demo</Link>
                        </div>

                        <div id="frontend" className={this.state.frontend ? "show" : "hide"}>
                            <ul className="portfolio__list container">
                                <li className="portfolio__item">
                                    <a href="https://job-listing-dynamic.vercel.app/" className="portfolio__image"><img src={jobListing} alt=""></img></a>
                                    <div className="portfolio__text">
                                        <a href="https://job-listing-dynamic.vercel.app/"><h3>Job listing</h3></a>
                                        <p>Job listing website fetching data from JSON file.</p>
                                        <p>Tools:

                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="personal" className={this.state.personal ? "show" : "hide"}>Personal</div>
                        <div id="demo" className={this.state.demo ? "show" : "hide"}>Demo</div>
                    </section>
                </div>
            </Layout >
        )
    }
}

export default IndexPage