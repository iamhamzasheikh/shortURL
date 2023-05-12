import React from 'react'
import "../Assests/Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.9);", marginTop:"2rem" }}>
                <div className="footer-container">
                    <div className="footer-card">
                        <p style={{ textAlign: "center", color: "white", fontSize: "16px" }}>
                            © 2023 ShortUrl.at - Tool to shorten a long link
                        </p>
                        <div className="links">
                            <ul key="short-url">
                                <Link style={{textDecoration:"none", color:"#0275d8", fontSize:'larger'}} to="/">Short URL</Link>
                            </ul>
                            <ul key="terms-of-service">
                                <Link style={{textDecoration:"none", color:"#0275d8", fontSize:'larger'}} to="/">Terms of Service</Link>
                            </ul>
                            <ul key="privacy">
                                <Link style={{textDecoration:"none", color:"#0275d8", fontSize:'larger'}} to="/">Privacy</Link>
                            </ul>
                            <ul key="contact">
                                <Link style={{textDecoration:"none", color:"#0275d8", fontSize:'larger'}} to="/">Contact</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer