import axios from "axios";
import { SERVER, SERVER_PORT } from "../config";
export default axios.create({
  baseURL: `${SERVER}:${SERVER_PORT}`,
  responseType: "json"
});
