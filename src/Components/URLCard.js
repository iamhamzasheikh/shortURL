import React from 'react'
import "../Assests/URLCard.css"
import { Routes,Route, Link, useNavigate } from 'react-router-dom'
import URLShort from './URLShort';

function URLCard() {
    
    return (
        <>
            <div className="container">
                <div className="card">
                    <h1 className='cardHeading'>Paste the URL to be shortened</h1>
                    <div className='input-Button'>
                        <input className='inputField' type="text" placeholder="Enter the Link Here" />
                        <Link className='button' to = '/URLShort' > Shorten URL</Link>
                    </div>
                    <div className="para" style={{ marginTop: "20px" }}>
                        ShortURL is a free tool to shorten URLs and generate short links
                        Our URL shortener allows to create a shortened link making it easy to share
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="" element={<URLShort />}></Route>
            </Routes>
        </>
    )
}

export default URLCard