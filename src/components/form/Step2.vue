<template>
  <transition
    appear
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOut"
  >
    <div class="col-md-8 q-ml-sm">
      <q-card
        v-if="$route.params.id"
        class="transparent q-mt-sm q-pa-sm no-shadow flat"
        style="border-radius: 30px"
        :style="$q.screen.gt.sm ? 'border-left: 1px solid grey' : ''"
      >
        <!-- chip -->
        <div style="margin-bottom: -15px">
          <q-chip color="secondary" text-color="white">
            <q-avatar color="primary" text-color="accent"
              ><strong>2</strong></q-avatar
            >
            Isi Data Pasien
          </q-chip>
        </div>

        <!-- FORM -->
        <div class="row no-wrap items-center">
          <q-card
            flat
            style="border-radius: 30px"
            class="bg-grey-3 q-pa-sm q-pb-md q-mt-md"
          >
            <q-form @submit="onClickBtnCheckPatientData">
              <div>
                <!-- BASIC DATA PASIEN MUNCUL JIKA PASIEN ADALAH PASIEN BARU -->
                <q-card
                  v-if="hideBasicForm"
                  style="border-radius: 20px"
                  class="q-pa-md bg-grey-3"
                >
                  <div>
                    <q-badge
                      no-caps
                      class="no-shadow text-grey-9"
                      color="grey-"
                      rounded
                      floating
                      size="xs"
                      @click="editBasicData"
                      >edit <q-icon name="edit"
                    /></q-badge>
                  </div>
                  <table>
                    <template v-for="data in tableBasicData" :key="data.value">
                      <tr>
                        <td>
                          <q-chip style="width: 100%">
                            {{ data.head }}
                          </q-chip>
                        </td>
                        <td class="q-px-sm">:</td>
                        <td>{{ data.value }}</td>
                      </tr>
                    </template>
                  </table>
                </q-card>

                <!-- FORM BASIC DATA -->
                <div v-if="!hideBasicForm">
                  <!-- NIK -->
                  <q-input
                    dense
                    v-model="store.patient.detail.nik"
                    mask="################"
                    :rules="formRules.nik"
                    class="q-mt-sm"
                    label="NIK / No. KTP"
                    flat
                  />

                  <!-- NAMA LENGKAP  -->
                  <q-input
                    ref="inputNik"
                    dense
                    v-model="store.patient.detail.name"
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
                    :hint="
                      $q.platform.is.desktop
                        ? 'Tanggal Lahir (contoh: 20/09/1992)'
                        : ''
                    "
                    mask="##/##/####"
                    :label="!$q.platform.is.desktop ? 'Tanggal Lahir' : ''"
                    type="date"
                  >
                  </q-input>

                  <!-- WHATSAPP -->
                  <q-input
                    dense
                    v-model="store.patient.detail.phone"
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
                  </div>
                  <!-- JIKA PASIEN PILIH BPJS, MUNCULKAN KOLOM NOMOR KARTU BPJS -->
                  <div>
                    <q-input
                      dense
                      v-if="store.patient.detail.jnsBayar == 'BPJS'"
                      v-model="store.patient.detail.noBPJS"
                      label="Nomor Kartu BPJS"
                      mask="######################"
                      :rules="formRules.jnsBayar"
                    ></q-input>
                  </div>
                </div>

                <!-- TOMBOL CEK APAKAH PASIEN SUDAH PERNAH BEROBAT ATAU BELUM -->
                <q-btn
                  v-morph:btn:group:300.resize="morphBtnCheck"
                  class="q-mt-md bg-primary"
                  rounded
                  :class="btnCheckClass"
                  label="Selanjutnya"
                  type="submit"
                  :disable="
                    store.patient.detail.nik == '' ||
                    store.patient.detail.name == ''
                  "
                >
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
                  style="boder-radius: 30px; width: 95%"
                  class="transparent"
                  flat
                  v-morph:cardPasienBaru:group:300.tween="morphBtnCheck"
                >
                  <div class="q-mt-md">
                    <q-chip class="bg-red-5 text-grey-2"
                      >Yuk! Lengkapi Data Pasien dulu (hanya sekali)</q-chip
                    >
                  </div>
                  <q-card-section class="bg-grey-3">
                    <new-patient-form />
                  </q-card-section>
                </q-card>

                <!-- MORPH JIKA TERJADI ERROR DI BACKEND -->
                <q-card v-morph:cardError:group:500.tween="morphBtnCheck">
                  <q-card-section>
                    Mohon maaf sepertinya terjadi masalah, Silahkan Hubungi
                    nomor customer service kami 085524914191
                  </q-card-section>
                </q-card>
              </div>
            </q-form>
          </q-card>
        </div>
      </q-card>

      <dialog-confirm />
    </div>
  </transition>
</template>

<script>
import { ref, inject, onMounted, computed } from "vue";
import NewPatientForm from "../form/NewPatientForm.vue";
import DialogConfirm from "../form/DialogConfirm.vue";
import axios from "axios";
import { date, Notify } from "quasar";

export default {
  components: {
    NewPatientForm,
    DialogConfirm,
  },
  setup() {
    const morphBtnCheck = ref("btn");
    const store = inject("store");
    const hideBasicForm = ref(false);
    const isSearching = ref(false);
    const btnCheckLabel = ref("Cek Data Pasien");
    const btnCheckClass = ref("");
    const btnCheckStyle = ref("");
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

    const tableBasicData = computed(() => {
      return [
        {
          head: "NIK",
          value: store.patient.detail.nik,
        },
        {
          head: "Nama",
          value: store.patient.detail.name,
        },
        {
          head: "Tgl. Lahir",
          value: store.patient.detail.birthDate,
        },
        {
          head: "No. Whatsapp",
          value: store.patient.detail.phone,
        },
        {
          head: "Jns. Bayar",
          value: store.patient.detail.jnsBayar,
        },
      ];
    });

    const editBasicData = () => {
      hideBasicForm.value = !hideBasicForm.value;
      morphBtnCheck.value = "btn";
    };
    const disableBtnCheckPatientData = () => {
      return (
        store.patient.detail.nik == "" ||
        store.patient.detail.name == "" ||
        store.patient.detail.birthDate == ""
      );
    };

    const onClickBtnCheckPatientData = () => {
      if (
        store.patient.detail.nik != "" &&
        store.patient.detail.name != "" &&
        store.patient.detail.birthDate != ""
      ) {
        isSearching.value = true;

        axios
          .post(
            process.env.API_ENDPOINT + "pasien",
            {
              data: {
                noKtp: store.patient.detail.nik,
                namaPasien: store.patient.detail.name,
                tglLahir: store.patient.detail.birthDate,
              },
            },
            {
              headers: { "Access-Control-Allow-Origin": "*" },
            }
          )
          .then((res) => {
            console.log(res.data.data);
            if (res.status == 200) {
              if (res.data.data !== null) {
                isSearching.value = false;
                store.patient.detail.noRM = res.data.data.pasien.no_rm;
                store.patient.detail.name = res.data.data.pasien.nama_pasien;
                store.components.state.dialogConfirm = true;
              } else {
                store.patient.detail.isPasienBaru = true;
                isSearching.value = false;

                Notify.create({
                  message:
                    "Hmm.. Sepertinya sobat Sibroh belum terdaftar di sistem kami",
                  color: "red",
                  closeBtn: true,
                  position: "top-right",
                });
                morphBtnCheck.value = "cardPasienBaru";
                hideBasicForm.value = true;
              }
            } else {
              morphBtnCheck.value = "cardError";
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
    return {
      store,
      formRules,
      isSearching,
      btnCheckClass,
      btnCheckLabel,
      btnCheckStyle,
      morphBtnCheck,
      onSubmit,
      onClickBtnCheckPatientData,
      disableBtnCheckPatientData,
      tableBasicData,
      hideBasicForm,
      editBasicData,
    };
  },
};
</script>
