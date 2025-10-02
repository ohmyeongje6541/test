import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductContainer() {
  const [products, setProduct] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get("https://dummyjson.com/products?sortBy=title&order=asc");
      const data = response["data"];
      console.log(data);
      setProduct(data["products"]);
    }
    getProduct();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-wrap gap-6 justify-center"></div>
      {/* product 컴포넌트 반복 */}
      {products.map((product) => {
        return <Product key={product["id"]} product={product}></Product>
      })}
    </div>);
}
