// // src/pages/Product/ProductDetailPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductDetail from '../../components/Product/ProductDetail';

// const ProductDetailPage = ({ match }) => {
//   const { data, loading } = useApi();
//   const productId = match.params.id;
//   const product = data.find((item) => item.id === parseInt(productId, 10));

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Product Detail</h2>
//       <ProductDetail product={product} />
//     </div>
//   );
// };

// export default ProductDetailPage;
