import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
    `)

    return (
        <header className="header">

            <nav>
                <ul className="nav-list">
                    <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/about">About me</Link>
                    </li>
                    <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/skills">Skills</Link>
                    </li>
                    {/* <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/portfolio">Portfolio</Link>
                    </li> */}
                    <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <h1>
                <Link className="title" to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
        </header>
    )
}

export default Header