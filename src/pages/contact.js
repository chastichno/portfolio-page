import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export default class ContactPage extends Component {
    state = {
        name: "",
        email: "",
        sender: "",
        message: ""
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        alert(`Welcome ${this.state.name} ${this.state.email} ${this.state.sender} ${this.state.message}!`)
    }

    render() {
        return (
            <Layout>
                <Head title="Contact" />
                <div className="contact container">
                    <h1><b>Contact me</b></h1>
                    <p>
                        You can <a href="mailto:4chav2@gmail.com">send me an email</a> or just fill in this form.
                </p>
                    <form className="contact__form" method="post" action="https://getform.io/f/51adec74-bcc9-48ad-8908-69525dbc34ef">
                        <legend>Let's get in touch!</legend>
                        <label className="contact__field">
                            Name<span className="contact__required">*</span>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                className="form-control"
                                placeholder="eg, Ana Chashchina"
                            />
                        </label>
                        <label className="contact__field">
                            Email<span className="contact__required">*</span>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                className="form-control"
                                placeholder="hello@anachashchina.co.nz"
                            />
                        </label>
                        <div className="form-check contact__field">
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    name="sender"
                                    value="company"
                                    onChange={this.handleInputChange}
                                    className="form-check-input"
                                />
                                I am from company's HR department
                            </label>
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    name="sender"
                                    value="recruit"
                                    onChange={this.handleInputChange}
                                    className="form-check-input"
                                />
                                I am from recruiting agency
                            </label>
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    name="sender"
                                    value="project"
                                    onChange={this.handleInputChange}
                                    className="form-check-input"
                                />
                                I want you to make me a website
                            </label>
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    name="sender"
                                    value="other"
                                    onChange={this.handleInputChange}
                                    className="form-check-input"
                                />
                                Other
                            </label>
                        </div>
                        <label className="contact__field">
                            Message<span className="contact__required">*</span>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="3"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                            ></textarea>
                        </label>
                        <button type="submit" className="btn-project">Send</button>
                    </form>
                </div>
            </Layout>
        )
    }
}