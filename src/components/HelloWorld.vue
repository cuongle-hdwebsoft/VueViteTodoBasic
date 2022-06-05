<template>
  <div>
    <main-layout-fake>
      <div>Hello world</div>
      <input ref="input">
    </main-layout-fake>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import MainLayoutFake from "@/components/MainLayoutFake.vue";

export default {
  components: { MainLayoutFake },
  setup: function () {
    const store = useStore();
    const appName = computed(() => store.state.APP_NAME);
    const input = ref(null);

    return {
      name: ref("Ram4GB"),
      age: 23,
      appName,
      input,
    };
  },
  computed: {},
};
</script>

<style>
</style>