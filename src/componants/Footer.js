
import React, { Component } from "react";
class Footer extends Component {
    render() {
        return <footer className="text-muted py-5" style={{ backgroundColor: "#DFDFDE" }}>
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#">Back to top</a>
                </p>
                <p className="mb-1">Samar's First react project is &copy; samar</p>
                <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> <a href="https://www.linkedin.com/in/samar-negm/">Linked in</a>.</p>
            </div>
        </footer>
    }
}
export default Footer;
