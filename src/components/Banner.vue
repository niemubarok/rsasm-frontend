<template>
  <!-- <div class="rounded-borders q-ml-md q-pa-md" > -->
  <q-carousel
    v-model="slide"
    swipeable
    animated
    :thumbnails="$q.screen.gt.md"
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    :class="
      $q.screen.gt.md ? 'q-ml-lg  rounded-borders q-mt-sm' : 'shadow-2 roundedCard'
    "
    :style="
      $q.screen.lt.md
        ? 'height:250px;width:100vw;border-bottom-left-radius:10px;border-bottom-right-radius:10px;'
        : 'height:300px'
    "
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <!-- class="rounded-borders q-mt-sm" -->
    <q-carousel-slide
      :name="1"
      img-src="~assets/img/banner-world-health-day.jpg"
    />
    <q-carousel-slide
      :name="2"
      img-src="https://cdn.quasar.dev/img/parallax1.jpg"
    />
    <q-carousel-slide
      :name="3"
      img-src="https://cdn.quasar.dev/img/parallax2.jpg"
    />
    <q-carousel-slide
      :name="4"
      img-src="https://cdn.quasar.dev/img/quasar.jpg"
    />
  </q-carousel>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
