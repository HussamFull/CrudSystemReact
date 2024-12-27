import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title,
      description,
      price: parseInt(price), // تأكد من تحويل السعر إلى رقم
      // يمكنك إضافة المزيد من الحقول هنا حسب الحاجة
    };
    onAddProduct(newProduct);
    // مسح النموذج بعد الإرسال
    setTitle('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label><br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label><br />
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label><br />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;