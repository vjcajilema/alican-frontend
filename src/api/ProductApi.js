import React from 'react';
import API from './Environment/config';

//import Cookies from 'js-cookie'
const ENDPOINTS = {
  all_products: "/mercadolibre/mercadolibre/",
  search: "/products/search1/",
  find_product: "/mercadolibre/mercadolibre"
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
  search: (params) => new Promise(
    (resolve, reject) => {
      API.post(ENDPOINTS.search,
        JSON.stringify({
            'params': params,
        }))
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
  find: (id) => new Promise(
    (resolve, reject) => {
      API.get(ENDPOINTS.find_product+`/${id}`)
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