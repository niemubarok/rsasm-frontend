<template>
  <q-card
    flat
    class="transparent q-mt-sm q-pa-sm"
    style="border-radius: 30px; border-left: 1px solid grey"
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
        align="left"
        label="Mendaftar sebagai :"
      />
      <!-- </div> -->
    </div>

    <!-- PILIIH BARU ATAU LAMA -->
    <div class="row no-wrap q-pt-md items-center">
      <div
        class="row justify-center no-wrap"
        :style="$q.screen.lt.sm ? 'margin-left: 50px' : 'margin-left: 140px'"
      >
        <!-- CHIP PASIEN BARU -->
        <q-chip
          v-model:selected="store.components.state.isNewPatient"
          :removable="store.components.state.isNewPatient"
          :disable="store.components.state.isOldPatient"
          class="shadow-4"
          :class="store.components.state.isNewPatient ? 'bg-green' : ''"
          color="primary"
          @remove="
            [
              (store.components.state.isNewPatient = false),
              (store.components.state.formEditing = false),
            ]
          "
          @click="store.components.state.formEditing = true"
          >Pasien Baru</q-chip
        >

        <q-chip
          v-model:selected="store.components.state.isOldPatient"
          class="shadow-4"
          :removable="store.components.state.isOldPatient"
          :disable="store.components.state.isNewPatient"
          color="primary"
          :class="store.components.state.isOldPatient ? 'bg-green' : ''"
          @remove="
            [
              (store.components.state.isOldPatient = false),
              (store.components.state.formEditing = false),
            ]
          "
          @click="[(store.components.state.formEditing = true)]"
          >Pasien Lama</q-chip
        >
      </div>
      <!-- </q-card>  -->
      <!-- NEXT iCON -->
      <!-- <transition
									appear
									enter-active-class="animated fadeInLeft"
									leave-active-class="animated fadeOut"
									>
									<q-icon v-if="!$q.platform.is.mobile" v-show="store.components.state.isOldPatient || store.components.state.isNewPatient" name="forward" color="secondary" size="50px"/>
					</transition> -->
    </div>

    <!-- FORM PASIEN LAMA -->
    <old-patient-form />
  </q-card>
</template>

<script>
import { inject } from "quasar";

export default {
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
};
</script>

<style>
</style>