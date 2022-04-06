import axios from "axios";

import { convertSnake } from "../util";

export async function post(endpoint: string, data: Object) {
  console.log(convertSnake(data));
  try {
    const response = await axios.post(endpoint, data);
    return response;
  } catch (error) {
    return await Promise.reject(error);
  }
}
