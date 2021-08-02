<template>
  <!-- <registration class="q-px-md" :class="$q.platform.is.mobile ? 'q-ml-xs': 'q-ml-lg q-mt-xs q-pt-lg '"/> -->
  <!-- <h2>tes</h2> -->

  <q-card
    flat
    class="bg-grey-3 q-py-sm q-mr-sm"
    :style="!$q.platform.is.mobile ? 'border-radius:30px;' : ''"
  >
    <q-img
      src="~assets/img/forms-amico.png"
      :ratio="$q.platform.is.mobile ? 4 / 3 : 16 / 9"
      class="absolute-top"
      style="opacity: 0.1"
    >
      <!-- :style="$q.platform.is.mobile ? 'opacity:0.1':'opacity:0.1'" -->
    </q-img>
    <div>
      <!-- <navigation card-title="Form Pendaftaran Online" /> -->

      <q-btn
        flat
        rounded
        icon="west"
        @click="
          [
            (store.doctor.searchText.value = ''),
            (store.doctor.isFiltered.value = false),
            (store.components.state.searchBoxClicked = false),
            $router.back(),
          ]
        "
      />

      <!-- :floating="$q.screen.gt.md" -->
      <q-badge class="transparent q-ml-md">
        <!-- align="right" -->
        <stepper
          :style="$q.platform.is.mobile ? 'font-size:10px' : ''"
          :done="$route.params.id"
          :edit="store.components.state.formEditing"
          :confirm="store.components.state.isConfirm"
        />
      </q-badge>
    </div>
  </q-card>
</template>

<script>
// import Registration from '/src/components/form/Registration.vue'
import Stepper from "/src/components/form/Stepper.vue";
// import Navigation from "/src/components/button/Navigation.vue";
import { inject } from "vue";

export default {
  components: {
    Stepper,
    // Navigation,
  },
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
};
</script>

<style></style>
