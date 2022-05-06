import axios from "axios";

import { camelToSnake, convertResponse } from "./util";

export async function post(endpoint: string, data: Object) {
  try {
    const response = await axios.post(endpoint, camelToSnake(data));
    return convertResponse(response);
  } catch (error) {
    return await Promise.reject(error);
  }
}

export async function get(endpoint: string, params: Object | null) {
  try {
    const response = await axios.get(endpoint, {params: params});
    return convertResponse(response);
  }
  catch (error) {
    return await Promise.reject(error);
  }
}