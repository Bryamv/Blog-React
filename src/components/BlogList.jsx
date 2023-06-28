import BlogListItem from "./BlogListItem";

const BlogList = () => {
  return (
    <>
      <h1>Blog</h1>
      <ul className="list-group">
        <BlogListItem />
      </ul>
    </>
  );
};

export default BlogList;
