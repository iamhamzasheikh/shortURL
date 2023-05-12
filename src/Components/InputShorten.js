import React, { useState } from 'react'
import "../Assests/URLCard.css"
import { useNavigate } from 'react-router-dom'

function InputShorten({ setInputValue }) {
    const [value, setValue] = useState()
    const navigate = useNavigate();

    const handleShortenURL = () => {
        setInputValue(value);
        setValue('');
        navigate('/LinkResult');
    }
    const handleClearText = () => {
        setValue('');
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <h1 className='cardHeading'>Paste the URL to be shortened</h1>
                    <form>
                        <div className='inputFieldSetting'>
                            <input className='inputField'
                                type="text"
                                placeholder="Enter the Link Here"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <div className="btn">
                            <button onClick={handleShortenURL}
                                className='button' disabled={!value} type="submit">Shorten URL</button> <br />
                            <button style={{ backgroundColor: "#B33A3A" }} disabled={!value} onClick={handleClearText} className='button' >Clear URL</button>
                        </div>
                    </form>
                    <div className="para">
                        <p>ShortURL is a free tool to shorten URLs and generate short links
                            URL shortener allows to create a shortened link making it easy to share</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default InputShorten