import instance from "./instance";

export default class TodoApi {
  static async getAll(params = {}) {
    try {
      const rs = await instance({
        method: "GET",
        url: "/todos",
        params: {
          _limit: params.limit ? params.limit : 12,
          _page: params.page ? params.page : 1,
          ...params.filter,
        },
      });
      const total = rs.headers["x-total-count"];
      return {
        success: true,
        data: rs.data,
        total: parseInt(total),
      };
    } catch {
      return {
        success: false,
        data: [],
        total: 0,
      };
    }
  }

  static async get(id) {
    try {
      const rs = await instance({
        method: "GET",
        url: "/todos/" + id,
      });
      return {
        success: true,
        data: rs.data,
      };
    } catch {
      return {
        success: false,
        data: null,
      };
    }
  }

  static async update(id, todo) {
    try {
      await instance({
        method: "PUT",
        url: "/todos/" + id,
        data: todo,
      });
      return {
        success: true,
      };
    } catch {
      return {
        success: false,
      };
    }
  }

  static async create(todo) {
    try {
      await instance({
        method: "POST",
        url: "/todos/",
        data: todo,
      });
      return {
        success: true,
      };
    } catch {
      return {
        success: false,
      };
    }
  }
}
