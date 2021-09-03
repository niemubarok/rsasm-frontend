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
            <td>: {{ store.doctor.state.selected.specialist }}</td>
          </tr>
          <tr>
            <td>Jenis Bayar</td>
            <td>: {{ store.patient.detail.jnsBayar }}</td>
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
import axios from 'axios'

export default {
  setup() {
    const $q = useQuasar();

    const store = inject("store");
    const TglLahir = ref("");

    const confirmPatientData = reactive({
      NIK: store.patient.detail.nik,
      Nama: store.patient.detail.name,
      "Tgl. Lahir": store.patient.detail.birthDate,
      "No. HP": store.patient.detail.phone,
    });
    const accept = ref(false);

    const onclosePopUp = () => {
      store.components.state.isConfirm = false;
      accept.value = false;
    };

    const onSubmit = () => {
      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        // console.log(process.env.API_ENDPOINT);
        
        axios.post(process.env.API_ENDPOINT+"pasien/store",
        {
          data:{
            pasien: store.patient.detail
          }
        })
        .then((res)=>{
          if(res.status == 201){ //JIKA BERHASIL MASUK DATABASE

          //TAMPILKAN NOTIFIKASI
            $q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Submitted",
            });

            //REDIRECT KE HALAMAN REGISTERED DENGAN DATA DARI BACKEND
            $router.push("/registration/registered");
          }
        })

      }
    };

    onBeforeMount(()=>{
         () => {
      store.patient.tgl_daftar = date.formatDate(new Date(), "YYYY-MM-DD");
    }
      
    })

    return {
      confirmPatientData,
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
