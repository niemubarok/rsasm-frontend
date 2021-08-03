<template>
  <q-card
    flat
    class="bg-grey-3 q-py-sm q-mr-sm"
    :style="!$q.platform.is.mobile ? 'border-radius:30px;' : ''"
  >
    <q-img
      src="~assets/img/forms-amico.png"
      :ratio="$q.platform.is.mobile ? 4 / 3 : 16 / 9"
      class="absolute-top"
      style="opacity: 0.1"
    >
      <!-- :style="$q.platform.is.mobile ? 'opacity:0.1':'opacity:0.1'" -->
    </q-img>
    <div>
      <navigation card-title="Form Pendaftaran Online" />

      <!-- align="right" -->
      <q-badge :floating="$q.screen.gt.md" class="transparent q-ml-md">
        <stepper
          :style="$q.platform.is.mobile ? 'font-size:10px' : ''"
          :done="$route.params.id"
          :edit="store.components.state.formEditing"
          :confirm="store.components.state.isConfirm"
        />
      </q-badge>
    </div>

    <div class="row q-mt-sm">
      <!-- STEP 1 -->
      <step-1 />

      <!-- Step 2 -->
      <!-- <div v-if="!$route.params.id" v-show="showNext" class="col-md q-ml-sm"> -->
      <!-- <skeleton-detail-pasien /> -->
      <step-2 />
      <!-- </div> -->
      <transition
        appear
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOut"
      >
        <div v-if="$route.params.id" v-show="showNext" class="col-md q-ml-sm">
          <!-- SKELETONDATAPASIEN -->
          <!-- <form-pasien-skeleton /> -->
          <dialog-confirm />
        </div>
      </transition>
    </div>
  </q-card>
</template>

<script>
import CardDoctor from "../CardDoctor.vue";
import { inject, ref, onMounted } from "vue";
import Stepper from "./Stepper.vue";
import OldPatientForm from "./OldPatientForm.vue";
import DialogConfirm from "./DialogConfirm.vue";
import Navigation from "../button/Navigation.vue";
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
// import FormPasienSkeleton from "./FormPasienSkeleton.vue";
// import SkeletonDetailPasien from "./SkeletonDetailPasien.vue";

export default {
  components: {
    // CardDoctor,
    Stepper,
    // OldPatientForm,
    DialogConfirm,
    Navigation,
    Step1,
    Step2,
    // FormPasienSkeleton,
  },
  // SkeletonDetailPasien,
  setup() {
    const showCard = ref(false);
    setTimeout(() => {
      showCard.value = true;
    }, 100);
    const showNext = ref(false);
    setTimeout(() => {
      showNext.value = true;
    }, 500);

    const store = inject("store");
    return {
      store,
      showCard,
      showNext,
    };
  },
};
</script>

<style>
.step {
  display: flex;
}
.step:before {
  display: none;
}
.step:after {
  content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
  text-decoration: line-through;
}
</style>
