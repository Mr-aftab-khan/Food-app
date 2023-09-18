import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Bootstrap } from "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './components/footer';
import CheckOut from './components/checkOut';
import SingleProduct from './Pages/singleProduct';
import Cart from './components/Cart/cart';
import { CartProvider } from 'react-use-cart';
import PastaView from './components/pastaView';

function App() {
  return (

    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Menus' element={<Menu />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='Checkout' element={<CheckOut />} />
            <Route path='/menu/:menuId' element={<SingleProduct />} />
            <Route path='/pastaDetail/:pastaId' element={<PastaView/>} />
            <Route path='/MyCart' element={<Cart />} />
          
          </Routes>
          <Footer />
        </Router>   
      </CartProvider>
    </div>

  );

}
// {/* <script src='../node_modules/bootstrap/dist/js/bootstrap'></script> */}
export default App;