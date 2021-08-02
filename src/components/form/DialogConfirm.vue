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
            <td>: {{ store.patient.oldPatientForm.nik }}</td>
          </tr>
          <tr>
            <td>Nama Pasien</td>
            <td>: {{ store.patient.oldPatientForm.name }}</td>
          </tr>
          <tr>
            <td>Tgl. Lahir</td>
            <td>: {{ TglLahir }}</td>
          </tr>
          <tr>
            <td>No. HP</td>
            <td>: {{ store.patient.oldPatientForm.phone }}</td>
          </tr>
          <tr>
            <td>Dokter Tujuan</td>
            <td>: {{ store.doctor.selected().name }}</td>
          </tr>
          <tr>
            <td>Klinik</td>
            <td>: {{ store.doctor.selected().specialist }}</td>
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
          @click="
            [(store.components.state.isConfirm = false), (accept = false)]
          "
        />

        <q-btn
          v-close-popup="accept"
          :disable="!accept"
          label="Daftarkan"
          rounded
          color="secondary text-accent"
          @click="[onSubmit, $router.push('/registration/registered')]"
        >
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar, date } from "quasar";
import { inject, reactive, ref, useRoute } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const store = inject("store");
    const TglLahir = date.formatDate(
      store.patient.oldPatientForm.birthDate,
      "DD MMMM YYYY"
    );
    const confirmPatientData = reactive({
      NIK: store.patient.oldPatientForm.nik,
      Nama: store.patient.oldPatientForm.name,
      "Tgl. Lahir": store.patient.oldPatientForm.birthDate,
      "No. HP": store.patient.oldPatientForm.phone,
    });
    const accept = ref(false);

    return {
      confirmPatientData,
      store,
      accept,
      TglLahir,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
    };
  },
};
</script>

<style></style>
