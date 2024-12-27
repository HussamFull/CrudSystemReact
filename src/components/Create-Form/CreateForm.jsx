import React from 'react'
import ProductForm from '../ProductForm/ProductForm'
import axios from 'axios';


export default function CreateForm() {

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post('https://dummyjson.com/products/add', newProduct, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Product added:', response.data);
      alert('تمت إضافة المنتج بنجاح!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('حدث خطأ أثناء إضافة المنتج.');
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error("Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
    }
  };


  return (
    

    <div className="d-flex vh-100 justify-content-center align-items-center">
      <header className="text-center">
        <div className="header__container">
          <h1 className="header__title">CreateForm</h1>
          <p className="header__subtitle">CreateForm</p>
          <ProductForm onAddProduct={handleAddProduct} />
          
        </div>
      </header>
    </div>
  )
}
