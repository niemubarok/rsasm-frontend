<template>
  <!-- <div class="col-md-3"> -->
  <div class="row">
    <!-- Dokter -->
    <transition
      v-if="showCard"
      appear
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOut"
    >
      <q-card
        flat
        class="transparent q-mt-sm"
        style="border-radius: 30px"
        :style="$q.screen.gt.sm ? '' : 'border-right: 1px solid grey'"
      >
        <q-expansion-item v-model="expanded" style="width: 100%">
          <template v-slot:header>
            <div class="row no-wrap">
              <q-chip color="secondary" text-color="white">
                <!-- <q-item-section> -->
                <q-avatar color="primary" text-color="accent"
                  ><strong>1</strong></q-avatar
                >
                Dokter Tujuan
                <!-- </q-item-section> -->
              </q-chip>
              <q-space />
              <router-link to="/doctor/search" style="text-decoration: none">
                <q-chip
                  v-if="$route.params.id"
                  icon="swap_horiz"
                  size="xs"
                  class="shadow-2 cursor-pointer q-mr-md"
                  rounded
                  color="primary"
                  text-color="accent"
                >
                  Ganti Dokter
                </q-chip>
              </router-link>
            </div>
          </template>
          <!-- :picture-url="store.doctor.state.selected().url" -->

          <card-doctor
            v-if="$route.params.id"
            :doctor="store.doctor.state.selected.name"
            :specialist="store.doctor.state.selected.specialist()"
            :time="store.doctor.state.selected.time"
          />

          <q-card-section
            v-if="!$route.params.id"
            class="row items-center justify-center q-mt-xl"
          >
            <router-link to="/doctor/search" style="text-decoration: none">
              <q-btn
                class="text-primary bg-white"
                style="border-radius: 30px"
                @click="
                  store.doctor.state.searchDate.value =
                    store.components.state.today()
                "
              >
                Pilih Dokter
              </q-btn>
            </router-link>
          </q-card-section>
        </q-expansion-item>
      </q-card>
    </transition>
  </div>
  <!-- </div> -->
</template>

<script>
import { inject, ref, onMounted, onBeforeMount } from "vue";
import CardDoctor from "../CardDoctor.vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  components: {
    CardDoctor,
  },
  setup() {
    const store = inject("store");
    const $q = useQuasar();
    const router = useRouter();
    const showCard = ref(false);
    const expanded = ref(true);

    setTimeout(() => {
      showCard.value = true;
    }, 100);
    const showNext = ref(false);
    setTimeout(() => {
      showNext.value = true;
    }, 500);

    onMounted(() => {
      if (
        store.doctor.state.selected == null ||
        Object.keys(store.doctor.state.selected).length == 0
      ) {
        router.push("/registration");
      }
      if ($q.screen.lt.md) {
        setTimeout(() => {
          expanded.value = false;
        }, 1000);
      }
    });

    onBeforeMount(() => {
      const selectedDoctor = store.doctor.state.detail.value.find(
        (dokter) => dokter.id == store.doctor.state.doctorId()
      );
      // console.log(selectedDoctor.kd_poli);
      store.doctor.state.selected = selectedDoctor;
      store.doctor.state.kodePoli = selectedDoctor.kodePoli;
    });
    return {
      store,
      showCard,
      expanded,
    };
  },
};
</script>

<style></style>
