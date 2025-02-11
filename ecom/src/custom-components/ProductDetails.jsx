import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetails = () => {
    const [singleProduct,setSingleProduct] = useState(null);

    const {productId} = useParams()

    useEffect (() => {
        fetchData()
      },[]);

    const fetchData = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const resData  = await data.json();
        setSingleProduct(resData);
    }


  return (
    <div>
        <Product product={singleProduct} />
    </div>
  )
}

export default ProductDetails