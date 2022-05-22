<template>
  <HeaderComponent></HeaderComponent>
  <Container>
    <router-view></router-view>
  </Container>
</template>

<script setup>
import HeaderComponent from "@/components/Header.vue";
import Container from "@/components/Container.vue";
</script>
<script>
</script>

<style>
</style>