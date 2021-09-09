<template>
  <transition
    appear
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOut"
  >
    <div v-if="$route.params.id" v-show="showNext" class="col-md-8 q-ml-sm">
      <q-card
        class="transparent q-mt-sm q-pa-sm no-shadow flat"
        style="border-radius: 30px; border-left: 1px solid grey"
      >
        <!-- :style="
          $q.screen.gt.md 
            ? 'width:500px;margin-left:100px;'
            : 'width:90vw;'
        " -->
        <!-- chip -->
        <div style="margin-bottom: -15px">
          <q-chip color="secondary" text-color="white">
            <q-avatar color="primary" text-color="accent"
              ><strong>2</strong></q-avatar
            >
            Isi Data Pasien
          </q-chip>
        </div>

        <!-- BASIC DATA -->
        <div class="row no-wrap items-center">
          <q-card
            flat
            class="transparent bg-grey-3 full-width q-pa-sm q-pb-md q-mt-md"
          >
            <q-form @submit="onClickBtnCheckPatientData">
              <div>
                <q-expansion-item
                  v-model="expanded"
                  :style="!expanded ? 'margin-top: -10px' : 'margin-top: -50px'"
                  :icon="!expanded ? 'person' : ''"
                  :label="!expanded ? 'Detail' : ''"
                  expand-icon-toggle
                >
                  <!-- NIK -->
                  <q-input
                    dense
                    ref="inputNik"
                    v-model="store.patient.detail.nik"
                    mask="################"
                    :rules="formRules.nik"
                    clearable
                    class="q-mt-sm"
                    label="NIK / No. KTP"
                    flat
                  />

                  <!-- NAMA LENGKAP  -->
                  <q-input
                    dense
                    v-model="store.patient.detail.name"
                    clearable
                    class="q-mt-sm"
                    flat
                    label="Nama Lengkap Pasien"
                    hint="Pastikan Sesuai dengan KTP"
                    :rules="formRules.nama"
                  />

                  <!-- TANGGAL LAHIR -->
                  <q-input
                    dense
                    class="q-mt-sm"
                    v-model="store.patient.detail.birthDate"
                    :rules="formRules.tglLahir"
                    clearable
                    :hint="
                      $q.platform.is.desktop
                        ? 'Tanggal Lahir (contoh: 20/09/1992)'
                        : ''
                    "
                    mask="##/##/####"
                    :label="!$q.platform.is.desktop ? 'Tanggal Lahir' : ''"
                    type="date"
                  >
                    <!-- type="date" -->
                  </q-input>

                  <!-- WHATSAPP -->
                  <q-input
                    dense
                    v-model="store.patient.detail.phone"
                    clearable
                    mask="####-####-####"
                    unmasked-value
                    class="q-mt-sm"
                    flat
                    label="No. Whatsapp"
                    :rules="formRules.HP"
                    hint="Detail pendaftaran dikirimkan ke no ini via whatsapp"
                  />

                  <!-- JENIS BAYAR -->

                  <div class="q-mt-lg">
                    <q-chip class="text-subtitle">Jenis Bayar</q-chip>
                    <div>
                      <q-radio
                        v-model="store.patient.detail.jnsBayar"
                        label="BPJS"
                        val="BPJS"
                      >
                      </q-radio>
                      <q-radio
                        v-model="store.patient.detail.jnsBayar"
                        label="UMUM"
                        val="UMUM"
                        color="green"
                      >
                      </q-radio>
                      <q-radio
                        v-model="store.patient.detail.jnsBayar"
                        label="ASURANSI"
                        val="ASURANSI"
                        color="blue"
                      >
                      </q-radio>
                    </div>

                    <!-- JIKA PASIEN PILIH BPJS, MUNCULKAN KOLOM NOMOR KARTU BPJS -->
                    <div>
                      <q-input
                        dense
                        v-if="store.patient.detail.jnsBayar == 'BPJS'"
                        v-model="store.patient.detail.noBPJS"
                        label="Nomor Kartu BPJS"
                        mask="######################"
                        :lazy-rules="formRules.jnsBayar"
                      ></q-input>
                    </div>
                  </div>
                </q-expansion-item>
                <!-- TOMBOL CEK APAKAH PASIEN SUDAH PERNAH BEROBAT ATAU BELUM -->
                <q-btn
                  v-morph:btn:group:300.resize="morphBtnCheck"
                  class="q-mt-md bg-primary"
                  rounded
                  :class="btnCheckClass"
                  label="Selanjutnya"
                  :style="btnCheckStyle"
                  type="submit"
                  :disable="
                    store.patient.detail.nik == '' ||
                    store.patient.detail.name == ''
                  "
                >
                  <!-- @click="onClickBtnCheckPatientData" -->
                  <q-spinner-cube
                    v-if="isSearching"
                    color="secondary"
                    size="md"
                    class="q-ml-sm"
                  />
                </q-btn>

                <!-- MORPH KETIKA PASIEN ADALAH PASIEN BARU -->
                <q-card
                  ref="cardFormPasienBaru"
                  style="boder-radius: 30px"
                  class="transparent"
                  flat
                  v-morph:cardPasienBaru:group:500.resize="morphBtnCheck"
                >
                  <q-card-section>
                    <q-badge
                      class="bg-red-3 text-grey-8"
                      style="margin-left: -20px"
                    >
                      Hmm.. Sepertinya sobat Sibroh belum terdaftar di sistem
                      kami
                    </q-badge>
                  </q-card-section>
                  <div>
                    <q-chip class="bg-primary"
                      >Yuk! Lengkapi Data Pasien dulu (hanya sekali)</q-chip
                    >
                  </div>
                  <q-card-section class="bg-grey-3">
                    <new-patient-form />
                  </q-card-section>
                </q-card>

                <!-- MORPH KETIKA PASIEN ADALAH PASIEN LAMA -->
                <q-card v-morph:cardPasienLama:group:500.resize="morphBtnCheck">
                  <q-card-section>
                    Terimakasih selalu mempercayakan kesehatan keluarga anda di
                    RS Ali Sibroh Malisi
                  </q-card-section>
                </q-card>
              </div>
            </q-form>
          </q-card>
        </div>

        <!-- FORM PASIEN BARU -->
        <!-- <new-patient-form /> -->
      </q-card>

      <dialog-confirm />
      <!-- {{store.patient.detail.tgl_periksa}}
      {{store.doctor.state.searchDate.value}} -->
    </div>
  </transition>
</template>

<script>
import { ref, inject, onMounted } from "vue";
// import OldPatientForm from "../form/OldPatientForm.vue";
import NewPatientForm from "../form/NewPatientForm.vue";
import DialogConfirm from "../form/DialogConfirm.vue";
import axios from "axios";
import { date } from "quasar";

export default {
  // name: 'ComponentName',
  components: {
    // OldPatientForm,
    NewPatientForm,
    DialogConfirm,
  },
  setup() {
    const morphBtnCheck = ref("btn");
    const expanded = ref(true);

    const showCard = ref(false);
    setTimeout(() => {
      showCard.value = true;
    }, 100);
    const showNext = ref(false);
    setTimeout(() => {
      showNext.value = true;
    }, 500);
    const test = () => {
      console.log("test");
    };

    const isSearching = ref(false);
    const btnCheckLabel = ref("Cek Data Pasien");
    const btnCheckClass = ref("");
    const btnCheckStyle = ref("");
    const store = inject("store");
    const formRules = {
      nik: [
        (val) => !!val || "Mohon masukan NIK",
        (val) => val.length >= 16 || "Angka yang anda masukan kurang",
      ],
      nama: [(val) => !!val || "Masukkan Nama Lengkap"],
      tglLahir: [
        (val) => val !== "" || "Tanggal Lahir Wajib Diisi!",
        (val) => {
          const givenYear = new Date(val).getFullYear();
          const currentYear = new Date(Date.now()).getFullYear();
          return (
            givenYear <= currentYear ||
            "tanggal lahir salah (lebih dari tahun " + currentYear + ")"
          );
        },
      ],
      HP: [(val) => val.length > 6 || "Masukan nomor Whatsapp yang valid"],
      jnsBayar: [
        (val) =>
          val.length > 3 || "Sobat memilih pakai bpjs, mohon diisi nomornya",
      ],
    };

    const disableBtnCheckPatientData = () => {
      return (
        store.patient.detail.nik == "" ||
        store.patient.detail.name == "" ||
        store.patient.detail.birthDate == ""
      );
    };

    const onClickBtnCheckPatientData = () => {
      // console.log(store.patient.detail.birthDate);

      if (
        store.patient.detail.nik != "" &&
        store.patient.detail.name != "" &&
        store.patient.detail.birthDate != ""
      ) {
        isSearching.value = true;

        axios
          .post(
            "http://192.168.7.250:3333/api/pasien",
            {
              noKtp: store.patient.detail.nik,
              namaPasien: store.patient.detail.name,
              tglLahir: store.patient.detail.birthDate,
            },
            {
              headers: { "Access-Control-Allow-Origin": "*" },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
              if (!res.data.isPasienBaru) {
                isSearching.value = false;
                store.patient.detail.name = res.data.data.nama_pasien;
                store.patient.detail.isPasienBaru = false
                store.components.state.dialogConfirm = true;
              } else {
                isSearching.value = false;
                morphBtnCheck.value = "cardPasienBaru";
                expanded.value = false;
              }
            } else {
              console.log("error");
            }
          });
      }
    };

    const onSubmit = () => {
      store.components.state.isConfirm = true;
      store.components.state.dialogConfirm = true;
    };

    onMounted(() => {
      store.patient.detail.tgl_periksa = date.formatDate(
        new Date(store.doctor.state.searchDate.value),
        "YYYY-MM-DD"
      );
    });

    // const showFormPasienLama = () => {
    //   store.components.state.formEditing = true;
    //   store.components.state.isOldPatient = true;
    // };

    // const hideFormPasienLama = () => {
    //   store.components.state.formEditing = false;
    //   store.components.state.isOldPatient = false;
    // };

    // const showFormPasienBaru = () => {
    //   store.components.state.isNewPatient = true;
    //   store.components.state.formEditing = true;
    // };

    // const hideFormPasienBaru = () => {
    //   store.components.state.isNewPatient = false;
    //   store.components.state.formEditing = false;
    // };

    // const store = inject("store");
    return {
      store,
      showCard,
      expanded,
      showNext,
      formRules,
      isSearching,
      btnCheckClass,
      btnCheckLabel,
      btnCheckStyle,
      morphBtnCheck,
      test,
      onSubmit,
      onClickBtnCheckPatientData,
      disableBtnCheckPatientData,
      // showFormPasienLama,
      // hideFormPasienLama,
      // showFormPasienBaru,
      // hideFormPasienBaru,
    };
  },
};
</script>
