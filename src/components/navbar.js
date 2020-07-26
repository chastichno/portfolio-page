import React from "react"
import {
    Link,
    //  graphql, useStaticQuery, Img
} from "gatsby"
// import logo from "../images/logo.png"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const classDropdownMenu = 'navbar-collapse' + (this.state.collapsed ? ' collapse' : '')

        return (
            <nav className="navbar navbar-expand-md navbar-light">
                <Link className="brand" to="/">
                    {/* <img className="logo-image" alt="logo" src={logo}></img> */}
                Ana Chashchina
                </Link>
                <button onClick={this.toggleNavbar} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={classDropdownMenu} id="navbarSupportedContent">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item" activeClassName="active-nav-item" to="/">Portfolio<span className="sr-only">(current)</span></Link>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/about">About me</Link>
                        {/* <Link className="nav-item" activeClassName="active-nav-item" to="/blog">Blog</Link> */}
                        {/* <Link className="nav-item" activeClassName="active-nav-item" to="/contact">Contact</Link> */}
                        <Link className="btn-project" to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar