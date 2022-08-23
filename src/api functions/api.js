import axios from "axios";

export const fetchArticles = () => {
  return axios.get("https://wtan.herokuapp.com/api/articles").then((res) => {
    return res;
  });
};

export const fetchArticlesById = (article_id) => {
  return axios
    .get(`https://wtan.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
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

export const patchVotesById = (article_id, vote_delta) => {
  return axios.patch(`https://wtan.herokuapp.com/api/articles/${article_id}`, {
    inc_votes: vote_delta,
  });
};

export const fetchUsers = () => {
  return axios.get("https://wtan.herokuapp.com/api/users").then((res) => {
    return res;
  });
};

export const fetchCommentsByArticle = (article_id) => {
  return axios
    .get(`https://wtan.herokuapp.com/api/articles/${article_id}/comments`)
    .then((response) => {
      return response;
    });
};
