import axios from "../config/axios";

export const createPost = (blogPic, title, country, proVince, budGet, like) => {
  const formData = new FormData();
  formData.append("blogPic", blogPic);
  formData.append("title", title);
  formData.append("country", country);
  formData.append("proVince", proVince);
  formData.append("budGet", budGet);
  formData.append("like", like);
};

export const getAllPost = () => axios.get("user/post");

export const createLike = (postId) => axios.post(`/posts/${postId}/like`);
export const deleteLike = (postId) => axios.delete(`/post/${postId}/like`);
