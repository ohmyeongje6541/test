import axios from "axios";

async function daletePost() {
  const config = {
    method: "delete",
    url: "https://dummyjson.com/products/1",

  };

  const response = await axios(config);
  const data = response["data"];
  console.log(data)
}
daletePost();