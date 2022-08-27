import useApi from "./query";
import useApiMutation from "./mutation";
export const GetData = (params, options) => {
  return useApi("/data", params, options);
};


