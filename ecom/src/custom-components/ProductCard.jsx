import Product from "./Product"
import { productList } from "../js-file/productsjason"

export const ProductCard = () => {
  return (
    <>
    <div className="flex grid grid-cols-4 gap-2 my-2">

    {
        productList.map((val)=> {
        return <Product key={val.id} props={val} />})
    }
   
</div>
    </>
  )
}
