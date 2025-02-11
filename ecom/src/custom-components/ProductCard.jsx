import Product from "./Product";

export const ProductCard = ({ productsList }) => {

  return (
    <div className="grid grid-cols-4 gap-2 my-2">
      {productsList.map((val) => (
        <Product key={val.id} product={val} />
      ))}
    </div>
  );
};
