const BlogForm = () => {
  return (
    <>
      <form action="">
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
        <button className="btn btn-success w-100">Publicar</button>
      </form>
    </>
  );
};

export default BlogForm;
