<template>
  <!-- <q-card style="width: 90vw; height: 90vh" class="q-ma-md"> -->
  <div class="column q-mt-md justify-center">
    <div class="row justify-center">
      <login />
      <register />
    </div>
  </div>
  <!-- </q-card> -->
</template>

<script>
import Login from "src/components/form/Login.vue";

import Register from "src/components/form/Register.vue";
export default {
  components: { Login, Register },
};
</script>

<style></style>
