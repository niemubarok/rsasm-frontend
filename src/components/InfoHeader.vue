<template>
  <div class="row q-pa-xs q-mt-sm float-right no-wrap">
    <a href="tel:+62217270681" style="text-decoration: none">
      <q-btn :size="$q.screen.lt.md? '15px':'12px'"  flat icon="mdi-phone" color="grey-8" text-color="secondary">
        <span v-if="$q.screen.gt.md">021-727 0681</span>
      </q-btn>
    </a>
    <a href="https://wa.me/+628111256550" target="_blank" style="text-decoration: none">
      <q-btn :size="$q.screen.lt.md? '15px':'12px'"  flat icon="mdi-whatsapp" style text-color="secondary">
        <span v-if="$q.screen.gt.md">081-1125-6550</span>
      </q-btn>
    </a>
    <a
    v-if="$q.screen.gt.xs"
      href="https://www.facebook.com/rsalisibrohmalisi"
      target="_blank"
      style="text-decoration: none"
    >
      <q-btn :size="$q.screen.lt.md? '15px':'12px'" flat icon="mdi-facebook" style text-color="secondary">
        <span v-if="$q.screen.gt.md">rsalisibrohmalisi</span>
      </q-btn>
    </a>
    <a
    v-if="$q.screen.gt.xs"
      href="https://www.instagram.com/rsalisibrohmalisi"
      target="_blank"
      style="text-decoration: none"
    >
      <q-btn :size="$q.screen.lt.md? '15px':'12px'"  flat clickable icon="mdi-instagram" style text-color="secondary">
        <span v-if="$q.screen.gt.md">@rsalisibrohmalisi</span>
      </q-btn>
    </a>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
