import axios from "axios";
export default axios.create({
  baseURL: "https://hureechain-default-rtdb.firebaseio.com/",
});
