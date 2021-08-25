import React from 'react';
import API from './Environment/config';

//import Cookies from 'js-cookie'
const ENDPOINTS = {
  all_products: "/product/",
}

const ProductApi = {
  getAll: () => new Promise(
    (resolve, reject) => {
      API.get(ENDPOINTS.all_products)
        .then(
          res => res
        )
        .then(
          data => resolve(data)
        )
        .catch(
          err => reject(err),

        )
    }
  ),
}

export default ProductApi;