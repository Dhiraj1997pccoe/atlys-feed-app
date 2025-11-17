import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Feed from './pages/feed';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
