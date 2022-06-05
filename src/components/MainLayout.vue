<template>
  <Container>
    <HeaderComponent />
    <div class="content">
      <slot />
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