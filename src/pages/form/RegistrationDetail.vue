<template>
  <!-- <div class="q-ma-md"> -->
  <!-- :flat="$q.screen.lt.sm" -->
  <!-- flat
    :bordered="$q.screen.gt.sm" -->
  <q-card tag="div" class="q-pa-md q-mt-md fit" style="border-radius: 30px">
    <div>
      <q-chip
        v-if="store.patient.registrationDetail.qrcode"
        icon-right="download"
        clickable
        text-color="accent"
        align="left"
        @click="test"
        color="primary"
        label="Simpan detail pendaftaran"
        size="sm"
        class="absolute-bottom-right q-mr-xl q-mb-sm z-top q-py-sm"
        style="width: 200px"
      ></q-chip>
    </div>

    <navigation cardTitle="Detail Pendaftaran" />
    <q-separator />
    <div id="content" class="column items-start q-gutter-xs">
      <div class="row q-mt-md">
        <q-card
          flat
          bordered
          class="q-pt-sm q-mt-sm"
          :class="$q.screen.lt.sm ? 'q-mt-md fit' : ''"
          style="border-radius: 30px; min-width: 300px; height: 250px"
        >
          <q-card-section class="q-pa-md">
            <table ref="toPrint">
              <template
                v-for="(value, key) in store.patient.table()"
                :key="key"
              >
                <tr>
                  <td>{{ key }}</td>
                  <td>: {{ value }}</td>
                </tr>
              </template>
            </table>
          </q-card-section>
        </q-card>

        <!-- QRCODE -->
        <q-card
          id="qrcode"
          flat
          bordered
          class="transparent q-ml-sm"
          style="min-width: 250px; min-height: 250px width:400px"
          :style="$q.screen.lt.md ? 'margin-top: 20px;' : ''"
        >
          <q-card-section class="column items-center">
            <span>Simpanlah qrcode berikut untuk melakukan checkin</span>
            <img
              v-if="store.patient.registrationDetail.qrcode"
              :src="store.patient.registrationDetail.qrcode"
              style="width: 200px; height: 200px"
            />
          </q-card-section>
          <div class="float-right" style="margin-top: -30px">
            <!-- <q-chip
              v-if="store.patient.registrationDetail.qrcode"
              icon-right="download"
              clickable
              text-color="accent"
              align="right"
              @click="download"
              color="primary"
              label="Simpan Qr-Code"
              size="sm"
            ></q-chip> -->
            <!-- <q-chip
              v-if="store.patient.registrationDetail.qrcode"
              icon-right="download"
              clickable
              text-color="accent"
              align="left"
              @click="test"
              color="primary"
              label="Simpan detail pendaftaran"
              size="sm"
              class="absolute-bottom"
            ></q-chip> -->
          </div>
        </q-card>

        <!-- ANTRIAN -->
        <q-card
          id="antrian"
          style="border-radius: 30px; height: 250px"
          class="q-pb-sm q-mx-sm q-mt-sm"
          :class="$q.screen.lt.sm ? 'fit' : ''"
          flat
          bordered
        >
          <q-card-section class="bg-green-3 text-center text-grey-7 text-h6">
            Nomor Antrian
          </q-card-section>
          <div class="column items-center">
            <q-chip size="xl" color="white">
              <span class="text-h4">
                {{ store.patient.registrationDetail.antrian }}
              </span>
            </q-chip>
          </div>
          <div class="column items-center">
            Estimasi dipanggil :
            <q-chip>
              <span>{{
                store.patient.registrationDetail.estimasiDipanggil
              }}</span>
            </q-chip>
          </div>
        </q-card>
      </div>
    </div>
  </q-card>
</template>

<script>
import { inject, onMounted, ref } from "vue";
import Navigation from "src/components/button/Navigation.vue";
// import html2pdf from "html2pdf";
import { useQuasar } from "quasar";
import { jsPDF } from "jspdf";
import { useRouter } from "vue-router";

export default {
  components: { Navigation },
  setup() {
    const store = inject("store");
    const router = useRouter();
    const $q = useQuasar();
    const toPrint = ref(null);
    const reader = new FileReader();
    const qrcode = document.getElementById("qrcode");

    const download = () => {
      const link = store.patient.registrationDetail.qrcode;
      const downloadLink = document.createElement("a");
      const fileName = store.patient.detail.name;
      downloadLink.href = link;
      downloadLink.download = fileName;
      downloadLink.click();
    };

    const test = async () => {
      const doc = new jsPDF("p", "pt", "a5");
      doc.setFontSize(12);
      doc.text(120, 30, `:::Bukti Pendaftaran Online:::`);
      doc.line(20, 35, 400, 35);
      doc.text(30, 50, `No. KTP`);
      doc.text(150, 50, `: ${store.patient.detail.nik}`);
      doc.text(30, 70, `Nama Pasien`);
      doc.text(150, 70, `: ${store.patient.detail.name}`);
      doc.text(30, 90, `Tanggal Lahir `);
      doc.text(150, 90, `: ${store.patient.formattedBirthDate()}`);
      doc.text(30, 110, `No. Whatsapp`);
      doc.text(150, 110, `: ${store.patient.detail.phone}`);
      doc.text(30, 130, `Dokter Tujuan`);
      doc.text(150, 130, `: ${store.doctor.state.selected?.name}`);
      doc.text(30, 150, `Klinik`);
      doc.text(150, 150, `: ${store.doctor.state.selected?.specialist()}`);
      doc.text(30, 170, `Jenis Bayar`);
      doc.text(150, 170, `: ${store.patient.detail.jnsBayar}`);
      doc.text(30, 190, `Tanggal Periksa`);
      doc.text(30, 210, `Estimasi Dipanggil`);
      doc.text(30, 230, `No. Antrian`);
      doc.setFontSize(16);
      doc.text(150, 190, `: ${store.patient.formattedTglPeriksa()}`);
      doc.text(
        150,
        210,
        `: ${store.patient.registrationDetail.estimasiDipanggil}`
      );
      doc.text(150, 230, `: ${store.patient.registrationDetail.antrian}`);

      doc.line(20, 240, 400, 240);
      doc.line(20, 555, 400, 555);
      doc.setFontSize(10);
      doc.text(150, 15, "RS Ali Sibroh Malisi");
      doc.setFontSize(7);
      doc.text(
        30,
        565,
        "__Gunakan qrcode di atas pada saat checkin di lobby rumah sakit"
      );
      // doc.text(Object.values(toPrint.value), 10, 10);
      // doc.text(23, 81, data);
      doc.addImage(
        store.patient.registrationDetail.qrcode,
        65,
        250,
        300,
        300,
        "MEDIUM"
      );

      doc.save(store.patient.detail.name);
      $q.loading.show({
        message: "Sedang membuat PDF, Mohon Tunggu...",
      });
      setTimeout(async () => {
        $q.loading.hide();
      }, 1000);
    };

    onMounted(() => {
      if (
        store.doctor.state.selected == null ||
        Object.keys(store.doctor.state.selected).length == 0
      ) {
        router.push("/");
      }
    });
    return {
      download,
      store,
      test,
      toPrint,
    };
  },
};
</script>
