import React, { useState, useEffect } from 'react'
import axios from 'axios';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';



export default function ProductLimt() {


  // Fetch data from API
  const { data, isLoading, error } = useFetch('https://dummyjson.com/products?limit=5');

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      {error ? <div className="alert alert-danger">{error}</div> : ''}
  
   
  
      <div className="container">
        
      <h1>Top 5 Products</h1>
        <div className="row">
          {data.products.map((product) => (
            <div className="col-md-4" key={product.id}> 
              <div className="card" style={{ width: 'auto' }}> 
                <img src={product.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}.</p>
                    <Link to={`/product/${product.id}`}   className="btn btn-outline-success btn-lg">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
