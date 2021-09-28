<template>
  <q-dialog v-model="store.components.state.dialogConfirm" persistent>
    <q-card>
      <q-banner class="bg-secondary text-bold text-primary"
        ><q-avatar color="primary" size="sm" text-color="secondary"
          ><strong>3</strong></q-avatar
        >
        KONFIRMASI</q-banner
      >

      <q-card-section>
        <q-chip class="bg-transparent">
          Mohon cek kembali data pasien di bawah ini!
        </q-chip>

        <table>
          <tr>
            <td>NIK</td>
            <td>: {{ store.patient.detail.nik }}</td>
          </tr>
          <tr>
            <td>Nama Pasien</td>
            <td>: {{ store.patient.detail.name }}</td>
          </tr>
          <tr>
            <td>Tgl. Lahir</td>
            <td>: {{ store.patient.formattedBirthDate() }}</td>
          </tr>
          <tr>
            <td>No. HP</td>
            <td>: {{ store.patient.detail.phone }}</td>
          </tr>
          <tr>
            <td>Dokter Tujuan</td>
            <td>: {{ store.doctor.state.selected.name }}</td>
          </tr>
          <tr>
            <td>Klinik</td>
            <td>: {{ store.doctor.state.selected.specialist() }}</td>
          </tr>
          <tr>
            <td>Jenis Bayar</td>
            <td>: {{ store.patient.detail.jnsBayar }}</td>
          </tr>
          <tr>
            <td>Tanggal Periksa</td>
            <td>: {{ store.patient.formattedTglPeriksa() }}</td>
          </tr>
        </table>
      </q-card-section>
      <!-- <q-banner > -->
      <q-checkbox
        v-model="accept"
        class="text-weight-medium full-width q-px-md q-py-sm"
        :class="accept ? 'bg-secondary text-grey-3' : 'bg-red-2 text-grey-10'"
        size="md"
        color="secondary"
        dense
        label="Saya menyatakan bahwa data di atas sudah benar"
      />
      <!-- </q-banner> -->

      <q-card-actions align="right">
        <q-btn
          v-close-popup
          flat
          label="Cancel"
          color="primary"
          @click="onclosePopUp"
        />

        <q-btn
          v-close-popup="accept"
          :disable="!accept"
          label="Daftarkan"
          rounded
          color="secondary text-accent"
          @click="onSubmit"
        >
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar, date } from "quasar";
import { inject, reactive, ref, onBeforeMount } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();

    const store = inject("store");
    const TglLahir = ref("");
    const $router = useRouter();
    const accept = ref(false);

    const onclosePopUp = () => {
      store.components.state.isConfirm = false;
      accept.value = false;
    };

    const onSubmit = () => {
      // if (accept.value !== true) {
      // $q.notify({
      //   color: "red-5",
      //   textColor: "white",
      //   icon: "warning",
      //   message: "You need to accept the license and terms first",
      // });
      // } else {
      // if (!store.patient.detail.isPasienBaru) {
      axios
        .post(process.env.API_ENDPOINT + "pendaftaran", {
          data: {
            pasien: store.patient.detail,
            dokter: store.doctor.state.selected,
            tglPeriksa: store.patient.detail.tgl_periksa,
            kodeDokter: store.doctor.state.selected.id,
            namaDokter: store.doctor.state.selected.name,
            kodePoli: store.doctor.state.selected.kd_poli,
            namaPoli: store.doctor.state.selected.specialist(),
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status == 201) {
            //JIKA BERHASIL MASUK DATABASE

            //ambil qrcode dan masukan ke state
            store.patient.registrationDetail.qrcode = res.data.qrcode;
            store.patient.registrationDetail.estimasiDipanggil =
              res.data.jamDatang;
            store.patient.registrationDetail.antrian = res.data.nomorAntrian;

            //TAMPILKAN NOTIFIKASI
            $q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Berhasil Terdaftar",
            });

            //REDIRECT KE HALAMAN REGISTERED DENGAN DATA DARI BACKEND
            $router.push("/registration/detail");
          } else if (res.data.data.isRegistered) {
            store.patient.registrationDetail.qrcode = res.data.data.qrcode;
            store.patient.registrationDetail.estimasiDipanggil =
              res.data.data.jamDatang;
            store.patient.registrationDetail.antrian =
              res.data.data.nomorAntrian;
            //TAMPILKAN NOTIFIKASI
            $q.notify({
              color: "orange-4",
              textColor: "accent",
              icon: "event_available",
              message: `Pasien atas nama ${store.patient.detail.name} sebelumnya sudah terdaftar`,
              timeout: 0,
              type: "info",
              multiLine: true,
              actions: [
                {
                  label: "Lihat Detail",
                  color: "secondary",
                  handler: () => {
                    $router.push("/registration/detail");
                  },
                },
                {
                  label: "Tutup",
                  color: "grey-7",
                },
              ],
            });
          }
        });
      // }
      // }
    };

    onBeforeMount(() => {
      () => {
        store.patient.tgl_daftar = date.formatDate(new Date(), "YYYY-MM-DD");
      };
    });

    return {
      // confirmPatientData,
      store,
      accept,
      TglLahir,
      onclosePopUp,
      onSubmit,
    };
  },
};
</script>

<style></style>
