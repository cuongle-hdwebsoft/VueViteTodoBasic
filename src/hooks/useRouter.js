import queryString from "query-string";

function useQueryParams() {
  const handleChangeRoute = (query) => {
    console.log(query);
    window.history.replaceState(
      null,
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
}

export default useQueryParams;
