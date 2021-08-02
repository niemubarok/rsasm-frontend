<template>
  <div class="fit q-pt-xl q-px-sm column">
    <router-link to="/doctor/search" style="text-decoration: none">
      <q-btn
        flat
        text-color="secondary"
        color="primary"
        stack
        no-caps
        size="26px"
        class="GPL__side-btn"
      >
        <q-icon size="22px" name="schedule" />
        <div class="GPL__side-btn__label">Jadwal Dokter</div>
      </q-btn>
    </router-link>

    <q-btn
      flat
      color="secondary"
      stack
      no-caps
      size="26px"
      class="GPL__side-btn"
    >
      <q-icon size="22px" name="add" />
      <div class="GPL__side-btn__label">Klinik</div>
    </q-btn>

    <q-btn
      flat
      color="secondary"
      stack
      no-caps
      size="26px"
      class="GPL__side-btn"
    >
      <q-icon size="22px" name="text_snippet" />
      <div class="GPL__side-btn__label">Blog</div>
      <q-badge
        floating
        color="red"
        text-color="white"
        style="top: 8px; right: 16px"
      >
        1
      </q-badge>
    </q-btn>

    <q-btn
      flat
      color="secondary"
      stack
      no-caps
      size="26px"
      class="GPL__side-btn"
    >
      <q-icon size="22px" name="group" />
      <div class="GPL__side-btn__label">Karir</div>
    </q-btn>

    <q-btn
      flat
      color="secondary"
      stack
      no-caps
      size="26px"
      class="GPL__side-btn"
    >
      <q-icon size="22px" name="import_contacts" />
      <div class="GPL__side-btn__label">Kontak</div>
    </q-btn>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      leftDrawerOpen: true,
    };
  },
};
</script>
