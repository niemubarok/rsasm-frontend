<template>
  <template
    v-for="(clinic, index) in store.doctor.state.clinicLists.value"
    :key="index"
  >
    <q-chip
      style="z-index: 2"
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
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
};
</script>

<!-- <q-chip
        dense
        rounded
        color="grey-8"
        style="z-index: 2"
        class="q-ml-xs text-weight-light text-grey-1"
        label="filter Spesialis :"
        no-caps
      >
        <q-select
          v-model="store.doctor.state.searchSpecialist.value"
          :options="store.doctor.state.clinicLists.value"
          dense
          color="grey-1"
          label-color="red"
          class="q-pl-sm z-max text-white"
          clearable
          @clear="onClear"
          behavior="menu"
          input-class="text-white"
          style="width: 200px"
          dark
        >
        </q-select>
      </q-chip> -->
