import queryString from "query-string";

function useQueryParams() {
  const handleChangeRoute = (query) => {
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

  return {
    handleChangeRoute,
  };
}

export default useQueryParams;
