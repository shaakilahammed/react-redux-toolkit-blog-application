import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
