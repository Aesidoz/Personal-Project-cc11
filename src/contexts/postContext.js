import axios from "axios";

const { createContext, useState, useEffect } = require("react");

const PostContext = createContext();

function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/index/public");
      setPosts(res.data.posts);
      console.log(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   window.location.reload();
  // }, [posts]);

  return (
    <PostContext.Provider value={{ posts, setPosts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;

export { PostContext };
