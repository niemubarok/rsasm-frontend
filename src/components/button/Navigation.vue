<template>
  <!-- :ripple="false" -->

  <menu-button />
  <router-link to="/" style="text-decoration: none">
    <q-btn
      style="z-index: 2"
      flat
      rounded
      icon="home"
      color="grey-9"
      @click="onClickHomeBtn"
    />
  </router-link>
  <!-- $router.push('/'), -->
  <!-- log -->
  <!-- 
      ]
    " -->
  <!-- :ripple="false" -->
  <!-- <q-btn
    style="z-index: 2"
    flat
    rounded
    icon="home"
    @click="
      [
        (store.doctor.searchText.value = ''),
        (store.doctor.isFiltered.value = false),
        $router.push('/'),
        (store.components.state.searchBoxClicked = false),
      ]
    "
  /> -->
  <q-chip rounded class="bg-grey-3 text-grey-7">
    <h5 :style="$q.platform.is.mobile ? 'font-size:16px' : ''">
      {{ cardTitle }}
    </h5>
  </q-chip>
</template>

<script>
import { inject } from "vue";
import MenuButton from "./menuButton.vue";

export default {
  props: {
    cardTitle: {
      type: String,
      default: "",
    },
  },
  components: {
    MenuButton,
  },

  setup() {
    const store = inject("store");
    const log = () => {
      console.log("clicked");
    };

    const onClickHomeBtn = () => {
      store.doctor.state.searchText.value = "";
      store.doctor.state.isFiltered.value = false;
      store.components.state.searchBoxClicked = false;
    };
    return {
      store,
      log,
      onClickHomeBtn,
    };
  },
};
</script>

<style></style>
