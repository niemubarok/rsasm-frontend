/* eslint-disable vue/no-v-html */
<template>
  <q-card flat class="transparent card-search">
    <div :style="!$q.screen.gt.sm ? '' : 'margin-top:10px;'">
      <navigation card-title="Cari Jadwal Dokter" />
      <q-space v-if="$q.screen.lt.sm" />
      <q-chip
        v-model:selected="store.components.state.todaySelected"
        style="z-index: 1"
        class="shadow-4"
        :class="isToday ? 'bg-secondary text-white' : 'bg-grey-7 text-grey-2'"
        dark
        @click="todayBtn()"
        >Hari Ini</q-chip
      >
      <q-btn
        style="z-index: 2"
        icon="event"
        rounded
        :label="chooseDateSelected ? kalenderLabel() : 'Pilih Tanggal'"
        :class="
          chooseDateSelected && !store.components.state.todaySelected
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
    </div>
    <div class="transparent">
      <q-chip dense :class="{ 'q-ml-xl': !$q.platform.is.mobile }"
        >Spesialis tersedia :</q-chip
      >
    </div>
    <div class="transparent" :class="{ 'q-ml-xl': !$q.platform.is.mobile }">
      <chip-available-specialist />
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
      v-if="Object.keys(store.doctor.state.filterDokter()).length == 0"
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
      style="height: 80vh; z-index: 1"
    >
      Dokter yang anda cari tidak tersedia,<br />
      silahkan pilih tanggal lainnya
    </q-card>

    <carousel-doctor
      :scroll-area-style="style"
      style="height: 90vh; z-index: 1"
    />
  </q-card>
</template>

<script>
import CarouselDoctor from "./CarouselDoctor.vue";
import { ref, inject, onMounted, onBeforeUnmount } from "vue";
import { date } from "quasar";
import Navigation from "./button/Navigation.vue";
import ChipAvailableSpecialist from "./chipAvailableSpecialist.vue";

export default {
  components: { CarouselDoctor, Navigation, ChipAvailableSpecialist },
  setup() {
    const style = () => {
      // if (store.components.state.searchBoxClicked) {
      return "height:100vh";
      // }
    };

    const store = inject("store");
    const chooseDateSelected = ref(false);

    const todayBtn = () => {
      isToday.value = true;
      store.doctor.state.searchDate.value = Date.now();
      store.doctor.state.getDataDokter();
    };
    const timeStamp = date.formatDate(Date.now(), "YYYY/MM/DD");
    const datePicker = ref(timeStamp);
    const proxyDate = ref(Date.now());
    const isToday = ref(false);

    const kalenderLabel = () => {
      return date.formatDate(
        store.doctor.state.searchDate.value,
        "dddd, DD-MM-YYYY"
      );
    };

    const updateProxy = () => {
      proxyDate.value = datePicker.value;
      // chooseDateSelected.value = true;
    };
    const optionFn = (proxyDate) => {
      const aWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      return proxyDate >= timeStamp && new Date(proxyDate) <= aWeek;
    };

    const save = () => {
      chooseDateSelected.value = true;
      store.components.state.todaySelected = false;
      store.doctor.state.searchDate.value = proxyDate.value;
      store.doctor.state.getDataDokter();
      store.patient.detail.tgl_periksa = date.formatDate(
        new Date(proxyDate.value),
        "YYYY-MM-DD"
      );
      if (
        new Date(proxyDate.value).getDate() == new Date(Date.now()).getDate()
      ) {
        isToday.value = true;
      } else {
        isToday.value = false;
      }
    };

    const onClear = () => {
      store.doctor.state.searchSpecialist.value = "";
    };

    onMounted(() => {
      store.doctor.state.searchDate.value = Date.now();
      isToday.value = true;
      store.doctor.state.getDataDokter();
      // console.log(store.doctor.state.clinicLists);
      // store.doctor.state.getPoli();
    });
    // onBeforeUnmount(() => {
    //   const selectedDoctor = store.doctor.state.detail.value.find(
    //     (dokter) => dokter.id == store.doctor.state.doctorId()
    //   );
    //   store.doctor.state.selected = selectedDoctor;
    // });

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
      kalenderLabel,
      isToday,
      onClear,
    };
  },
};
</script>

<style>
.card-search {
  background-image: url("~assets/img/bg-search-dokter.png");
}
</style>
