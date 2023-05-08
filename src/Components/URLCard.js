import React, { useState, useEffect } from 'react'
import "../Assests/URLCard.css"
import { } from 'react-router-dom'

function URLCard() {
    const [text, setText] = useState('');
    function getText(event) {
        setText(event.target.value);
    }
    useEffect(() => {
        console.log(text);
    }, [text]);

    const handleShortURL = (event) => {
        event.preventDefault(text);
        console.log("Data:", text);
        setIsValid(validateLink(text));
        if (validateLink(text)) {
            setLink(text);
        }
    }

    const [link, setLink] = useState("");
    const [isValid, setIsValid] = useState(false);

    function validateLink(link) {
        const pattern = /^(ftp|http|https):\/\/(?:[\w-]+\.)+[a-z]{2,}$/i;
        return pattern.test(link);
    }
    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     setIsValid(validateLink(link));
    // }
    const handleCopy = () => {

    }
    const handleClearText = () => {

    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <h1 className='cardHeading'>Paste the URL to be shortened</h1>
                    <form>
                        <div className='inputFieldSetting'>
                            <input onChange={getText} className='inputField'
                                type="text" placeholder="Enter the Link Here" />
                        </div>
                        {/* <Link className='button' to='/URLShort' > Shorten URL</Link> */}
                        <div className="btn">
                            <button className='button' type="submit" onClick={handleShortURL}>Shorten URL</button> <br />
                            <button className='button' type="clear" onClick={handleClearText}>Clear URL</button>
                        </div>
                    </form>

                    <div className="para" style={{ marginTop: "20px" }}>
                        ShortURL is a free tool to shorten URLs and generate short links
                        Our URL shortener allows to create a shortened link making it easy to share
                    </div>
                </div>
            </div >

            <div className="message">
                {
                    isValid ? (
                        <p style={{ color: "green", fontWeight: "bold" }}>The Link is valid.</p>
                    ) : (
                        <p style={{ color: "red", fontWeight: "bold" }}>Please Enter a valid link or fill the field</p>
                    )
                }
                <div className="displayShortURL">
                    <input type="text" readOnly />
                    <p style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
                        <strong>Long URL</strong> : {link}</p>
                </div>

                <div className='btn-2'>
                    <button className='button' type="copy" onClick={handleCopy}>Copy URL</button>
                </div>
            </div>
        </>
    )
}

export default URLCard