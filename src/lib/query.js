const { useQuery } = require("react-query");
const { request } = require("./api");
const useApi = (url, params, options) => {
  return useQuery([url, params], async () => request.get(url, { params }), {
    ...options,
  });
};
export default useApi;
