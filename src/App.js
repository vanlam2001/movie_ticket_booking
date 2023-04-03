import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
