/* eslint-disable vue/no-v-html */
<template>
  <q-card flat class="transparent card-search">
    <div :style="$q.screen.gt.sm ? '' : 'margin-bottom:50px;'">
      <navigation card-title="Cari Jadwal Dokter" style="z-index: 2" />
      <q-space v-if="$q.screen.lt.sm" />
      <!-- :removable="store.doctor.searchText.value" -->
      <!-- v-model:selected="store.doctor.searchText.value" -->
      <!-- <q-chip
      clickable
      class="shadow-4"
      :class="store.doctor.searchText.value == '' ? 'bg-secondary text-white' : 'bg-grey-7 text-grey-2'"
      @click="[(store.doctor.searchText.value = ''),(store.doctor.searchDate.value = ''), (store.components.state.todaySelected = false), (chooseDateSelected = false)]"
      >Semua</q-chip
    > -->
      <!-- @remove="[(store.components.state.todaySelected = false)]" -->
      <!-- store.doctor.searchDate.value == today() -->
      <!-- :removable="store.components.state.todaySelected" -->
      <q-chip
        v-model:selected="store.components.state.todaySelected"
        style="z-index: 1"
        class="shadow-4"
        :class="
          store.doctor.searchDate.value == store.components.state.today()
            ? 'bg-secondary text-white'
            : 'bg-grey-7 text-grey-2'
        "
        dark
        @remove="[(store.doctor.searchDate.value = '')]"
        @click="todayBtn()"
        >Hari Ini</q-chip
      >
      <!-- (store.components.state.todaySelected = false), -->

      <!-- color="grey-5" -->
      <q-btn
        style="z-index: 2"
        icon="event"
        rounded
        :label="
          chooseDateSelected ? store.doctor.searchDate.value : 'Pilih Tanggal'
        "
        :class="
          chooseDateSelected & !store.components.state.todaySelected
            ? 'bg-secondary text-white'
            : 'bg-grey-7 text-grey-2'
        "
      >
        <q-popup-proxy
          transition-show="scale"
          transition-hide="scale"
          class="z-max"
          @before-show="updateProxy"
        >
          <q-date v-model="proxyDate" :options="optionFn">
            <div class="row items-center justify-end q-gutter-sm">
              <q-btn v-close-popup label="Cancel" color="primary" flat />
              <q-btn
                v-close-popup
                label="OK"
                color="primary"
                flat
                @click="save"
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-btn>
      <q-btn
        dense
        flat
        rounded
        color="grey-8"
        style="z-index: 2"
        class="q-ml-xs text-weight-light"
        label="filter klinik :"
        no-caps
      >
        <q-select
          v-model="store.doctor.searchSpecialist.value"
          :options="store.doctor.clinicLists"
          dense
          class="q-pl-sm z-max"
        >
          <!-- borderless -->
          <template #selected-item="scope">
            <!-- v-if="store.doctor.searchSpecialist.value !== ''" -->
            <q-chip
              removable
              dense
              :tabindex="store.doctor.searchSpecialist.value"
              color="white"
              text-color="secondary"
              class="q-ma-none"
              style="z-index: 2"
              @remove="scope.removeAtIndex(scope.index)"
            >
              <!-- <q-avatar
            color="secondary"
            text-color="white"
            :icon="scope.opt.icon"
          /> -->
              {{ store.doctor.searchSpecialist.value }}
            </q-chip>
          </template>
        </q-select>
      </q-btn>
      <!-- </q-badge> -->

      <!-- <q-chip
      v-model:selected="store.components.state.todaySelected"
      :removable="store.components.state.todaySelected"
      icon="filter_list"
      class="shadow-4"
      :class="
        store.components.state.todaySelected ? 'bg-secondary text-white' : 'bg-grey-7 text-grey-2'
      "
      @remove="[(store.components.state.todaySelected = false), (store.doctor.searchDate.value = '')]"
      @click="today()"
      >Filter Klinik</q-chip
    > -->
    </div>

    <div>
      <q-img
        src="~assets/img/Health-professional-team-bro.png"
        :class="$q.screen.gt.sm ? 'fixed-right' : 'fixed-top'"
        style="opacity: 0.2"
        :style="
          $q.screen.gt.sm ? 'width: 80vw;margin-bottom:-30vh' : 'width:90vw'
        "
      />
    </div>

    <q-card
      v-if="store.doctor.filterBy.any() == ''"
      flat
      tag="div"
      class="
        row
        justify-center
        text-h3 text-grey-8 text-center
        items-center
        q-ma-md
        bg-grey-3
        transparent
      "
      style="height: 60vh; z-index: 1"
    >
      Dokter yang anda cari tidak tersedia,<br />
      silahkan pilih tanggal lainnya
    </q-card>
    <carousel-doctor
      :scroll-area-style="style"
      style="height: 80vh; z-index: 1"
    />
  </q-card>
</template>

<script>
import CarouselDoctor from "./CarouselDoctor.vue";
import { ref, inject } from "vue";
import { date } from "quasar";
import Navigation from "./button/Navigation.vue";

export default {
  components: { CarouselDoctor, Navigation },
  setup() {
    const style = () => {
      // if (store.components.state.searchBoxClicked) {
      return "height:100vh";
      // }
    };

    const store = inject("store");
    const chooseDateSelected = ref(false);

    const todayBtn = () => {
      // store.components.state.todaySelected = true;
      const today = date.formatDate(Date.now(), "DD-MM-YYYY");
      store.doctor.searchDate.value = today;
      // return today
    };
    const timeStamp = date.formatDate(Date.now(), "YYYY/MM/DD");
    const datePicker = ref(timeStamp);
    const proxyDate = ref(timeStamp);

    const updateProxy = () => {
      proxyDate.value = datePicker.value;
      // chooseDateSelected.value = true;
    };
    const optionFn = (proxyDate) => {
      //  console.log(timeStamp);
      // const date = new Date()
      const aWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      return proxyDate >= timeStamp && new Date(proxyDate) <= aWeek;
    };

    const save = () => {
      chooseDateSelected.value = true;
      store.components.state.todaySelected = false;
      store.doctor.searchDate.value = date.formatDate(
        proxyDate.value,
        "DD-MM-YYYY"
      );
    };

    return {
      todayBtn,
      store,
      chooseDateSelected,
      style,
      datePicker,
      proxyDate,
      save,
      optionFn,
      updateProxy,
    };
  },
};
</script>

<style>
.card-search {
  background-image: url("~assets/img/bg-search-dokter.png");
}
</style>
