import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookTicketPage from './Page/BookTicketPage/BookTicketPage';
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';
import Register from './Page/Register/Register';
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout Component={HomePage} />}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>

          <Route path='/booking/:id' element={<Layout Component={BookTicketPage} />}></Route>

          <Route path='/register' element={<Register></Register>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
