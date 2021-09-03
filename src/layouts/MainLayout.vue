<template>
  <q-layout view="lHh Lpr fFf" class="bg-grey-3">
    <header-layout  />
    <!-- <footer-layout
      v-if="$q.screen.lt.md && !store.components.state.searchBoxClicked"
    /> -->

    <q-drawer
      v-model="store.components.state.leftDrawerOpen"
      behavior="mobile"
      bordered
      width="120px"
      class="z-max "
    >
      <!-- mini="true" -->
      <!-- style="width:120px;" -->
      <!-- :width="50+'px'" -->
      <!-- @click="store.components.state.leftDrawerOpen = false" -->
      <drawer />
    </q-drawer>

    <q-page-container class="GPL__page-container">
      <router-view />
      <q-page-sticky v-if="$q.screen.gt.sm" expand position="left">
        <drawer />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from "src/components/Drawer.vue";
import HeaderLayout from "src/layouts/HeaderLayout.vue";
import FooterLayout from "src/layouts/FooterLayout.vue";
import { inject } from "vue";

export default {
  name: "GooglePhotosLayout",
  components: { Drawer, HeaderLayout },

  setup() {
    const store = inject("store");

    return {
      store,
    };
  },

  data() {
    return {
      storage: 0.26,
      createMenu: [
        { icon: "peopl", text: "Pasien Baru" },
        { icon: "peopl", text: "Pasien Lama" },
        // { icon: 'movie', text: 'Movie' },
        // { icon: 'library_books', text: 'Animation' },
        // { icon: 'dashboard', text: 'Collage' },
        // { icon: 'book', text: 'Photo book' }
      ],
    };
  },
};
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 35%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
