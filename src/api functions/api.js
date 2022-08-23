import axios from "axios";

export const fetchArticles = () => {
  return axios.get("https://wtan.herokuapp.com/api/articles").then((res) => {
    return res;
  });
};

export const fetchTopics = () => {
  return axios.get("https://wtan.herokuapp.com/api/topics").then((res) => {
    return res;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return axios
    .get(`https://wtan.herokuapp.com/api/articles?topic=${topic}`)
    .then((res) => {
      return res;
    });
};
