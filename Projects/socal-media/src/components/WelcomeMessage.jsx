const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center className="welcome-message">
      <h1>There is no post</h1>
      <button
        type="button"
        onClick={onGetPostClick}
        className="btn btn-primary"
      >
        Get post from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
