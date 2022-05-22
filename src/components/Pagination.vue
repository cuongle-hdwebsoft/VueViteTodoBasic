<template>
  <div class="pagination">
    <div
      v-for="_page in _total"
      :key="_page"
      class="pagination__item"
      :class="{ active: page == _page }"
      @click="$emit('update:page', _page)"
    >
      {{ _page }}
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(["total", "page", "limit"]);
const _total = computed(() => Math.ceil(props.total / props.limit));
</script>

<style lang='scss' scoped>
.pagination {
  display: flex;

  &__item {
    padding: 8px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #111;

    &.active {
      background-color: green;
      color: #fff;
    }
  }
}
</style>