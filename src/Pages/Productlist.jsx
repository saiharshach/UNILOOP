import React from 'react';

const mockProducts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    title: 'Product',
    oldPrice: 100,
    newPrice: 50,
    category: 'Womens',
  },
];

const ProductList = () => {
  const handleRemove = (id) => {
    // remove logic
    console.log('Removed product:', id);
  };

  return (
    <div className="product-list-table">
      <h2>All Products List</h2>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((prod) => (
            <tr key={prod.id}>
              <td><img src={prod.image} alt={prod.title} width="50" /></td>
              <td>{prod.title}</td>
              <td>${prod.oldPrice}</td>
              <td>${prod.newPrice}</td>
              <td>{prod.category}</td>
              <td>
                <button onClick={() => handleRemove(prod.id)} className="remove-btn">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;