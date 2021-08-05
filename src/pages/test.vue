<template>
  <div v-for="detail in store.doctor.state.detail.value" :key="detail.id">
    {{ detail.nama }}
  </div>

  <!-- {{ store.doctor.state.detail.value }} -->
</template>

<script>
import axios from "axios";
import { ref, onMounted, inject } from "vue";
import { date } from "quasar";
// import { getDataDokter } from "../store/doctor/index.js";

export default {
  setup() {
    const dokter = ref([]);
    const store = inject("store");
    const hariKeTgl = () => {
      const hari = "senin";
      const date = new Date(Date.now());
      const nextDay = new Date(date.setDate(date.getDate() + 1));
      console.log(nextDay.getDay());
      // console.log(new Date(Date.now() + 1));
      // console.log(date.formatDate(new Date(Date.now()) + 1, "DD-MM-YYYY"));
    };
    onMounted(() => {
      // console.log(new Date(store.doctor.state.searchDate.value).getDay());

      // store.doctor.getDataDokter
      store.doctor.state.getDataDokter();
      // console.log(store.doctor.state.detail);
      // hariKeTgl();
      // console.log(dokter.value);
      // axios
      //   .post("http://127.0.0.1:3333/api/dokter", {
      //     data: {
      //       hari: "selasa",
      //     },
      //   })
      //   .then((res) => {
      //     return Object.values(res.data.data).forEach((each) => {
      //       dokter.value.push(each);
      //     });
      //   });
    });
    return {
      dokter,
      store,
    };
  },
};
</script>

<style></style>
