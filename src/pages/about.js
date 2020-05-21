import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
            <h1>About me</h1>
            <p>I am a junior web-developer</p>
            <p>Get in <Link to="contact">touch</Link> with me</p>
        </Layout>
    )
}

export default AboutPage