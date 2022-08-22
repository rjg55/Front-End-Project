import axios from "axios";

export const fetchArticles = () => {
  return axios.get("https://wtan.herokuapp.com/api/articles").then((res) => {
    return res;
  });
};
