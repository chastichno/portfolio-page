import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"


const PortfolioPage = () => {
    return (
        <Layout>
            <Head title="Portfolio" />
            <h1>My portfolio</h1>
            <h3>
                <a href="#">My Projects</a>
                <span> / </span>
                <a href="#">Frontend Mentor Projects</a>
            </h3>

            <div className="projects-list">
                <div className="project">
                    <h2>Remark tracker</h2>
<p>description</p>
                </div>
            </div>


        </Layout>
    )
}

export default PortfolioPage