<template>
  <transition
    appear
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp"
  >
    <q-splitter  v-model="splitterModel" horizontal style="height: 100vh" :limits="[10,80]" reverse separator-class="bg-white" :after-class="{'overflow-hidden bg-white':$q.platform.is.mobile}" >
      <template  #before>
          <!-- v-if="$q.platform.is.mobile" -->
        <q-img
          class="full-width "
          :ratio="4/4"
          src="/img/Ok.gif"
        />
      </template>

        <template #separator>
        <q-avatar  v-if="$q.platform.is.mobile" class="transparent" text-color="primary" size="60px" icon="drag_handle" />
      </template>

      <template #after>
        <div 
         style="border-radius:30px"
        class="row justify-center q-mx-sm">
          <q-card
            class="bg-green-2 q-mx-md "
            :class="$q.screen.gt.sm ? ' q-mt-xl' : 'full-width q-mx-sm'"
            style="border-radius: 30px; width: 60vw; background-color: #609c71"
          >
            <!-- :style="$q.platform.is.mobile ? 'margin-top:35vh' : ''"/ -->
            <q-card-section
              horizontal
              class="text-grey-9"
              style="
                border-top-right-radius: 0px;
                border-bottom-right-radius: 0px;
              "
            >
              <q-img
                v-if="!$q.platform.is.mobile"
                class="col-4"
                src="/img/Ok.gif"
              />

              <q-card-section class="row justify-center text-center">
                <q-chip class="text-center text-primary bg-secondary">
                  Anda Berhasil Mendaftar
                </q-chip>
                <!-- <div> -->
                Kami telah mengirimkan detail pendaftaran anda via WHATSAPP
                <br />
                di no
                {{ store.patient.oldPatientForm.phone }}
                <!-- </div> -->
              </q-card-section>
              <!-- <q-card-section class="row items-center">
           
          </q-card-section> -->
            </q-card-section>
          </q-card>
          <q-card
            flat
            style="width: 400px; margin-top: -50px"
            class="
              transparent
              bg-white
              row
              items-center
              text-grey-9 text-bold
              q-py-md
            "
          >
            <div class="row justify-center">
              <h6 class="text-center">
                Arahkan qrcode berikut pada alat yang disediakan saat check in
              </h6>
              <img src="/img/qr-code-ex.png" style="width: 200px" />
            </div>
            <!-- style="border-radius: 30px;" -->
          </q-card>
        </div>
      </template>
    </q-splitter>
  </transition>
</template>

<script>
import { inject, ref } from "vue";
export default {
  setup() {
    return {
      splitterModel: ref(70),
      store: inject("store"),
    };
  },
};
</script>

<style></style>
