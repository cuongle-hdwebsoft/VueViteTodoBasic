import instance from "./instance";

export default class TodoApi {
  static getAll(params = {}) {
    return instance({
      methods: "GET",
      url: "/todos",
      params: {
        _limit: params.limit ? params.limit : 12,
        _page: params.page ? params.page - 1 : 0,
        ...params.filter,
      },
    })
      .then((rs) => {
        const total = rs.headers["x-total-count"];

        return {
          success: true,
          data: rs.data,
          total,
        };
      })
      .catch(() => {
        return {
          success: false,
          data: [],
          total: 0,
        };
      });
  }

  static get(id) {
    return instance({
      methods: "GET",
      url: "/todos/" + id,
    })
      .then((rs) => {
        return {
          success: true,
          data: rs.data,
        };
      })
      .catch(() => {
        return {
          success: false,
          data: null,
        };
      });
  }

  static update(id, todo) {
    return instance({
      methods: "PUT",
      url: "/todos/" + id,
      data: todo,
    })
      .then((rs) => {
        return {
          success: true,
        };
      })
      .catch(() => {
        return {
          success: false,
        };
      });
  }

  static post(todo) {
    return instance({
      methods: "POST",
      url: "/todos/",
      data: todo,
    })
      .then((rs) => {
        return {
          success: true,
        };
      })
      .catch(() => {
        return {
          success: false,
        };
      });
  }
}
