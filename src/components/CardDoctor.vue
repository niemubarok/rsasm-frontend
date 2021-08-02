/* eslint-disable vue/require-prop-types */ /* eslint-disable
vue/require-prop-types */
<template>
  <q-card
    class="my-card q-ma-sm"
    style="
      border-left: 1px solid #527c51;
      border-right: 6px solid #527c51;
      border-radius: 30px;
      max-height: 200px;
      margin-top: 35px;
      width: 80vw;
      background-image: linear-gradient(#f4c360, #e8a216);
    "
    :style="$q.screen.gt.xs ? 'width:250px;' : ''"
  >
    <q-card-section horizontal>
      <q-card-section style="margin-left: 10%; margin-top: -10%">
        <div class="row no-wrap">
          <q-avatar size="80px" class="shadow-4">
            <img :src="pictureUrl" />
          </q-avatar>
          <q-space />
          <q-chip
            :style="$q.screen.lt.sm ? 'margin-right:-60%' : ''"
            style="margin-top: 15%; margin-left: 25%"
            class="bg-accent text-light q-px-sm q-py-sm"
            align="middle"
            rounded
            :label="'Klinik ' + specialist"
            text-color="primary"
            size="sm"
          />
        </div>
      </q-card-section>
    </q-card-section>
    <q-card-section style="margin-top: -25px">
      <div
        class="text-h6 text-center"
        style="text-overflow: ellipsis; overflow: hidden"
      >
        <span class="text-accent text-light">
          {{ doctor }}
        </span>
      </div>
    </q-card-section>
    <q-separator style="margin-top: -15px" />

    <q-card-actions>
      <q-btn class="text-grey-9" flat round icon="schedule" />
      <strong class="text-grey-9"> {{ time.start }} - {{ time.end }} </strong>
      <q-space />
      <q-btn
        v-if="!$route.params.id"
        :to="'/registration/' + id"
        class="text-capitalize"
        push
        rounded
        text-color="primary"
        color="secondary"
        label="Daftar"
        @click="
          [
            (store.doctor.searchText.value = ''),
            (store.components.searchBoxClicked = false),
          ]
        "
      />
      <!-- Daftar
        </q-btn> -->
    </q-card-actions>
  </q-card>
</template>

<script>
import {inject} from 'vue'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["id", "pictureUrl", "specialist", "doctor", "time"],
  setup(){
    return {
      store : inject('store')
    }
  }
};
</script>
