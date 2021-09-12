<template>
  <q-footer
    style="background-color: rgb(229, 229, 229, 0.9)"
    class="text-grey-8 fixed-bottom"
  >
    <q-separator />
    <q-toolbar class="GPL__toolbar" style="height: 64px">
     

      <q-img
        src="logo.png"
        loading="lazy"
        spinner-color="white"
        height="50px"
        style="max-width: 50px"
      />
      <q-toolbar-title
        v-if="$q.screen.gt.sm"
        shrink
        class="q-mr-xl row items-center no-wrap"
      >
        <strong>
          <span style="color: #366835"> RS </span>
          <span style="color: #f9a602"> Ali Sibroh Malisi</span></strong
        >
      </q-toolbar-title>

      <!-- <q-space /> -->

      <!-- search -->
      <q-input
        v-if="$q.screen.gt.sm"
        v-model="store.doctor.searchText.value"
        class="q-mr-md GPL__toolbar-input"
        dense
        standout="bg-primary"
        placeholder="Cari Jadwal Dokter"
      >
        <template #prepend>
          <q-icon v-if="store.doctor.searchText.value === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="store.doctor.searchText.value = ''"
          />
        </template>
      </q-input>

      <!-- TOMBOL REGISTRASI -->
      <!-- v-if="$route.path !== '/registration/' + store.doctor.selected()" -->
      <reg-button />

      <q-btn
        v-if="$q.screen.gt.xs"
        flat
        dense
        no-wrap
        color="secondary"
        icon="login"
        no-caps
        label="Masuk"
        class="q-ml-sm q-px-md"
      />
      <q-space />

      <!-- <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div> -->
    </q-toolbar>
  </q-footer>
</template>

<script>
import { inject } from "vue";
import { useQuasar } from "quasar";
import RegButton from "src/components/button/RegButton.vue";

export default {
  components: { RegButton },
  setup() {
    const store = inject("store");
    const $q = useQuasar();
    // $q.addressbarColor.set();

    return {
      store,
    };
  },
};
</script>
