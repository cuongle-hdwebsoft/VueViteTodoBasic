import queryString from "query-string";

const useQueryParams = () => {
  const handleChangeRoute = (query) => {
    window.history.replaceState(
      {},
      "",
      window.location.protocol +
        "//" +
        window.location.host +
        "/#/?" +
        queryString.stringify({
          limit: query.limit,
          page: query.page,
          ...query.filter,
        })
    );
  };

  const handleGetQuery = () => {
    const query = queryString.parse(window.location.hash.split("#/?")[1]);
    return query;
  };

  return {
    handleChangeRoute,
    handleGetQuery,
  };
};

export default useQueryParams;
