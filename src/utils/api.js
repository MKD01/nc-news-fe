import axios from "axios";

const api = axios.create({
  baseURL: "https://mkd-nc-news.onrender.com/api",
});

export const getArticles = () => {
  return api.get(`/articles`).then(({ data }) => {
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

// export const getUserByUsername = (username) => {
//   return api
//     .get(`/users/${username}`)
//     .then((res) => {
//       return res.data.user;
//     })
//     .catch(() => {
//       alert("Username does not exist, please try again");
//     });
// };

// export const getTopics = () => {
//   return api.get(`/topics`).then((res) => {
//     return res.data.topics;
//   });
// };

// export const postCommentByArticleId = (article_id, currUser, comment) => {
//   return api
//     .post(`/articles/${article_id}/comments`, {
//       username: currUser,
//       body: comment,
//     })
//     .then((res) => {
//       return res.data.comment;
//     });
// };

// export const deleteComment = (comment_id) => {
//   return api.delete(`comments/${comment_id}`);
// };
