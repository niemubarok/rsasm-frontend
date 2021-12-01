/* eslint-disable vue/require-prop-types */ /* eslint-disable
vue/require-prop-types */
<template>
  <q-card
    class="my-card q-ma-sm q-pt-xl"
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
    :class="disable(time.start) ? 'bg-grey-6 no-border' : ''"
  >
    <!-- <q-card-section horizontal>
      <q-card-section style="margin-left: 10%; margin-top: -10%"> -->
        <!-- <div class="row "> -->
        <!-- <q-avatar size="80px" class="shadow-4">
          <img :src="pictureUrl" />
        </q-avatar> -->
        <!-- <q-space /> -->
        <!-- align="middle" -->

        <!-- </div> -->
      <!-- </q-card-section> -->
    <!-- </q-card-section> -->
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
      <strong class="text-grey-9"> {{ jamMulai }} - {{ jamSelesai }} </strong>
      <q-space />
      <q-btn
        v-if="!$route.params.id"
        :to="'/registration/' + id"
        class="text-capitalize"
        style="width: 100px"
        push
        rounded
        text-color="primary"
        :color="disable(time.start) ? 'accent' : 'secondary'"
        :label="disable(time.start) ? 'Tutup' : 'Daftar'"
        @click="daftar"
        :disable="disable(time.start)"
      />
      <!-- {{ disable(time.start) }} -->

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
      default: "~assets/img/dokter_placeholder.jpg",
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
  setup(props) {
    const store = inject("store");
    const daftar = () => {
      return [
        (store.doctor.state.searchText.value = ""),
        (store.components.searchBoxClicked = false),
      ];
    };

    const jamMulai = props.time.start.slice(0, -3);
    const jamSelesai = props.time.end.slice(0, -3);

    const disable = (time) => {
      const currentDate = new Date().getDate();
      const selectedDate = new Date(
        store.doctor.state.searchDate.value
      ).getDate();
      const currentHour = new Date().getHours();
      const jadwalPraktek = time.split(":")[0];
      // if()
      return currentHour >= jadwalPraktek && currentDate == selectedDate;
    };
    return {
      daftar,
      disable,
      store,
      jamMulai,
      jamSelesai,
    };
  },
};
</script>
