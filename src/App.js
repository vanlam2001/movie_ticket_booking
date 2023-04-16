import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';
import Register from './Page/Register/Register';
import Layout from './Layout/Layout';
import BookTicketPage from './Components/BookTicketPage/BookTicketPage';

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
