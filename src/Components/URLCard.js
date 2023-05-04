import React from 'react'
import "../Assests/URLCard.css"
import { useNavigate } from 'react-router-dom'

function URLCard() {
    const navigate = useNavigate();

    const navigateToShortURL = () => {
        navigate("/URLShorten");
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <h1 className='cardHeading'>Paste the URL to be shortened</h1>
                    <div className='input-Button'>
                        <input className='inputField' type="text" placeholder="Enter the Link Here" />
                        {/* <Link className='button' to='/URLShort' > Shorten URL</Link> */}
                        <button className='button' type="submit" onClick={navigateToShortURL}>Shorten URL</button>
                    </div>
                    <div className="para" style={{ marginTop: "20px" }}>
                        ShortURL is a free tool to shorten URLs and generate short links
                        Our URL shortener allows to create a shortened link making it easy to share
                    </div>
                </div>
            </div>
        </>
    )
}

export default URLCard