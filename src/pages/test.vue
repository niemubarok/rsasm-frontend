<template>
  <div v-for="detail in store.doctor.state.detail.value" :key="detail.id">
    {{ detail.nama }}
  </div>
  {{ response }}
</template>

<script>
import axios from "axios";
import { ref, onMounted, inject } from "vue";
import { date } from "quasar";
// import { Base64 } from "js-base64";
import hmacSHA256 from  'crypto-js/hmac-sha256'
import hmacSha256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64'
// import { getDataDokter } from "../store/doctor/index.js";

export default {
  setup() {
    const dokter = ref([]);
    const store = inject("store");
    const hariKeTgl = () => {
      const hari = "senin";
      const date = new Date(Date.now());
      const nextDay = new Date(date.setDate(date.getDate() + 1));
    };
    const response = ref("");
    onMounted(() => {
      const consId = 13534;
      const secret = "9hC375EE0D";
      const ts = Math.round(+new Date()/ 1000)
      const salt = `${consId}&${ts}`
      const signature = hmacSha256(salt, secret);
      const encodedSignature = Base64.stringify(signature);
      console.log("ts:"+ ts);
      console.log(encodedSignature);
      
      // axios
      //   .post(
      //     "https://new-api.bpjs-kesehatan.go.id:8080/new-vclaim-rest/Peserta/nik/3174096711570002/tglSEP/2021-09-07",
      //     JSON.stringify({
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         "Access-Control-Allow-Methods": "GET",
      //         "Content-Type": "application/json",
      //         'Accept': "application/json",
      //         // "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      //         "X-cons-id": "13534",
      //         "X-timestamp": Date.now(),
      //         "X-signature": signature,
      //         "Access-Control-Allow-Credentials": true,
      //         "Access-Control-Request-Headers": "Content-Type",
      //         "Access-Control-Request-Method": "GET",
      //       },
      //       crossDomain: true,
      //       // withCredentials: true,
      //     })
      //   )
      //   .then((res) => {
      //     response.value = res;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    });
    return {
      dokter,
      store,
      response,
    };
  },
};
</script>

<style></style>
