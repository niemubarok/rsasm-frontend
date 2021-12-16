<template>
  <q-dialog v-model="confirm">
    <q-card class="q-pa-md q-px-lg" :style="$q.screen.lt.sm ? 'min-width: 90%' : ''">
      <q-card-section class="text-center">
        Jumlah Fisik<br />
        <strong>{{ selected }}</strong>
        <q-card
          flat
          class="q-my-sm row bg-primary q-py-md q-px-sm justify-center items-center"
        >
          <span class="text-h3 text-weight-bold text-secondary">
            {{ jumlah }}
          </span>
          <div>
            <q-badge text-color="grey-9" class="text-h5">
              {{ satuan }}
            </q-badge>
          </div>
        </q-card>
      </q-card-section>
      <q-card-action class="row justify-center q-mt-md">
        <q-btn push @click="onConfirm" color="secondary" class="q-py-md"
          >Ya sudah benar</q-btn
        >
      </q-card-action>
    </q-card>
  </q-dialog>

  <q-card
    flat
    class="rounded-borders bg-grey-4"
    :class="[$q.screen.gt.xs ? 'fixed-center' : '']"
    :style="$q.screen.gt.xs ? 'width: 300px; min-width: 60%' : ''"
  >
    <q-banner class="q-pa-md bg-secondary text-white text-weight-bold"
      >Aplikasi Stok Opname Farmasi v.1</q-banner
    >
    <div class="row justify-between q-my-sm q-px-md text-body2 text-grey-8">
      <div>
        Petugas:
        <q-badge color="grey-5" text-color="black" class="q-py-xs q-px-md">
          {{ petugas }}</q-badge
        >
      </div>
      <div>
        Depo :
        <q-badge color="secondary" text-color="black">
          <span class="text-primary text-caption text-bold q-ml-xs">
            {{ depo.label }}</span
          ></q-badge
        >
      </div>
    </div>
    <div class="q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="rounded-borders">
          <span> Pilih Obat : </span>

          <v-select
            class="full-width"
            v-model="selected"
            :options="options"
            :reduce="(option) => option.nama_brng"
            label="nama_brng"
            value="tes"
            @close="onClose"
            @option:selected="onSelect"
          ></v-select>
        </div>

        <q-input
          ref="real"
          filled
          v-model="jumlah"
          label="Jumlah Real"
          hint="Masukan Jumlah Sesuai Satuan"
          type="number"
          lazy-rules
          :suffix="satuan"
          :rules="[(val) => val !== null || 'Jumlah masih kosong']"
        />
        <div class="row justify-between">
          <q-btn flat="" label="pilih depo" text-color="grey-5" />
          <q-btn
            icon="save"
            label="Simpan"
            type="submit"
            color="primary"
            text-color="secondary"
          />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const store = inject("store");
const options = ref("");

const selected = ref(null);
const jumlah = ref(null);
const real = ref(null);
const confirm = ref(false);
const satuan = ref("");
const petugas = localStorage.getItem("petugas");
const depo = JSON.parse(localStorage.getItem("depo"));

const onClose = () => {
  real.value.focus();
};

const onSubmit = () => {
  confirm.value = true;
};

const onSelect = (val) => {
  satuan.value = val.satuan;
};

const onConfirm = () => {
  selected.value = null;
  jumlah.value = null;
  confirm.value = false;

  //   show notification if success
  $q.notify({
    caption: `${selected.value} Berhasil disimpan`,
    icon: "check",
    color: "secondary",
  });
};

onMounted(async () => {
  const obat = await store.opname.getObat();
  const filterSatuan = obat.data.data.fil;
  options.value = obat.data.data;
  // console.log(obat.data.data);
});
</script>
