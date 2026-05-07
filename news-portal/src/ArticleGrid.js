import React from 'react';

const ArticleGrid = ({ articles = [] }) => {
  return (
    <section className="article-grid">
      <h2>Articles</h2>
      <div className="grid-container">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;