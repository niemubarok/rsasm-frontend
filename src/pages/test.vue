<template>
  <div v-for="detail in dokter" :key="detail.kd_dokter">
    {{ detail.nm_dokter}}
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const dokter = ref([]);
    onMounted(() => {
      axios
        .post("http://127.0.0.1:3333/api/dokter", {
          data: {
            hari: "kamis",
          },
        })
        .then((res) => {
          return Object.values(res.data.data)
          .forEach(each=>{
              dokter.value.push(each)
          })
        });
    });
    return {
      dokter,
    };
  },
};
</script>

<style></style>
