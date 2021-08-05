<template>
  <!-- <info-header /> -->
  <banner
    :class="$q.screen.gt.sm ? 'q-ml-lg' : ''"
    v-if="!store.components.state.searchBoxClicked"
  />

  <!-- <div class="bg-primary"></div> -->

  <!-- LIST DOKTER YANG PRAKTEK HARI INI -->
  <div class="rounded-borders" :class="$q.screen.gt.sm ? 'q-mx-lg' : ''">
    <carousel-doctor
      :scroll-area-style="scrollArea()"
      :row-class="
        store.components.state.searchBoxClicked
          ? 'row justify-center '
          : 'no-wrap'
      "
    />
  </div>

  <!-- ARTIKEL -->
  <div class="q-my-md q-pl-md q-pb-md bg-grey-4">
    <!-- <Article /> -->
  </div>

  <!-- PARTNER SECTION -->
  <q-card
    v-if="!store.components.state.searchBoxClicked"
    class="bg-grey-2 q-ma-sm"
    style="
      border-left: 2px solid #527c51;
      border-right: 2px solid #527c51;
      border-radius: 30px;
    "
  >
    <div>
      <q-chip
        class="q-ml-lg bg-secondary text-light"
        size="sm"
        text-color="primary"
        label="Partner Kami"
      />
    </div>
    <div class="no-wrap row">
      <div class="row no-wrap full-width">
        <partner-logo />
      </div>
    </div>
  </q-card>
</template>

<script>
import Banner from "src/components/Banner.vue";
import { ref, inject } from "vue";
// import CardDoctor from 'src/components/CardDoctor.vue'
// import PartnerLogo from "src/components/PartnerLogo.vue";
import CarouselDoctor from "src/components/CarouselDoctor.vue";
import { useQuasar } from "quasar";
import Article from "src/components/Article.vue";
// import InfoHeader from "components/InfoHeader.vue"
// import {getDataDokter} from '/store'

export default {
  components: {
    Banner,
    // PartnerLogo,
    CarouselDoctor,
    // Article
  },
  setup() {
    const $q = useQuasar();
    const scrollArea = () => {
      console.log("scrollArea");
      if (store.components.state.searchBoxClicked) {
        return "height:90vh";
      } else if ($q.platform.is.mobile) {
        return "height:30vh;";
      }
      return "height:35vh;padding-top: 10px; margin-top: -5vh";
    };

    function setFocus() {
      let searchId = document.getElementById("search");
      searchId.focus();
    }
    const store = inject("store");

    const show = ref(true);



    return {
      scrollArea,
      show,
      setFocus,
      store,
    };
  },
};
</script>
