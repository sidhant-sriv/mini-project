import React from "react";

const SpaceNews = ({ spaceNews }) => {
  return (
    <div className="space-news-container">
      <h2 className="text-2xl font-bold text-center mt-6">Astronomy Picture of the Day</h2>
      <div className="space-news">
        {spaceNews.map((news, index) => (
          <div key={index} className="space-news-item">
            <img src={news.url} alt={news.title} className="space-news-image" />
            <div className="space-news-description">
              <h3 className="text-xl font-bold">{news.title}</h3>
              <p>{news.explanation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceNews;
