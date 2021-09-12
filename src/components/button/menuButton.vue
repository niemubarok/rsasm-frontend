<template>
  <q-btn
    v-if="$q.screen.lt.lg"
    flat
    dense
    round
    aria-label="Menu"
    icon="menu"
    class="q-mx-cs"
    style="z-index: 2"
    @click="
      store.components.state.leftDrawerOpen =
        !store.components.state.leftDrawerOpen
    "
  />
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    return {
      store: inject("store"),
    };
  },
};
</script>

<style></style>
