import React, { useState ,useEffect }  from 'react'
import axios from 'axios';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../Loading/Loading';



export default function Products() {


  // Fetch data from API
  const {data, isLoading , error} = useFetch('https://dummyjson.com/products');
  
  if (isLoading){
     return <Loading />
    }
  return (
    <>
    {error? <div className="alert alert-danger">{error}</div>  : ''}  
    <h1>Products</h1>
    {data.products.map(product => 
      <div key={product.id} >
        <div >
          {product.title}
        </div>
        <div className="card-body">
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.price}</p>
        </div>
      </div>
    )}
    </>
  )
}
