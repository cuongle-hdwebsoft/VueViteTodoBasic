<template>
  <h1>Home Page</h1>
  <div>
    <el-input v-model="q" type="text" placeholder="Search..." />
  </div>
  <template v-if="!isLoading">
    <div class="d-flex">
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
    </div>
    <div>
      <el-pagination
        :total="total"
        v-model:current-page="page"
        v-model:page-size="limit"
        layout="prev, pager, next"
        :small="false"
        :page-sizes="[12, 28]"
        :background="true"
      ></el-pagination>
    </div>
  </template>
  <template v-else><el-empty :image-size="200" /></template>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import useGetTodos from "@/hooks/useGetTodos.js";
import useQueryParams from "@/hooks/useRouter.js";
import { onBeforeMount, ref, watch } from "vue";

export default {
  name: "HomePage",
  components: {
    TodoItem,
  },
  setup: function () {
    const { handleChangeRoute, handleGetQuery } = useQueryParams();
    const query = handleGetQuery();
    const { todos, isLoading, handleGetTodos, total } = useGetTodos();
    const q = ref(query.q || "");
    const page = ref(parseInt(query.page) || 1);
    const limit = ref(parseInt(query.limit) || 8);

    onBeforeMount(async () => {
      await handleGetTodos(page.value, limit.value, { q: q.value });
      handleChangeRoute({
        limit: limit.value,
        page: page.value,
        filter: {
          q: q.value,
        },
      });
    });

    watch([page], function () {
      handleGetTodos(page.value, limit.value, { q: q.value });
      handleChangeRoute({
        limit: limit.value,
        page: page.value,
        filter: { q: q.value },
      });
    });

    watch([q, limit], function () {
      page.value = 1;
      handleGetTodos(page.value, limit.value, { q: q.value });
      handleChangeRoute({
        limit: limit.value,
        page: page.value,
        filter: { q: q.value },
      });
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
