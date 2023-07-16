import axios from "axios";

axios.get("https://www.google.com").then((response) => {
  console.log("✅ response    ", response);
});
