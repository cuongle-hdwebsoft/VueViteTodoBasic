<template>
  <Container>
    <HeaderComponent></HeaderComponent>
    <div class="content">
      <slot></slot>
    </div>
  </Container>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import Container from "@/components/Container.vue";

export default {
  components: {
    HeaderComponent,
    Container,
  },
};
</script>

<style>
</style>