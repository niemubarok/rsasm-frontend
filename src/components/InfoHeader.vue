<template>
  <!-- <q-header class="bg-grey-1"> -->
        <div class="q-pa-xs q-mt-sm q-gutter-xs float-right">
      <a href="tel:+62217270681" style="text-decoration: none">
        <q-btn
          rounded
          icon="mdi-phone"
          color="grey-8"
          text-color="grey-1"
          style="font-size: 10px"
        >
          <span v-if="$q.screen.gt.md">021-727 0681</span></q-btn
        >
      </a>
      <a
        href="https://wa.me/+628111256550"
        target="_blank"
        style="text-decoration: none"
      >
        <q-btn
          rounded
          icon="mdi-whatsapp"
          style="background-color: #0aaa47; font-size: 10px"
          text-color="grey-2"
        >
          <span v-if="$q.screen.gt.md">081-1125-6550</span></q-btn
        >
      </a>
      <a
        href="https://www.facebook.com/rsalisibrohmalisi"
        target="_blank"
        style="text-decoration: none"
      >
        <q-btn
          rounded
          icon="mdi-facebook"
          style="background-color: #139bf7; font-size: 10px"
          text-color="grey-2"
        >
          <span v-if="$q.screen.gt.md">rsalisibrohmalisi</span></q-btn
        >
      </a>
      <a
        href="https://www.instagram.com/rsalisibrohmalisi"
        target="_blank"
        style="text-decoration: none"
      >
        <q-btn
          rounded
          clickable
          icon="mdi-instagram"
          style="background-color: #9738ab; font-size: 10px"
          text-color="grey-2"
          class=""
        >
          <!-- @click="$router.resolve('https://www.facebook.com/rsalisibrohmalisi')" -->
          <!-- href="https://www.facebook.com/rsalisibrohmalisi" -->
          <span v-if="$q.screen.gt.md">@rsalisibrohmalisi</span></q-btn
        >
      </a>
    </div>
  <!-- </q-header> -->
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
