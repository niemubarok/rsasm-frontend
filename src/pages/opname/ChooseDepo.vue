<template>
  <q-card
    flat
    class="rounded-borders bg-grey-4"
    :class="[$q.screen.gt.xs ? 'fixed-center' : 'q-ma-md']"
    :style="$q.screen.gt.xs ? 'width: 300px; min-width: 50%' : ''"
  >
    <q-banner
      class="q-pa-md bg-secondary text-white text-weight-bold"
    >Aplikasi Stok Opname Farmasi v.1</q-banner>
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
          <!-- <q-select
            behavior="menu"
            standout="bg-primary text-secondary"
            v-model="depo"
            :options="options.nm_bangsal"
            label="Pilih Depo"
            error-message="Pilih Depo dulu"
            :rules="[(val) => val !== null || 'Pilih Depo Dulu ya']"
          />-->
          <!-- :error="depo == ''" -->

          <div class="rounded-borders">
            <v-select
              ref="vselectRef"
              class="full-width style-chooser"
              v-model="depo"
              :options="options"
              label="nm_bangsal"
              @option:selected="onSelect"
              placeholder="Ketik untuk Mencari Depo"
              searchable
              autocomplete
            >
              <!-- :reduce="(option) => option.nm_bangsal" -->
              <template v-slot:no-options="{ search }">
                <em>{{ search }}</em> tidak ditemukan.
              </template>
            </v-select>
          </div>
        </div>
        <div class="row justify-end">
          <q-btn
            :loading="loading"
            label="Mulai SO"
            type="submit"
            color="primary"
            text-color="secondary"
          >
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
          </q-btn>
        </div>
        <q-chip
          v-if="error"
          color="red-1"
          square
          class="text-red q-ma-md"
        >Gagal masuk, pastikan internetnya lancar</q-chip>
      </q-form>
    </div>
  </q-card>
  <!-- <q-ajax-bar ref="loading" position="bottom" color="primary" size="10px" /> -->
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
import { useRouter } from "vue-router";

const store = inject("store");

const petugas = ref("");
const depo = ref(null);
const kodeDepo = ref("")
const router = useRouter();
// const options = store.opname.depo;
const options = ref("")
const loading = ref(false)
const error = ref(false)
// const options = ['paracetamol', 'ranitidin', "dll", "valisanbe", "ABBOCATH", "VENFLON 24","CATGUT CHROMIC 0 TEPER"]
const onSubmit = async () => {
  loading.value = true

  if (depo.value) {
    const obat = await store.opname.getObat();
    setTimeout(() => {
      if (obat.status == 200) {
        localStorage.setItem("obat", JSON.stringify(obat.data.data));
        localStorage.setItem("depo", JSON.stringify(depo.value));
        localStorage.setItem("petugas", petugas.value);
        loading.value = false
        router.push({ name: "so" });

      } else {
        error.value = true
        setTimeout(() => {
          error.value = false

        }, 1000);
      }
    }, 1000);
  }
};
const onSelect = (val) => {
  kodeDepo.value = val.kd_bangsal;
};


onMounted(async () => {
  const getDepo = await store.opname.getDepo()
  options.value = getDepo.data.data

  console.log(depo.value);
  // loading.value.start()
})

</script>

<style>
.style-chooser .vs__search::placeholder {
  height: 150px;
  color: #6d6b6bbd;
}

.style-chooser .vs__dropdown-toggle {
  height: 50px;
}
.style-chooser .vs__dropdown-menu {
  background: #f9fff8;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
  height: 200px;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
</style>
