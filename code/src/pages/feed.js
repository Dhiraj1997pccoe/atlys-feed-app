import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import "../styles.css";

const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const [postInput, setPostInput] = useState("");
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const isAuthenticated =
    typeof window !== "undefined" &&
    localStorage.getItem("atlys-auth") === "true";

  const handleLogin = () => setShowModal(true);

  const handleLogout = () => {
    localStorage.removeItem("atlys-auth");
    window.location.reload();
  };

  const handlePublish = () => {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }
    if (postInput.trim()) {
      setPosts([postInput, ...posts]);
      setPostInput("");
    }
  };

  const notImplemented = () => {
    alert("Function not implemented");
  };

  return (
    <>
      <Header
        isLoggedIn={isAuthenticated}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />

      <div className="container">

        {/* Editor */}
        <div className="feed-editor">
          <input
            id="feed-input"
            className="feed-input"
            placeholder="How are you feeling today?"
            value={postInput}
            onChange={(e) => setPostInput(e.target.value)}
            readOnly={!isAuthenticated}
            onFocus={!isAuthenticated ? handleLogin : undefined}
          />

          <div className="feed-toolbar">
            <button className="primary-btn" onClick={handlePublish}>
              Publish
            </button>
            <button className="secondary-btn" onClick={notImplemented}>Image</button>
            <button className="secondary-btn" onClick={notImplemented}>GIF</button>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post, i) => (
          <div key={i} className="feed-post">
            <div>{post}</div>

            <div className="feed-actions">
              <button className="action-btn" onClick={notImplemented}>Like</button>
              <button className="action-btn" onClick={notImplemented}>Comment</button>
              <button className="action-btn" onClick={notImplemented}>Share</button>
            </div>
          </div>
        ))}

        {/* Modal */}
        {showModal && (
          <div className="modal-backdrop">
            <div className="modal">
              <h3>Sign in to continue</h3>
              <div className="modal-btns">
                <button
                    className="primary-btn"
                    onClick={() => navigate("/signin")}
                    >
                    Sign In
                </button>
                <button
                    className="secondary-btn"
                    onClick={() => navigate("/signup")}
                    >
                    Sign Up
                </button>

                <button
                    className="text-link"
                    onClick={() => setShowModal(false)}
                    >
                    Cancel
                </button>
              </div>  
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Feed;
