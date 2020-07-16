import React from "react"

import Navbar from "./navbar"
import Footer from "./footer"


const Layout = (props) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {props.children}
                <Footer />
            </div>

        </div>
    )
}

export default Layout