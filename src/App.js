import Topbar from "./Components/Navbar/Navbar";
import Mainbody from "./Components/Mainbody/Mainbody"
import Mainbody2 from "./Components/Mainbody2/Mainbody2"
import Mainbody3 from "./Components/Mainbody3/Mainbody3"
import Products from "./Components/Menswear/Products";
import { commerce }  from './lib/commerce';
import React, {useState, useEffect} from 'react';
import Cart from "./Components/Cart/Cart"
import ProductView from "./Components/ProductView/Productview"
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";
import Mostpop from "./Components/MostPop/Mostpop";


function App() {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [prods, setProds] = useState({})

  const fetchProducts = async () => {
   const { data: products  } = await commerce.products.list();
   const { data: categoriesData} = await commerce.categories.list();
 
   const productPerCategory = categoriesData.reduce((acc, category) => {
     return[
       ...acc,
       {
         ...category,
         productsData: products.filter((product) => 
         product.categories.find((cat) => cat.id === category.id)
         ),
       },
     ];
   },  []);
   setCategories(productPerCategory);
  };

  
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    
    setCart(item);
  }

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity })
    setCart(response)
  }

  
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response)
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);



 
  return (
    <Router>

           <div>
      
      <Topbar totalItems ={cart.total_items}/>
     <Switch>
    <Route exact path="/">
      <Mainbody></Mainbody>
      <Mainbody2></Mainbody2>
      <Mainbody3></Mainbody3>
      <Mostpop />
     <Products categories ={categories} onAddToCart = {handleAddToCart} />
    
    </Route>
    <Route exact path="/cart"> 
    <Cart
        cart={cart} 
       handleUpdateCartQty=  {handleUpdateCartQty}
       handleRemoveFromCart ={handleRemoveFromCart}
       handleEmptyCart = {handleEmptyCart}
       />
    </Route>
    <Route exact path ="/product-view/:id">
      <ProductView onAddToCart = {handleAddToCart} />
    </Route>

    <Route exact path ="/checkout">
    <Checkout cart ={cart} />
    </Route>
     </Switch>
     
   
       </div>
       </Router>
 
  );
}

export default App;
