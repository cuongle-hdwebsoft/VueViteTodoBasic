import instance from "./instance";

export default class Todo {
  static getAll() {
    return instance({
      methods: "GET",
      url: "/todos",
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
          data: [],
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
