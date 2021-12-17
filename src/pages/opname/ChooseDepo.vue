<template>
  <q-card
    flat
    class="rounded-borders bg-grey-4"
    :class="[$q.screen.gt.xs ? 'fixed-center' : 'q-ma-md']"
    :style="$q.screen.gt.xs ? 'width: 300px; min-width: 50%' : ''"
  >
    <q-banner class="q-pa-md bg-secondary text-white text-weight-bold"
      >Aplikasi Stok Opname Farmasi v.1</q-banner
    >
    <div class="q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="petugas"
          label="Nama Petugas"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Masukan nama petugas dulu ya']"
        />
        <div>
          <q-select
            behavior="menu"
            standout="bg-primary text-secondary"
            v-model="depo"
            :options="options"
            label="Pilih Depo"
            error-message="Pilih Depo dulu"
            :rules="[(val) => val !== null || 'Pilih Depo Dulu ya']"
          />
          <!-- :error="depo == ''" -->
        </div>
        <div class="row justify-end">
          <q-btn label="Mulai SO" type="submit" color="primary" text-color="secondary" />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
import { useRouter } from "vue-router";

const store = inject("store");

const petugas = ref("");
const depo = ref(null);
const router = useRouter();
const options = store.opname.depo;
// const options = ['paracetamol', 'ranitidin', "dll", "valisanbe", "ABBOCATH", "VENFLON 24","CATGUT CHROMIC 0 TEPER"]
const onSubmit = () => {
  if (depo.value) {
    localStorage.setItem("depo", JSON.stringify(depo.value));
    localStorage.setItem("petugas", petugas.value);
    router.push({ name: "so" });
  }
};
const onChange = (val) => {
  console.log(val);
};
const onSelect = () => {
  console.log("select");
};
const onCLick = () => {
  console.log("click");
};
</script>
