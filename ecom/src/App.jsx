import Navbar from "./custom-components/Navbar"
import { ProductCard } from "./custom-components/ProductCard"
import { useState } from "react"
import { productList } from "./js-file/productsjason"


const App = () => {
  const [products, setProducts] = useState(productList);

  const [isFilterActive, setIsFilterActive] = useState(false);

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