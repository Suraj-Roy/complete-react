
import Navbar from "./custom-components/Navbar"
import { ProductCard } from "./custom-components/ProductCard"
import { useEffect, useState } from "react"





const App = () => {
  const [products, setProducts] = useState([]);

  const [productList,setProductList] = useState([]);

  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect (() => {
    getProductsData()
  },[]);

 

  const getProductsData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProductList(data);
    setProducts(data);
  }

  const filterProducts = (rate)=>{

      if(!isFilterActive){
        const filteredProduct = productList.filter((val)=>val.rating.rate >= rate);
        setProducts(filteredProduct);
        setIsFilterActive(!isFilterActive);
      }
      else{
        setProducts(productList);
        setIsFilterActive(!isFilterActive);
      }
      
  }
  return (
    <>
    <Navbar filterProducts={filterProducts} isFilterActive={isFilterActive} />
    <ProductCard productsList={products} />
    </>
  )
}

export default App


