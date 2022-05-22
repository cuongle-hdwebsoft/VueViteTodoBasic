<template>
  <div class="todo-item">
    <div class="todo-item__title">
      <strong>Title: </strong>
      <span>Title Todo</span>
    </div>
    <div class="todo-item__description">
      <strong>Description: </strong>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        consequatur sint odio unde omnis ipsa cumque dolores facilis explicabo
        sit ea iure fuga! Nisi, tempore adipisci nihil necessitatibus nemo
        ipsam!
      </span>
    </div>
    <div class="todo-item__date">
      <strong>Date: </strong>
      <span>22/05/2022</span>
    </div>
    <div class="todo-item__status">
      <strong>Status: </strong>
      <span>Done</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
};
</script>

<style lang='scss' scoped>
.todo-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>