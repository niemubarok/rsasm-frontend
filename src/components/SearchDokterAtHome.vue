<template>
  <!-- SEARCH -->
  <div :class="$q.screen.gt.md ? 'q-ml-xl ' : ''">
    <div class="row rounded-borders q-pa-md justify-center">
      <q-expansion-item
        class="shadow-1 overflow-hidden bg-primary"
        :class="!store.components.state.leftDrawerOpen ? 'z-top' : ''"
        style="border-radius: 30px; width: 100%"
        :style="
          $q.screen.gt.sm && !store.components.state.searchBoxClicked
            ? 'width:100%;'
            : 'margin-bottom:-2vh'
        "
        icon="people"
        label="Praktek Dokter Hari Ini"
        header-class="text-accent text-h6"
        expand-icon-class="text-grey-10"
        expand-icon="search"
        expanded-icon="close"
        @show="atShow"
        @hide="atHide"
      >
        <q-card>
          <q-card-section>
            <!-- search -->
            <q-input
              ref="input"
              v-model="store.doctor.state.searchSpecialist.value"
              autofocus
              class="q-mr-md"
              dense
              outlined
              rounded
              placeholder="Ketik   Nama Dokter / Poli"
            >
              <template #prepend>
                <q-icon
                  v-if="store.doctor.state.searchText.value === ''"
                  name="search"
                />
              </template>
            </q-input>
            Spesialis yang tersedia:
            <template
              v-for="(clinic, index) in store.doctor.state.clinicLists.value"
              :key="index"
            >
              <q-chip
                :selected="store.doctor.state.searchSpecialist.value == clinic"
                clickable
                :removable="store.doctor.state.searchSpecialist.value == clinic"
                @remove="store.doctor.state.searchSpecialist.value = ''"
                dark
                :class="{
                  'bg-secondary text-grey-2':
                    store.doctor.state.searchSpecialist.value == clinic,
                }"
                @click="store.doctor.state.searchSpecialist.value = clinic"
                >{{ clinic }}</q-chip
              >
            </template>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script>
import { inject, nextTick, ref, onMounted } from "vue";
export default {
  setup() {
    const store = inject("store");
    const input = ref(null);
    const atShow = () => {
      nextTick(() => {
        input.value.focus();
      });
      store.components.state.searchBoxClicked = true;
    };
    const atHide = () => {
      store.doctor.state.searchText.value = "";
      store.components.state.searchBoxClicked = false;
    };

    return {
      store,
      atShow,
      atHide,
      input,
    };
  },
};
</script>

<style></style>
