import axios from "axios";
import { createParams } from "./utils";

const api = axios.create({
  baseURL: "https://mkd-nc-news.onrender.com/api",
});

export const getArticles = (topic, sort_by) => {
  const params = createParams(topic, sort_by);

  return api.get(`/articles`, { params }).then(({ data }) => {
    return data;
  });
};

export const getArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchComponentVotes = (component_name, component_id, vote) => {
  return api.patch(`/${component_name}/${component_id}`, { inc_votes: vote });
};

export const getTopics = () => {
  return api.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const getAllUsers = () => {
  return api.get("/users").then((res) => {
    return res.data.users;
  });
};

export const getUserByUsername = (username) => {
  return api
    .get(`/users/${username}`)
    .then((res) => {
      return res.data.user;
    })
    .catch(() => {
      alert("Username does not exist, please try again");
    });
};

export const postCommentByArticleId = (article_id, currUser, comment) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      username: currUser,
      body: comment,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`comments/${comment_id}`);
};
