<template>
  <q-dialog v-model="confirm" persistent>
    <q-card class="q-pa-md q-px-lg" :style="$q.screen.lt.sm ? 'min-width: 90%' : 'min-width:400px'">
      <div class="row justify-end">
        <q-chip
          @click="confirm = false"
          clickable
          square
          color="grey-4"
          text-color="red"
          size="sm"
          rounded
        >X</q-chip>
      </div>

      <q-card-section class="text-center">
        Jumlah Fisik
        <br />
        <strong>{{ selected }}</strong>
        <q-card flat class="q-my-sm row bg-primary q-py-md q-px-sm justify-center items-center">
          <span class="text-h3 text-weight-bold text-secondary">{{ jumlah }}</span>
          <div>
            <q-badge text-color="grey-9" class="text-h5">{{ satuan }}</q-badge>
          </div>
        </q-card>
        <div>Expire date : {{ expireDate }}</div>
      </q-card-section>
      <q-card-action class="row justify-center q-mt-md">
        <q-btn
          push
          @click="onConfirm"
          :color="isSuccess ? 'secondary' : 'red'"
          class="q-py-md"
          :label="isSuccess ? 'Ya sudah benar' : 'Coba Lagi'"
        ></q-btn>
      </q-card-action>
    </q-card>
  </q-dialog>

  <q-card
    flat
    class="bg-grey-4"
    :class="[$q.screen.gt.xs ? 'fixed-center rounded-borders' : '']"
    :style="$q.screen.gt.xs ? 'width: 300px; min-width: 60%' : ''"
  >
    <q-banner class="q-pa-md bg-secondary text-white text-weight-bold row justify-between">
      <div class="row justify-between">
        <q-chip
          square
          color="secondary"
          text-color="grey-5"
          icon="store"
        >Aplikasi Stok Opname Farmasi</q-chip>
        <div>
          <q-badge
            color="green-10"
            text-color="green-4"
            size="xs"
            class="text-weight-thin q-py-xs"
          >V.1.0</q-badge>
        </div>
      </div>
    </q-banner>
    <div class="row justify-between q-my-sm q-px-md text-body2 text-grey-8">
      <div>Petugas: {{ petugas }}</div>
      <div>
        Depo :
        <q-badge color="secondary" text-color="black">
          <span class="text-primary text-caption text-bold q-ml-xs">{{ depo?.nm_bangsal }}</span>
        </q-badge>
      </div>
    </div>
    <div class="q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="rounded-borders">
          <v-select
            ref="vselectRef"
            class="full-width style-chooser"
            v-model="selected"
            :options="options"
            :reduce="(option) => option.nama_brng"
            label="nama_brng"
            value="tes"
            @close="onClose"
            @option:selected="onSelect"
            placeholder="Ketik untuk Mencari Obat"
            searchable
            autocomplete
          >
            <template v-slot:no-options="{ search }">
              <em>{{ search }}</em> tidak ditemukan.
            </template>
          </v-select>
        </div>
        <q-input
          ref="realRef"
          :disable="!selected"
          standout="bg-secondary"
          v-model="jumlah"
          label="Jumlah Real"
          placeholder="Masukan Jumlah Sesuai Satuan &#x279D;"
          type="number"
          lazy-rules
          :rules="[(val) => val !== null || 'Jumlah masih kosong']"
        >
          <template #append>
            <q-chip
              v-if="satuan"
              square
              color="grey-1"
              class="text-h5 no-shadow text-secondary text-weight-bold q-px-sm"
            >
              {{ satuan }}
              <q-badge floating class="text-accent">satuan</q-badge>
            </q-chip>
          </template>
        </q-input>

        <q-input
          stack-label
          filled
          v-model="expire"
          label=" Expire Date"
          type="date"
          :disable="!jumlah"
        >
          <!-- :rules="['date']" -->
          <!-- <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                <q-date v-model="expire">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>-->
        </q-input>
        <div class="row justify-between">
          <q-btn @click="chooseDepo" flat no-caps label="Ganti depo" text-color="grey-7" />
          <q-btn
            icon="save"
            label="Simpan"
            type="submit"
            color="primary"
            text-color="secondary"
            class="q-pa-md"
            :disable="!selected || !jumlah"
          />
        </div>
      </q-form>
    </div>
    <small class="text-grey-5 text-weight-thin q-ml-md">&COPY;niemubarok</small>
  </q-card>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeMount, computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { date } from "quasar";

const $q = useQuasar();
const store = inject("store");
const router = useRouter();
const options = ref("");

const selected = ref(null);
const vselectRef = ref(null);
const jumlah = ref(null);
const realRef = ref(null);
const confirm = ref(false);
const satuan = ref("");
const kdBarang = ref("");
const petugas = localStorage.getItem("petugas");
const depo = JSON.parse(localStorage.getItem("depo"));
const kdBangsal = depo?.kd_bangsal;
const hargaBeli = ref(0);
// const expire = date.formatDate(Date.now(), "YYYY-MM-DD");
// const expire = ref(date.formatDate(Date.now(), "YYYY-MM-DD"));
const expire = ref('')
const expireDate = computed(() => (date.formatDate(expire.value, "DD-MM-YYYY")))
const isSuccess = ref(true);

const chooseDepo = () => {
  router.push("/depo");
  localStorage.removeItem("petugas");
  localStorage.removeItem("depo");
  localStorage.removeItem("obat");
};

const onClose = () => {
  realRef.value.focus();
};

const onSubmit = () => {
  confirm.value = true;
};

const onSelect = (val) => {
  satuan.value = val.satuan;
  kdBarang.value = val.kode_brng;
  hargaBeli.value = val.h_beli;
};

const onConfirm = async () => {
  const dataToStore = {
    kode_brng: kdBarang.value,
    petugas: petugas,
    kd_bangsal: kdBangsal,
    h_beli: hargaBeli.value,
    real: Number(jumlah.value),
    expire: expire.value,
  };
  const storeOpname = await store.opname.storeOpname(dataToStore);
  if (storeOpname?.data.message === "success") {
    //   show notification if success
    $q.notify({
      caption: `${selected.value} Berhasil disimpan`,
      icon: "check",
      color: "secondary",
      position: "bottom",
    });
    selected.value = null;
    jumlah.value = null;
    confirm.value = false;
    isSuccess.value = true;
    satuan.value = ""
    expire.value = ""
  } else {
    $q.notify({
      caption: `${selected.value} Gagal disimpan`,
      icon: "check",
      color: "red",
      position: "bottom",
    });
    isSuccess.value = false;
  }
};

onBeforeMount(() => {
  if (!petugas || !depo) {
    router.push("/depo");
  }
});

onMounted(async () => {
  const obatFromLS = localStorage.getItem("obat");
  if (obatFromLS) {
    options.value = JSON.parse(obatFromLS);
  } else {
    const obat = await store.opname.getObat();
    localStorage.setItem("obat", JSON.stringify(obat.data.data));
    options.value = obat.data.data;
  }
});
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 4;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

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
