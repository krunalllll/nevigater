import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cloth from './components/cloth';

import Product from './components/product';
import Electronic from './components/Electronic';
import Jewellery from './components/Jewellery';

import ProductDetail from './components/ProductDetails';



function App() {
  return (
    <div >
    
    <Nav/>
<Routes>
  
 
  <Route path="/product" element={<Product/>}>
  <Route path="electronic"element={<Electronic/>}/>
  <Route path="jewellery" element={<Jewellery/>}/>
  <Route path="Nav" element={<Nav/>}/> 
  <Route path="cloth" element={<h2>Mens Cloth</h2>}/>
  
  
  </Route>
   <Route path="/productDetail/:id" element={<ProductDetail/>} />

</Routes>
    </div>
  );
}

export default App;
