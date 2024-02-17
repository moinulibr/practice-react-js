import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registration from './components/Registration';
import ProductList from './pages/product/ProductList';
import AddProduct from './pages/product/AddProduct';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import Todo from './components/Todo';


function App() {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : null; 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/login' element={<Login/>} />
      
        <Route path='/logout' element={<Logout/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/about-us' element={<Aboutus/>} />
        <Route path='/contact-us' element={<Contactus/>} />
        <Route path='/product/'>
          <Route path='list' element={<ProductList/>}/>
          <Route path='add' element={<AddProduct/>}/>
        </Route>
        
        <Route path='/todo' element={<Todo/>} />
        <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
