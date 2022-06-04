<template>
  <div class="todo-item">
    <el-card class="todo-item__wrap">
      <div class="todo-item__title">
        <strong>Title: </strong>
        <span>{{ todo.title }}</span>
      </div>
      <div class="todo-item__date">
        <strong>Date: </strong>
        <span>{{ todo.date }}</span>
      </div>
      <div class="todo-item__status">
        <strong>Status: </strong>
        <span>{{ todo.status }}</span>
      </div>
      <div class="btn-group">
        <el-button
          :icon="EditPen"
          type="primary"
          @click="router.push('/todo/' + todo.id)"
        >
          Edit
        </el-button>
        <el-button
          :icon="Delete"
          type="danger"
        >
          Delete
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

defineProps(["todo"]);
const router = useRouter();
</script>
<script>
import { EditPen, Delete } from "@element-plus/icons-vue";

export default {
  name: "TodoItem",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    EditPen,
    // eslint-disable-next-line vue/no-unused-components
    Delete,
  },
};
</script>

<style lang='scss' scoped>
.todo-item {
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &__wrap {
    border: 1px solid #ddd;
    padding: 5px 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin: 10px 0px;
    min-height: 130px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  }

  &__title {
    font-size: 16px;
    margin-bottom: 5px;
  }

  &__date {
    font-size: 16px;
    margin-bottom: 5px;
  }

  &__status {
    font-size: 16px;
    margin-bottom: 5px;
  }
}
</style>