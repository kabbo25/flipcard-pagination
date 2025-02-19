import "./styles.css";
import { Card } from "./Card";
import { useEffect, useState } from "react";
export default function App() {
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const result = await fetch("https://dummyjson.com/products?limit=10");
    const data = await result.json();
    console.log(data);
    setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="App">
      {products &&
        products.map((product) => <Card key={product.id} product={product} />)}
    </div>
  );
}
