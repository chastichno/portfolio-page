import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// Images nad logos
// import profileImage from "../images/Me.jpg";
import htmlLogo from "../images/HTML5.png";
import cssLogo from "../images/CSS3.png";
import jsLogo from "../images/Javascript.png";
import bootstrapLogo from "../images/Bootstrap.png";
import reactLogo from "../images/React.png";
import nodejsLogo from "../images/Nodejs.png";



const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <div className="about">
                <section className="about__first container">
                    <div className="about__image"></div>
                    <div className="about__text">
                        <p>
                            I am a full-stack web developer, with experience in data analysis and with a bachelor's degree in Mathematics.
                        </p>
                        <p>
                            My background allows me to dive in and fully understand complex technical projects and translate them into the UX and UI language which any customer can understand.
                        </p>
                        <p>
                            My high communication skills provide a full understanding of clients needs as well as make it easy to work with me in a team.
                        </p>
                        <p>Get in <Link to="contact">touch</Link> with me</p>
                    </div>
                </section>

                <section className="about__second container">
                    <h2 className="about__quote">
                        I believe that powerful design and quality implementation could contribute drastically to the success of any business.
                        </h2>
                </section>

                <section className="about__third container">
                    <div className="about__skills">
                        <h5 className="about__skills-title">My skills</h5>
                        <div className="about__skill">
                            <p><img className="about__skill-icon" src={htmlLogo} alt="HTML" />HTML</p>
                        </div>
                        <div className="about__skill">
                            <p><img className="about__skill-icon" src={cssLogo} alt="CSS" />CSS</p>
                        </div>
                        <div className="about__skill">
                            <p><img className="about__skill-icon" src={jsLogo} alt="JS" />Javascript</p>
                        </div>
                        <div className="about__skill">
                            <p><img className="about__skill-icon" src={bootstrapLogo} alt="Bootstrap" />Bootstrap</p>
                        </div>
                        <div className="about__skill">
                            <p><img className="about__skill-icon" src={reactLogo} alt="React" />React</p>
                        </div>
                        <div className="about__skill">
                            <p><img className="about__skill-icon" src={nodejsLogo} alt="Node.js" />Node.js</p>
                        </div>
                    </div>

                    <div className="about__text2">
                        <div className="about__education">
                            <h3>Education</h3>
                            <div className="about__courses">
                                <h4>Bachelor's degree in Applied Mathematics</h4>
                                <p>National Research Nuclear University "MEPhI", Russia</p>
                                <h4>Web Development Certificate</h4>
                                <p>TechLabs Bootcamp #codeathome</p>
                            </div>
                        </div>
                        <a href="#" className="btn-project">Download resume</a>
                    </div>
                </section>

                <section className="about__fourth">

                </section>
            </div>


        </Layout>
    )
}

export default AboutPage