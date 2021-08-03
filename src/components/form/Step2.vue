<template>
  <transition
    appear
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOut"
  >
    <div v-if="$route.params.id" v-show="showNext" class="col-md q-ml-sm">
      <q-card
        class="shadow-up-1 transparent q-mt-sm q-pa-sm"
        style="border-radius: 30px"
        :style="
          $q.screen.lt.xl && $q.screen.gt.sm
            ? 'width:60vw;margin-left:70px;'
            : 'width:85vw;'
        "
      >
        <!-- chip -->
        <div style="margin-bottom: -15px">
          <q-chip color="secondary" text-color="white">
            <q-avatar color="primary" text-color="accent"
              ><strong>2</strong></q-avatar
            >
            Isi Data Pasien
          </q-chip>
          <!-- <div class="q-ml-md "> -->
          <q-badge
            class="text-bold"
            text-color="secondary"
            rounded
            color="transparent"
            label="Mendaftar sebagai :"
          />
          <!-- align="left" -->
          <!-- </div> -->
        </div>

        <!-- PILIIH BARU ATAU LAMA -->
        <div class="row no-wrap q-pt-md items-center">
          <div
            class="row justify-center no-wrap"
            :style="
              $q.screen.lt.sm ? 'margin-left: 50px' : 'margin-left: 140px'
            "
          >
            <!-- CHIP PASIEN BARU -->
            <q-chip
              v-model:selected="store.components.state.isNewPatient"
              :removable="store.components.state.isNewPatient"
              :disable="store.components.state.isOldPatient"
              class="shadow-4"
              :class="store.components.state.isNewPatient ? 'bg-green' : ''"
              color="primary"
              @remove="hideFormPasienBaru"
              @click="showFormPasienBaru"
              >Pasien Baru</q-chip
            >

            <q-chip
              v-model:selected="store.components.state.isOldPatient"
              class="shadow-4"
              :removable="store.components.state.isOldPatient"
              :disable="store.components.state.isNewPatient"
              color="primary"
              :class="store.components.state.isOldPatient ? 'bg-green' : ''"
              @remove="hideFormPasienLama"
              @click="showFormPasienLama"
              >Pasien Lama</q-chip
            >
            <!-- (store.components.state.isOldPatient = true), -->
          </div>
        </div>

        <!-- FORM PASIEN LAMA -->
        <old-patient-form />
      </q-card>

      <dialog-confirm />
    </div>
  </transition>
</template>

<script>
import { ref, inject } from "vue";
import OldPatientForm from "../form/OldPatientForm.vue";
import DialogConfirm from "../form/DialogConfirm.vue";
export default {
  // name: 'ComponentName',
  components: {
    OldPatientForm,
    DialogConfirm,
  },
  setup() {
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

    const showFormPasienLama = () => {
      store.components.state.formEditing = true;
      store.components.state.isOldPatient = true;
    };

    const hideFormPasienLama = () => {
      store.components.state.formEditing = false;
      store.components.state.isOldPatient = false;
    };

    const showFormPasienBaru = () => {
      store.components.state.isNewPatient = true;
      store.components.state.formEditing = true;
    };

    const hideFormPasienBaru = () => {
      store.components.state.isNewPatient = false;
      store.components.state.formEditing = false;
    };

    const store = inject("store");
    return {
      store,
      showCard,
      showNext,
      test,
      showFormPasienLama,
      hideFormPasienLama,
      showFormPasienBaru,
      hideFormPasienBaru,
    };
  },
};
</script>
