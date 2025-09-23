import axios from "axios";

// 도메인 주소
const BASE_URL = "https://dummyjson.com";

// async function fetchData() {
//   const response = await axios.get(`${BASE_URL}/`)
//   const data = response["data"];
//   console.log(data);
// }

// fetchData();

// async function Testconnection() {
//   const response = await axios.get(`${BASE_URL}/test`);
//   const data = response["data"]
//   console.log(data);
// }
// Testconnection();

// async function getAllproducts() {
//   const response = await axios.get(`${BASE_URL}/products`);
//   const data = response["data"]
//   console.log(data);
// }

// getAllproducts();

// async function getproductById(n) {
//   const response = await axios.get(`${BASE_URL}/products/${n}`);
//   const data = response["data"];
//   console.log(data);
// }

// getproductById(1);
// getproductById(2);
// getproductById(10);

// async function searchProducts(search) {
//   const queryParams = new URLSearchParams({ q: search });
//   const res = await axios.get(`${BASE_URL}/products/search?${queryParams}`);
//   const data = res["data"];
//   console.log(data);
// }

// searchProducts("phone");

// async function getAllProducts() {
//   const res = await axios.get(`${BASE_URL}/products`);
//   const data = res["data"];
//   console.log(Object.keys(data));
// }

// getAllProducts();
