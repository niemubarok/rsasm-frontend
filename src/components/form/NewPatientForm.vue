<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <q-form @submit="onSubmit">
      <div style="margin-left: -20px;margin-top:-20px;">
        <!-- jk -->
        <q-chip
          ><q-badge
            style="margin-left: -10px"
            rounded
            class="q-pa-xs bg-grey-7 text-grey-1"
          >
            Jenis Kelamin
          </q-badge>
          <q-radio
            size="30px"
            label="L"
            val="L"
            v-model="store.patient.detail.jk"
          >
          </q-radio>
          <q-radio
            size="30px"
            label="P"
            val="P"
            v-model="store.patient.detail.jk"
          ></q-radio>
        </q-chip>
        <!-- <div> -->
        <!-- gol_darah //enum('A', 'B', 'O', 'AB', '-') -->
        <q-chip>
          <q-badge
            style="margin-left: -10px"
            rounded
            class="q-pa-xs bg-grey-7 text-grey-1"
            >Golongan Darah</q-badge
          >

          <q-option-group
            v-model="store.patient.detail.gol_darah"
            :options="options.golonganDarah"
            size="20px"
            inline
          />
        </q-chip>

        <!-- stts_nikah //enum('BELUM MENIKAH', 'MENIKAH', 'JANDA', 'DUDHA', -->
        <q-chip>
          <q-badge
            style="margin-left: -10px"
            rounded
            class="q-pa-xs q-mr-sm bg-grey-7 text-grey-1"
          >
            Status Nikah
          </q-badge>

          <q-select
            dense
            v-model="store.patient.detail.stts_nikah"
            :options="['BELUM MENIKAH', 'MENIKAH', 'JANDA', 'DUDHA']"
          ></q-select>
        </q-chip>

        <!-- agama -->
        <q-chip>
          <q-badge
            style="margin-left: -10px"
            rounded
            class="q-pa-xs q-mr-sm bg-grey-7 text-grey-1"
          >
            Agama
          </q-badge>

          <q-select
            dense
            behavior="menu"
            v-model="store.patient.detail.agama"
            :options="options.agama"
          ></q-select>
        </q-chip>

        <!-- tmp_lahir -->
        <q-input
          dense
          rounded
          v-model="store.patient.detail.tmp_lahir"
          label="Tempat Lahir"
        ></q-input>

        <!-- alamat -->
        <q-input
          dense
          v-model="store.patient.detail.alamat"
          label="Alamat Pasien"
        ></q-input>

        <!-- pekerjaan -->
        <q-input label="Pekerjaan" v-model="store.patient.detail.pekerjaan" />

        <!-- nm_ibu, -->
        <q-input
          dense
          v-model="store.patient.detail.nm_ibu"
          label="Nama Ibu Kandung"
        ></q-input>

        <!-- <q-chip>Data Keluarga/ Penanggung</q-chip> -->
        <!-- namakeluarga -->
        <q-input
          v-model="store.patient.detail.namakeluarga"
          label="Nama Penanggung"
        ></q-input>
        <!-- keluarga //enum('AYAH', 'IBU', 'ISTRI', 'SUAMI', 'SAUDARA' -->
        <q-chip>
          <q-badge
            style="margin-left: -10px"
            rounded
            class="q-pa-xs q-mr-sm bg-grey-7 text-grey-1"
          >
            Hubungan dengan Penanggung
          </q-badge>

          <q-select
            dense
            behavior="menu"
            v-model="store.patient.detail.keluarga"
            :options="options.statusNikah"
          ></q-select>
        </q-chip>
        <!-- </div> -->
      </div>
      <span>
        <q-btn
          ref="btnKonfirmasi"
          type="submit"
          :label="disableBtnKonfirmasi() ? 'Data Belum Lengkap' : 'Konfirmasi'"
          :color="disableBtnKonfirmasi() ? 'grey-5' : 'secondary'"
          :class="disableBtnKonfirmasi() ? 'text-grey-9' : ''"
          rounded
          :disable="disableBtnKonfirmasi()"
        >
        </q-btn>
        <q-tooltip v-if="disableBtnKonfirmasi()" class="bg-red"
          >Upps.. masih ada data yang belum lengkap
        </q-tooltip>
      </span>
      <!-- {{"jk" + store.patient.detail.jk == ''}} <br />
      {{ "tmplahir" + store.patient.detail.tmp_lahir == ''}} <br />
      {{"nm ibu" + store.patient.detail.nm_ibu == ''}} <br />
      {{"alamat" + store.patient.detail.alamat == ''}} <br />
      {{"dara" + store.patient.detail.gol_darah == ''}} <br />
      {{"peke" + store.patient.detail.pekerjaan == ''}} <br />
      {{"stts" + store.patient.detail.stts_nikah == ''}} <br />
      {{"agama" + store.patient.detail.agama == ''}} <br />
      {{"umum" + store.patient.detail.umur == ''}} -->
    </q-form>
  </transition>

  <!-- CONFIRM -->
  <dialog-confirm />
</template>

<script>
import { inject } from "vue";
import DialogConfirm from "./DialogConfirm.vue";
export default {
  components: { DialogConfirm },
  setup() {
    const store = inject("store");
    const options = {
      golonganDarah: [
        {
          label: "A",
          value: "A",
        },
        {
          label: "B",
          value: "B",
        },
        {
          label: "AB",
          value: "AB",
        },
        {
          label: "O",
          value: "O",
        },
      ],
      agama: ["ISLAM", "KRISTEN", "KATHOLIK", "HINDU", "BUDDHA", "KONGHUCU"],
      statusNikah: ["AYAH", "IBU", "ISTRI", "SUAMI", "SAUDARA"],
    };

    const formRules = {
      nik: [
        (val) => !!val || "Mohon masukan NIK",
        (val) => val.length >= 16 || "Angka yang anda masukan kurang",
      ],
      nama: [(val) => !!val || "Masukkan Nama Lengkap"],
      tglLahir: [(val) => val !== "" || "Tanggal Lahir Wajib Diisi!"],
      HP: [(val) => val.length > 6 || "Masukan nomor Whatsapp yang valid"],
    };

    const disableBtnKonfirmasi = () => {
      if (
        store.patient.detail.jk == "" ||
        store.patient.detail.tmp_lahir == "" ||
        store.patient.detail.nm_ibu == "" ||
        store.patient.detail.alamat == "" ||
        store.patient.detail.gol_darah == "" ||
        store.patient.detail.pekerjaan == "" ||
        store.patient.detail.stts_nikah == "" ||
        store.patient.detail.agama == "" ||
        store.patient.detail.keluarga == "" ||
        store.patient.detail.namakeluarga == ""
      ) {
        return true;
      }
      return false;
    };
    const onSubmit = () => {
      store.components.state.isConfirm = true;
      store.components.state.dialogConfirm = true;
    };
    return {
      store,
      onSubmit,
      formRules,
      options,
      disableBtnKonfirmasi,
    };
  },
};
</script>
