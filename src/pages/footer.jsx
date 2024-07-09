// Footer.js

import React from "react";
import "../styles/footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Address: Kanpur, Country</li>
                            <li>Email: <a href="mailto:manish.sh.katha@gmail.com">manish.sh.katha@gmail.com</a></li>
                            <li>Phone: 9027554899</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5>Social Media</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.linkedin.com/in/manish-sharma-22a3a822b/">LinkedIn</a></li>
                            <li><a href="https://github.com/manish-katha">Github</a></li>
                            <li><a href="https://aspire-nex-portfolio-kohl.vercel.app/">Portfolio</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
