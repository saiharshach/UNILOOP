import React, { useState } from 'react';

const AddProduct = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    offerPrice: '',
    category: 'Women',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImage = (e) => {
    setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = () => {
    console.log('Product Added:', form);
  };

  return (
    <div className="add-product-form">
      <input name="title" placeholder="Product title" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="offerPrice" placeholder="Offer Price" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        <option>Women</option>
        <option>Men</option>
      </select>
      <div>
        <input type="file" onChange={handleImage} />
        <div className="upload-box">Upload</div>
      </div>
      <button onClick={handleSubmit} className='account-submit-btn'>ADD</button>
    </div>
  );
};

export default AddProduct;