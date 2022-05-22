<template>
  <h1>HomePage</h1>
  <div>
    <todo-item></todo-item>
    <todo-item></todo-item>
    <todo-item></todo-item>
    <todo-item></todo-item>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "HomePage",
  components: {
    TodoItem,
  },
};
</script>
<style lang="scss"></style>;
