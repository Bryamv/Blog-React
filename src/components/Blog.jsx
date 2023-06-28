import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

const Blog = () => {
  return (
    <>
      <div className="row">
        <div className="col-7">
          <BlogList />
        </div>
        <div className="col-5">
          <BlogForm />
        </div>
      </div>
    </>
  );
};

export default Blog;
