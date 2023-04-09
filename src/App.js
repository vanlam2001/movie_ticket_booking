import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookTicketPage from './Page/BookTicketPage/BookTicketPage';
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/booking/:id' element={<BookTicketPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
