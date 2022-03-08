import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Pages/Home';
import Product1 from './Pages/Product1';
import Product2 from './Pages/Product2';
import Product3 from './Pages/Product3';
import Subscribe from './Pages/Subscribe';
import Story from './Pages/Story';
import ShoppingCart from './Pages/ShoppingCart';
import ProdList from './Pages/ProdList';

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Product1 /> */}
      {/* <Product2 /> */}
      {/* <Product3 /> */}
      {/* <Subscribe /> */}
      {/* <Story /> */}
      {/* <ShoppingCart /> */}
      {/* <ProdList/> */}
<Router>  
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product1' element={<Product1/>}></Route>
    <Route path='/product2' element={<Product2/>}></Route>
    <Route path='/product3' element={<Product3/>}></Route>
    <Route path='/subscribe' element={<Subscribe/>}></Route>
    <Route path='/story' element={<Story/>}></Route>
    <Route path='/shoppingcart' element={<ShoppingCart/>}></Route>
    <Route path='/prodlist' element={<ProdList/>}></Route>

  </Routes>
</Router>
      
    </div>
  );
}

export default App;
