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


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
                setShortenLink(response.data.result.full_short_link);
                setError(false);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        if (inputValue.length>0) {
            fetchData();
        }
    }, [inputValue] );

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)

        return () => clearTimeout(timer);
    }, [copied])

    if (loading) {
        return <p className='noData'>Loading...</p>
    }
    if (error) {
        return <p className='noData'>Something went wrong: {error.message}</p>;

    }
    return (
        <>
            {shortenLink && (
                <div className="result">
                    <p>{shortenLink}</p>
                    <CopyToClipboard text={shortenLink}
                        onCopy={() => setCopied(true)}
                    >
                        <input type="button" className={copied ? "copiedClip" : ""}
                            value={copied ? "Copied" : "Copy URL"} />
                    </CopyToClipboard>
                </div>
            )}
        </>
    )
}

export default LinkResult;