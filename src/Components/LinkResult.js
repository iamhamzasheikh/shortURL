import React, { useEffect, useState } from 'react'
import "../Assests/LinkResult.css"
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';

function LinkResult({ inputValue }) {
    console.log("The Value:", inputValue);
    const [shortenLink, setShortenLink] = useState('');
    console.log(shortenLink);
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(response.data.result.full_short_link);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputValue.length > 0) {
            fetchData();
        }
    }, [inputValue]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)

        return () => clearTimeout(timer);
    }, [copied])

    if (loading) {
        return <p style={{textAlign:'center'}} className='noData'>Loading...</p>
    }
    if (error) {
        return <p style={{textAlign:'center'}} className='noData'>Something went wrong: {error.message}</p>;

    }
    return (
        <>
            <div className="heading-para">
                <h1 >Your shortened URL</h1>
                <p>Copy the shortened link and share it in messages, texts, posts, websites and other locations.</p>
            </div>
            {shortenLink && (
                <div className="container">
                    <div className="card">
                        <div className="result">
                            <p>{shortenLink}</p>
                            <CopyToClipboard text={shortenLink}
                                onCopy={() => setCopied(true)}>
                                <input type="button" className={copied ? "copiedClip" : ""}
                                    value="Copy URL" />
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default LinkResult;