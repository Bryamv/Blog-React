const BlogListItem = ({ blog, deleteBlog }) => {
  return (
    <>
      <li className="list-group-item mb-3">
        <div className="text-center">
          <h2>{blog.title}</h2>
        </div>
        <p>{blog.content}</p>
        <button className="btn btn-danger " onClick={() => deleteBlog(blog.id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default BlogListItem;
