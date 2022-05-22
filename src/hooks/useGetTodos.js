import { ref } from "vue";
import TodoApi from "../../service/todo";

function useGetTodo() {
  const todos = ref([]);
  const isLoading = ref(false);
  const total = ref(0);

  const handleGetTodos = async (page, limit, filter) => {
    isLoading.value = true;
    const { data, total: _total } = await TodoApi.getAll({
      page,
      limit,
      filter,
    });

    todos.value = data;
    total.value = _total;
    isLoading.value = false;
  };

  return {
    todos,
    total,
    isLoading,
    handleGetTodos,
  };
}

export default useGetTodo;
