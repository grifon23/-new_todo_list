import axios from "axios";

export const getPostsReq = (limit = 10, page = 1) => {
  return axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _limit: limit,
      _page: page,
    },
  });
};
export const getPostsIdReq = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
};
