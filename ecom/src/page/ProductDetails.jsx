import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'; 

function ProductDetails() {

  const [state,setState]=useState([])


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setApiData(res.data);
        setSortedData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <>
    <div></div>
    </>
  )
}

export default ProductDetails