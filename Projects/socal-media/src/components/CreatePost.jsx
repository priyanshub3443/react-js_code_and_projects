const CreatePost = () => {
  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feel today ..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
          type="text"
          className="form-control"
          id="userID"
          placeholder="Your User ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          id="title"
          placeholder="Tell us about its ..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
