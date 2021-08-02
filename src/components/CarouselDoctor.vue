<template>
  <!-- :style="$q.screen.xs ? 'background-image:url(\'https://cdn.quasar.dev/img/mountains.jpg\'); margin:auto;' : ''"  -->
  <q-scroll-area
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
    :style="scrollAreaStyle"
  >
    <div class="row justify-center" :class="rowClass">
      <div
        v-for="(item, index) of store.doctor.filterBy.any()"
        :key="index"
        :class="$q.screen.gt.md ? 'items-center q-ma-sm' : ''"
      >
        <card-doctor
          :id="item.id"
          :picture-url="item.url"
          :doctor="item.name"
          :specialist="item.specialist"
          :time="item.time"
        />
      </div>
    </div>

    <!-- swipe ICON -->
    <div
      v-if="$q.screen.lt.sm && store.components.state.showSwipeIcon"
      class="row"
      style="margin-top: -150px; margin-left: 100px"
    >
      <q-icon name="swipe" size="100px" color="red" />
    </div>

    <!-- SCROLL ICON -->
    <!-- <q-page-sticky  v-if="showScrollGuide " position="right" :offset="[18, 100]">
      <q-btn flat label="scroll" color="accent" icon-right="arrow_forward" class="rotate-90" >
    </q-btn>
    </q-page-sticky> -->
  </q-scroll-area>
</template>

<script>
import { ref, inject, onMounted } from "vue";
import CardDoctor from "/src/components/CardDoctor.vue";

export default {
  components: { CardDoctor },
  props: {
    scrollAreaStyle: {
      type: String,
      default: "",
    },
    rowClass: {
      type: String,
      default: "",
    },
  },
  setup() {
    const store = inject("store");
    const showScrollGuide = ref(false);
    const style = () => {
      if (store.components.state.searchBoxClicked) {
        return "height:100vh";
      }
    };

    onMounted(() => {
      store.doctor.searchDate.value = store.components.state.today();
    });

    return {
      showScrollGuide,
      store,
      slide: ref(1),
      thumbStyle: {
        right: "5px",
        borderRadius: "8px",
        backgroundColor: "#E8A216",
        width: "8px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "14px",
        backgroundColor: "#E8A216",
        width: "14px",
        opacity: 0.2,
        marginTop: "-3px",
        marginBottom: "-3px",
        paddingTop: "3px",
        paddingBottom: "3px",
      },
    };
  },
};
</script>
