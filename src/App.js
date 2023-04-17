import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';
import Register from './Page/Register/Register';
import Layout from './Layout/Layout';
import DetailPage from './Page/DetailPage/DetailPage';
import ListMoveHome from './Page/HomePage/ListMoveHome/ListMoveHome';
import TabsMovieHome from './Components/TabsMovieHome/TabsMovieHome';
import DowloadApp from './Components/DowloadApp/DowloadApp';
import NotFoundPage from './Page/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout Component={HomePage} />}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/detail/:id' element={<Layout Component={DetailPage} />}></Route>
          <Route path='/list' element={<Layout Component={ListMoveHome} />}></Route>
          <Route path='/rap' element={<Layout Component={TabsMovieHome} />}></Route>
          <Route path='/ungdung' element={<Layout Component={DowloadApp} />}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<Layout Component={HomePage} />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
