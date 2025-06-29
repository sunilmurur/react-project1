import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {addtoCart, removeCart} from '../../redux/slices/cartSlice'


import {setBrand } from '../../redux/slices/brandSlice'
const Product = () =>{
    const [productData, setProductData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const getProduct = async () => {
        try{
           const response = await fetch('https://dummyjson.com/products');
            const json = await response.json();
            setProductData(json.products)
            setLoading(false)
            //console.log(json.products);
        
        }catch(error)
        {
            console.error(error);
        }
    }
    useEffect(() => {

    getProduct();
}, []);

   
const dispatch = useDispatch()
return(
    <div>
        <div className="cocontainer mt-5">
        {isLoading ? (
            <p>Loading Product</p>
        ):(<>
              <div className="row">
            
           {productData.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.slice(0, 80)}...</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <span className="fw-bold">${product.price}</span>

                <button className="btn btn-sm btn-primary" onClick={(e) => dispatch(addtoCart({id:product.id,name:product.title,price:product.price}))}>Add Cart</button>
                <button className="btn btn-sm btn-primary" onClick={(a) => dispatch(setBrand ({brand:product.brand}))}>Add Brand</button>
                <button className="btn btn-sm btn-primary" onClick={(a) => dispatch(removeCart (product.id))}>Remove Cart</button>
              </div>

            </div>
          </div>
        ))}
        </div>
        </>)}
        
        </div>
    </div>
    
    
);
}
export default Product;