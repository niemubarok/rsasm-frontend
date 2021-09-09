/* eslint-disable vue/require-prop-types */ /* eslint-disable
vue/require-prop-types */
<template>
  <q-card
    class="my-card q-ma-sm"
    style="
      border-left: 1px solid #527c51;
      border-right: 3px solid #527c51;
      border-radius: 30px;
      max-height: 200px;
      margin-top: 35px;
      width: 80vw;
      background-image: linear-gradient(#f4c360, #e8a216);
    "
    :style="$q.screen.gt.xs ? 'width:300px;' : ''"
  >
    <q-card-section
      horizontal
    >
      <q-card-section style="margin-left: 10%; margin-top: -10%">
        <!-- <div class="row "> -->
        <q-avatar size="80px" class="shadow-4">
          <img :src="pictureUrl" />
        </q-avatar>
        <!-- <q-space /> -->
        <!-- align="middle" -->

        <!-- </div> -->
      </q-card-section>
    </q-card-section>
    <q-card-section style="margin-top: -25px">
      <div
        class="text-subtitle1 text-center"
        style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap"
      >
        <span
          class="text-accent text-light"
          style="text-overflow: ellipsis; overflow: hidden"
        >
          {{ doctor }}
        </span>
      </div>
      <div class="column items-center">
        <!-- <div class="col items-center"> -->
        <q-chip
          style="text-align: center"
          :style="$q.screen.lt.sm ? 'margin-right:-10%' : ''"
          class="bg-grey-9 text-center text-light q-px-sm q-py-sm q-mt-sm"
          rounded
          :label="'SPESIALIS ' + specialist"
          text-color="primary"
          size="sm"
        />
        <!-- </div> -->
      </div>
    </q-card-section>
    <q-separator style="margin-top: -15px" />

    <q-card-actions>
      <q-btn class="text-grey-9" flat round icon="schedule" />
      <strong class="text-grey-9"> {{ time.start }} - {{ time.end }} </strong>
      <q-space />
      <q-btn
        v-if="!$route.params.id"
        :to="'/registration/' + id"
        class="text-capitalize"
        push
        rounded
        text-color="primary"
        color="secondary"
        label="Daftar"
        @click="daftar"
      />
      <!-- Daftar
        </q-btn> -->
    </q-card-actions>
  </q-card>
</template>

<script>
import { inject } from "vue";
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: {
    id: {
      default: null,
    },
    pictureUrl: {
      default: "img/dokter_placeholder.jpg",
    },
    specialist: {
      default: null,
    },
    doctor: {
      default: null,
    },
    time: {
      default: null,
    },
  },
  setup() {
    const store = inject("store");
    const daftar = () => {
      console.log("button clicked");
      return [
        (store.doctor.state.searchText.value = ""),
        (store.components.searchBoxClicked = false),
      ];
    };
    return {
      daftar,
    };
  },
};
</script>
