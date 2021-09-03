<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <!-- <div
      v-show="
        store.components.state.isOldPatient ||
        store.components.state.isNewPatient
      "
      class="q-mt-sm"
    > -->
    <div class="row no-wrap items-center">
      <q-card
        flat
        style="border-radius: 30px; border-top: 1px solid grey"
        class="bg-grey-3 full-width q-pa-sm q-pb-md"
      >
        <!-- <q-icon name="forward" color="primary" size="50px"/> -->
        <div>
          <q-chip>Silahkan Lengkapi Data Pasien</q-chip>
        </div>
        <q-form @submit="onSubmit">
          <div>
            <q-input
              ref="inputNik"
              v-model="store.patient.detail.nik"
              mask="################"
              :rules="formRules.nik"
              clearable
              class="q-mt-sm"
              flat
              label="NIK / No. KTP"
            />
            <q-input
              v-model="store.patient.detail.name"
              clearable
              class="q-mt-sm"
              flat
              label="Nama Lengkap Pasien Sesuai KTP"
              :rules="formRules.nama"
            />
            <q-input
              v-model="store.patient.detail.birthDate"
              :rules="formRules.tglLahir"
              clearable
              :hint="
                $q.screen.gt.sm
                  ? 'Tanggal Lahir (contoh: 20/09/1992)'
                  : 'Tanggal Lahir'
              "
              :label="$q.platform.is.mobile ? 'Tanggal Lahir' : ''"
              type="date"
              mask="##/##/####"
            >
            </q-input>

            <!-- TOMBOL CEK APAKAH PASIEN SUDAH PERNAH BEROBAT ATAU BELUM -->
            <q-btn
              class="q-mt-md bg-primary"
              :class="btnCheckClass"
              :label="btnCheckLabel"
              @click="btnCheckPatientData"
              :style="btnCheckStyle"
              type="submit"
            >
              <q-spinner-cube
                v-if="isSearching"
                color="secondary"
                size="md"
                class="q-ml-sm"
              />
            </q-btn>

            <q-input
              v-model="store.patient.detail.phone"
              clearable
              mask="####-####-####"
              class="q-mt-sm"
              flat
              label="No. Whatsapp"
              :rules="formRules.HP"
              hint="Kami akan mengirimkan detail pendaftaran via whatsapp"
            />

            <div class="q-mt-lg">
              <span class="text-subtitle">Jenis Bayar</span>
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
            </div>
          </div>
          <div class="row flex items-end">
            <div class="col">
              <q-btn
                push
                type="submit"
                rounded
                color="primary"
                text-color="accent"
                class="q-mt-md"
                label="Konfirmasi"
                @click="onSubmit"
              />
            </div>
          </div>
        </q-form>
      </q-card>
    </div>
    <!-- </div> -->
  </transition>

  <!-- CONFIRM -->
  <dialog-confirm />
</template>

<script>
import { inject, ref } from "vue";
import DialogConfirm from "./DialogConfirm.vue";
import axios from "axios";
export default {
  components: { DialogConfirm },
  setup() {
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
      tglLahir: [(val) => val !== "" || "Tanggal Lahir Wajib Diisi!"],
      HP: [(val) => val.length > 6 || "Masukan nomor Whatsapp yang valid"],
    };

    const btnCheckPatientData = () => {
      // console.log(store.patient.detail.nik);
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
            // console.log(res.data.data);
            // console.log(res);
            if (res.status == 200) {
              if (res.data.isPasienBaru) {
                isSearching.value = false;
                btnCheckLabel.value = `Data Pasien tidak ditemukan`;
                btnCheckClass.value = "bg-red"
              }
              isSearching.value = false;
              store.patient.detail.name = res.data.data.nama_pasien;
              // btnCheckStyle.value = ""
              btnCheckClass.value = "bg-secondary text-white";
              btnCheckLabel.value = `Data ditemukan dengan No. RM:${res.data.data.no_rm}`;
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
    return {
      store,
      onSubmit,
      formRules,
      isSearching,
      btnCheckPatientData,
      btnCheckClass,
      btnCheckLabel,
      btnCheckStyle,
    };
  },
};
</script>
