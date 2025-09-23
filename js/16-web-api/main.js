//async/await

import axios from "axios";

async function connectTest() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response["data"]);
  // console.table(Object.keys(response))
}
connectTest();