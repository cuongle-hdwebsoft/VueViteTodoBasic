import { ref } from "vue";
import TodoApi from "../../service/todo";

const useGetTodo = () => {
  const isLoading = ref(false);
  const todo = ref(null);
  const error = ref(null);

  const handleGetTodo = async (id) => {
    try {
      let result = await TodoApi.get(id);

      if(!result.success) {
        error.value = "Fail to load todo";
      } else {
        todo.value = result.data;
      }
    } catch {
      error.value = "Fail to load todo";
    }
  };

  return {
    todo,
    error,
    isLoading,
    handleGetTodo,
  };
};

export default useGetTodo;