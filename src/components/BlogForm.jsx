const BlogForm = ({ publish }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;

    if (title.length < 1 || content.length < 1) {
      return;
    }
    const blog = {
      id: new Date().getTime(),
      title,
      content,
    };
    publish(blog);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="3"
            placeholder="content"
          ></textarea>
        </div>
        <button className="btn btn-success w-100" type="submit">
          Publicar
        </button>
      </form>
    </>
  );
};

export default BlogForm;
