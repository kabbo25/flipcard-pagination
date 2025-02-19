import "./styles.css";
import {Card} from "./Card";
import {useEffect, useState} from "react";
import {Pagination} from "./Pagination";

export default function App() {
    const [products, setProducts] = useState(null);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const fetchProducts = async () => {
        const result = await fetch("https://dummyjson.com/products?limit=500");
        const data = await result.json();
        console.log(data);
        setProducts(data.products);
        setTotalNumberOfPages(data.total);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="App">
            <div className={"product-container"}>
                {products &&
                    products.slice(currentPage, currentPage + 10).map((product) => <Card key={product.id}
                                                                                         product={product}/>)}
            </div>
            {totalNumberOfPages && (
                <Pagination totalNumberOfPages={totalNumberOfPages} currentPage={currentPage}
                            setCurrentPage={setCurrentPage}/>
            )}
        </div>

    );
}
