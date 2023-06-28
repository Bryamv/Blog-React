import BlogListItem from "./BlogListItem";

const BlogList = ({ blogs, deleteBlog }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {blogs.map((blog) => (
          <BlogListItem key={blog.id} blog={blog} deleteBlog={deleteBlog} />
        ))}
      </ul>
    </>
  );
};

export default BlogList;
