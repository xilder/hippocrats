import axios from "axios";

export default axios.create({
  withCredentials: true,
  timeout: 5000,
});
