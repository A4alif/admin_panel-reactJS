import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
