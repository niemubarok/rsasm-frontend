<template>
  <!-- :ripple="false" -->
  <router-link to="/" style="text-decoration: none">
    <!-- <q-btn
      style="z-index: 2"
      flat
      rounded
      icon="home"
      color="grey-9"
      @click="
        [
          (store.doctor.searchText.value = ''),
          (store.doctor.isFiltered.value = false),
          (store.components.state.searchBoxClicked = false),
        ]
      "
    /> -->
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

export default {
  props: {
    cardTitle: {
      type: String,
      default: "",
    },
  },

  setup() {
    const store = inject("store");
    const log = () => {
      console.log("clicked");
    };

    return {
      store,
      log,
    };
  },
};
</script>

<style></style>
