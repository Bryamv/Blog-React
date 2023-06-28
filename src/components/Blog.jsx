import { useEffect, useReducer } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import { blogReducer } from "../helpers/blogReducer";

const Blog = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("blogs")) || [];
  };
  const [blogs, dispatch] = useReducer(blogReducer, [], init);
  //publicar blog
  const publish = (blog) => {
    dispatch({
      type: "publish",
      payload: blog,
    });
  };
  const deleteBlog = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  return (
    <>
      <h1>Blog ( {blogs.length} )</h1>
      <div className="row">
        <div className="col-7">
          <BlogList blogs={blogs} deleteBlog={deleteBlog} />
        </div>
        <div className="col-5">
          <BlogForm publish={publish} />
        </div>
      </div>
    </>
  );
};

export default Blog;
