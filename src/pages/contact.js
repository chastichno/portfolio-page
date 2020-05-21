import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact" />
            <h1>You can contact me</h1>
            <p>My email: 4chav2@gmail.com. <a href="mailto:4chav2@gmail.com">Send me an email</a></p>
        </Layout>
    )
}

export default ContactPage