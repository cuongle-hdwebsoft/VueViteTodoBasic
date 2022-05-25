<template>
  <div>Hello world</div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup: function () {
    return {
      name: ref("Ram4GB"),
      age: 23,
    };
  },
};
</script>

<style>
</style>