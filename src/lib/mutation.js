const { useMutation } = require("react-query");
const { request } = require("./api");

const useApiMutation = (method, url, options) => {
  return useMutation(
    (data) => {
      return request({ method, url, data });
    },
    { ...options }
  );
};
export default useApiMutation;
