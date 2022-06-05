<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ContainerComponent",
};
</script>

<style lang='scss' scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 0px 10px;
  border: 1px solid #ddd;
  border-top: none;
  position: relative;
}
</style>