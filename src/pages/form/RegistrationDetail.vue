<template>
  <div class="q-ma-md">
    <q-card class="q-pa-md" style="height: 80vh; border-radius: 30px">
      <navigation cardTitle="Detail Pendaftaran" />
      <q-separator />
      <div class="row q-mt-md">
        <q-card
          class="q-pa-md"
          style="min-width: 50vw; border-radius: 30px"
          :style="$q.screen.lt.md ? 'width:90vw' : ''"
          flat
        >
          <!-- :flat="$q.screen.lt.md" -->
          <q-card-section>
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
                <td>: {{ store.doctor.state.tempSelected.name }}</td>
              </tr>
              <tr>
                <td>Klinik</td>
                <td>: {{ store.doctor.state.tempSelected.specialist }}</td>
              </tr>
              <tr>
                <td>Jenis Bayar</td>
                <td>: {{ store.patient.detail.jnsBayar }}</td>
              </tr>
              <tr>
                <td>Tanggal Periksa</td>
                <td>: {{ store.patient.formattedTglPeriksa() }}</td>
              </tr>
              <tr>
                <td>Estimasi dipanggil</td>
                <td>
                  : {{ store.patient.registrationDetail.estimasiDipanggil }}
                </td>
              </tr>
              <tr>
                <td><strong>Nomor Antrian</strong></td>
                <td>
                  :
                  <strong>{{
                    store.patient.registrationDetail.antrian
                  }}</strong>
                </td>
              </tr>
            </table>
          </q-card-section>
        </q-card>
        <div>
          <q-card
            class="transparent"
            style="margin-top: 20px"
            :style="$q.screen.gt.md ? 'margin-left: -50px;' : ''"
            flat
          >
            <q-card-section>
              <q-img
                v-if="store.patient.registrationDetail.qrcode"
                :src="store.patient.registrationDetail.qrcode"
                class="rounded-borders"
                style="width: 150px; height: 150px"
              >
              </q-img>
            </q-card-section>
            <div class="float-right" style="margin-top: -30px">
              <q-chip
                v-if="store.patient.registrationDetail.qrcode"
                icon-right="download"
                clickable
                text-color="accent"
                align="right"
                @click="download"
                color="primary"
                label="Simpan Qr-Code"
                size="mdeeeeeeee"
              ></q-chip>
            </div>
          </q-card>
        </div>
      </div>
      <q-card-section>
        <span>Silahkan datang sesuai estimasi panggilan</span>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
import Navigation from "src/components/button/Navigation.vue";
// import Download from "downloadjs";

export default {
  components: { Navigation },
  setup() {
    const store = inject("store");

    const download = () => {
      const link = store.patient.registrationDetail.qrcode;
      const downloadLink = document.createElement("a");
      const fileName = store.patient.detail.name;
      downloadLink.href = link;
      downloadLink.download = fileName;
      downloadLink.click();
    };

    onMounted(() => {
      // console.log(Download);
    });
    return {
      download,
      store,
    };
  },
};
</script>
