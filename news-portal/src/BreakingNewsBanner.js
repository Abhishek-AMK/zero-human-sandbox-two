import React from 'react';

const BreakingNewsBanner = ({ news = [] }) => {
  return (
    <div className="breaking-news-banner">
      <h2>Breaking News</h2>
      <div className="news-headlines">
        {news.map((headline, index) => (
          <div key={index}>{headline}</div>
        ))}
      </div>
    </div>
  );
};

export default BreakingNewsBanner;