import React, { useState, useEffect } from 'react';
import './RandomQuote.css';
import reload from '/src/assets/reload.png';
import twitter from '/src/assets/twitter.png';

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });


  const fetchQuote = async () => {
    const response = await fetch("https://quotes-api-self.vercel.app/quote");
    const data = await response.json();
    setQuote({
      text: data.quote,
      author: data.author,
    });
  };


  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className='bottom'>
          <div className='author'>{quote.author}</div>
          <div className="icons">
            <div className='circle'>
              <img
                src={reload}
                onClick={fetchQuote}
                alt="Reload quote"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `"${quote.text}" - ${quote.author}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Share on Twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
