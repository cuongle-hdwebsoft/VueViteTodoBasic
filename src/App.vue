<template>
  <main-layout>
    <router-view></router-view>
  </main-layout>
</template>

<script setup>
</script>
<script>
import MainLayout from "@/components/MainLayout.vue";

export default {
  components: {
    MainLayout,
  },
};
</script>

<style>
.content {
  margin-top: 60px;
  padding: 10px;
}
</style>