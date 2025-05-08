import { Routes, Route, Link } from 'react-router-dom';
import TodoPage from './/pages/TodoPage';
import AboutPage from './/pages/AboutPage';

function App() {
  return (
    <div style={{ padding: '2em' }}>
      <nav style={{ marginBottom: '2em' }}>
        <Link to="/" style={{ marginRight: '1em' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
