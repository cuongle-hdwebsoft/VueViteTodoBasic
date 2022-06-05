import { ref } from "vue";
import TodoApi from "../../service/todo";

const useGetTodo = () => {
  const todos = ref([]);
  const isLoading = ref(false);
  const total = ref(0);
  const error = ref(null);

  const handleGetTodos = async (page, limit, filter) => {
    try {
      isLoading.value = true;
      const { data, total: _total, success } = await TodoApi.getAll({
        page,
        limit,
        filter,
      });

      if(!success) {
        error.value = "Fail to load todos";
      } else {
        todos.value = data;
        total.value = _total;
        isLoading.value = false;
      }
    } catch (error) {
      error.value = "Fail to load todos";
    }
  };

  return {
    todos,
    total,
    error,
    isLoading,
    handleGetTodos,
  };
};

export default useGetTodo;
