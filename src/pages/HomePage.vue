<template>
  <h1>HomePage</h1>
  <div>
    <input
      class="input-search"
      v-model="q"
      type="text"
      placeholder="Search..."
    />
    <template v-if="!isLoading">
      <div class="d-flex">
        <todo-item
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
        ></todo-item>
      </div>
      <pagination
        :total="total"
        v-model:page="page"
        v-model:limit="limit"
      ></pagination>
    </template>
    <template v-else> Loading... </template>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import Pagination from "@/components/Pagination.vue";
import useGetTodos from "@/hooks/useGetTodos.js";
import useQueryParams from "@/hooks/useRouter.js";
import { onBeforeMount, ref, watch } from "@vue/runtime-core";
export default {
  name: "HomePage",
  components: {
    TodoItem,
    Pagination,
  },
  setup: function () {
    const { todos, isLoading, handleGetTodos, total, limit, page } =
      useGetTodos();
    const { handleChangeRoute } = useQueryParams();
    const q = ref("");

    onBeforeMount(() => {
      handleGetTodos();
      handleChangeRoute({
        limit: limit.value,
        page: page.value,
        filter: {
          q: q.value,
        },
      });
    });

    watch([page, limit, q], function ([newPage, newLimit, newQ]) {
      handleChangeRoute({
        limit: newLimit,
        page: newPage,
        filter: { q: newQ },
      });
      handleGetTodos(page.value, limit.value, { q: q.value });
    });

    return {
      todos,
      total,
      isLoading,
      handleGetTodos,
      limit,
      page,
      q,
    };
  },
};
</script>
<style lang="scss">
.input-search {
  padding: 8px 16px;
  border-radius: 4px;
  width: 300px;
}
</style>;
