import { useEffect, useState } from "react";
import { fetchNews } from "../api/newsApi";
import Header from "./Header";
import Article from "./Article";

const NewsPaperLayout = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetchNews().then((data) => setNews(data));
  }, []);

  if (!news) return <div className="loading">Loading...</div>;

  return (
    <div className="newspaper-container">
      <Header title={news.title} date={news.date} />

      {/* Featured Hero Section */}
      <section className="featured-section">
        <img
          src={news.featured.image}
          alt="featured"
          className="featured-image"
        />
        <div className="featured-content">
          <div className="featured-category">
            {news.featured.category}
          </div>
          <h2 className="featured-headline">
            {news.featured.headline}
          </h2>
          <p className="featured-subheadline">
            {news.featured.subheadline}
          </p>
          <div className="featured-meta">
            By {news.featured.author} • {news.featured.readTime}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="main-layout">
        <div className="articles-grid">
          {news.articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>

        <aside className="sidebar">
          <h3 className="sidebar-title">Trending</h3>
          {news.trendingSection.map((item) => (
            <div key={item.id} className="trending-item">
              {item.headline}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default NewsPaperLayout;
