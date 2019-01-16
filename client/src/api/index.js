import axios from "axios";
const POSTS_SERVER = "/api/posts";

const api = {
  posts: {
    getPosts: data => axios.get(`${POSTS_SERVER}`, data).then(response => response.data),
    getPost: data => axios.get(`${POSTS_SERVER}/${data}`).then(response => response.data),
    addPost: data => axios.post(`${POSTS_SERVER}`, data).then(response => response.data),
    editPost: data => axios.put(`${POSTS_SERVER}/${data._id}`, data).then(response => response.data),
    deletePost: (id, data) => axios.delete(`${POSTS_SERVER}/${id}`, data).then(response => response.data)
  }
};

export default api;
