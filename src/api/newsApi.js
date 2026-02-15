import newsData from "../data/news.json";

export const fetchNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newsData);
    }, 400);
  });
};
