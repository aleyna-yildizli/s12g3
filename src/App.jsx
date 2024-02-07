import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts([...res.data]);
      console.log(res);
    })
  })




  return (
    <>
      <products>xcvcx</products>
    </>
  )
}

export default App
