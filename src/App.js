import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route exact path="/modules" element={<Home />} />
        <Route exact path="/modules/:id" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
