import axios from "axios";

import { camelToSnake, snakeToCamel } from "./util";

export async function post(endpoint: string, data: Object) {
  try {
    const response = await axios.post(endpoint, camelToSnake(data));
    let convertedResponse = Object.assign({}, response);
    delete convertedResponse.data;
    convertedResponse["data"] = snakeToCamel(response.data);
    return convertedResponse;
  } catch (error) {
    return await Promise.reject(error);
  }
}