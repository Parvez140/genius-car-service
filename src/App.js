import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Peges/About/About';
import Home from './Peges/Home/Home/Home';
import Header from './Peges/Shared/Header/Header';
import Footer from './Peges/Shared/Footer/Footer';
import ServiceDetail from './Peges/ServiceDetail/ServiceDetail';
import NotFound from './Peges/NotFound/NotFound';
import Login from './Peges/Login/Login/Login';
import Register from './Peges/Login/Register/Register';
import CheckOut from './Peges/CheckOut/CheckOut/CheckOut';
import RequireAuth from './Peges/Login/RequireAuth/RequireAuth';
import AddService from './Peges/AddService/AddService';
import ManageService from './Peges/ManageService/ManageService';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/service/:serviceId' element={<ServiceDetail/>} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkOut' element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          } />
          <Route path='/addService' element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          } />
          <Route path='/manageService' element={
            <RequireAuth>
              <ManageService />
            </RequireAuth>
          } />
          <Route path='/*' element={<NotFound />} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
