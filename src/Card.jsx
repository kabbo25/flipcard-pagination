export const Card = ({ product }) => {
  const calculatePercentage = (price, discountPercentage) => {
    const basePercentage = (discountPercentage * 100) / price;
    return Math.ceil(100 - basePercentage);
  };
  const percentage = calculatePercentage(
    product.price,
    product.discountPercentage
  );
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={product.thumbnail} alt="thumbnail" width="200" height="200" />
      </div>
      <div className="card-description">
        <span>{product.brand}</span>
        <span>{product.title}</span>
        <div className="price-section">
          <span>{product.discountPercentage}$</span>
          <span className="original-price">{product.price}$</span>
          <span className="discount-percentage">
            {percentage > 0 && `${percentage}% off`}
          </span>
        </div>
        <span>{product.shippingInformation}</span>
        <span
          className={`available-status ${
            product.availabilityStatus === "In Stock"
              ? "in-stock-text"
              : product.availabilityStatus === "Low Stock"
              ? "low-stock-text"
              : ""
          }`}
        >
          {product.availabilityStatus}
        </span>
      </div>
    </div>
  );
};
