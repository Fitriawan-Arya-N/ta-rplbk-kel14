// // src/pages/Product/ProductListPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductList from '../../components/Product/ProductList';
// import './ProductListPage.css';
// import { useApi } from '../../ApiProvider';

// const ProductListPage = () => {
//     const { data, loading } = useApi();
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     return (
//       <div>
//         <h2>Product List</h2>
//         <ProductList products={data} />
//       </div>
//     );
//   };
  
//   export default ProductListPage;
