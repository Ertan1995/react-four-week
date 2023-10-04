
import './App.css';


import Body from './components/Body';
import Navi from './components/Navi';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';


function App() {

  const [categories , setCategories ] = useState([]);
const [products , setProducts ] = useState ([]);

const getProducts = async()=>{

  const response=await fetch("http://localhost:5001/products");
  const data =await response.json();
  setProducts(data)


}

const getCategories = async()=>{

  const response=await fetch("http://localhost:5001/categories");
  const data =await response.json();
  setCategories(data)


}


useEffect (()=> {
  getProducts();
  getCategories();
},[])


  return (
    
    <div className='app-div'>
    
      <Navi categories={categories}/>
      <Body products = {products}/>
      <Sidebar setProducts={setProducts} categories={categories} products={products}/>
    </div>
  );
}



export default App;
