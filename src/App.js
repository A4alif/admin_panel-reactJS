import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { productInputs, userInputs } from './dummydata/formSource';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs = {userInputs} title="Add New User"/>} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title = "Add New Product" />} />
            </Route>
          </Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
