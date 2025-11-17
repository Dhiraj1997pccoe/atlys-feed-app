import "../../styles.css";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, handleLogout, handleLogin }) => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <h1 className="app-title" onClick={() => navigate("/")}>Atlys - Feed</h1>

      {isLoggedIn ? (
        <button className="header-btn logout" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="header-btn login" onClick={handleLogin}>
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
