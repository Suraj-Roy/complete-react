const Product = ({ product }) => {
  const {id, title, image, rating, price,description,category} = product;
  // console.log(title)
  // console.log(image)
  return (
    <>
      <div className="card bg-base-100 w-60 shadow-sm  mx-auto flex my-4">
        <figure>
          <img className="w-60 h-50" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{category}</p>

          <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`mask mask-heart w-6 h-6 ${
                star <= rating.rate ? "bg-red-400" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

          <div
            className="card-actions justify-end items-center
"
          >
            <p
              className="font-md font-medium
"
            >
              price: {price}
            </p>
            <button className="btn btn-primary mr-auto">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
