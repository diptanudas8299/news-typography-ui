const Article = ({ article }) => {
  return (
    <article className="article">
      <div className="article-top">
        <span className="category">{article.category}</span>
        {article.trending && <span className="badge">Trending</span>}
      </div>

      <h2 className="headline">{article.headline}</h2>

      <div className="meta">
        By {article.author} • {article.readTime}
      </div>

      <p className="content">{article.content}</p>

      <div className="tags">
        {article.tags &&
          article.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
      </div>
    </article>
  );
};

export default Article;
