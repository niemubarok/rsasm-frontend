import { reactive, computed, inject } from "vue";
import { date } from "quasar";

const store = inject("store");

const state = reactive({
  leftDrawerOpen: false,
  showSwipeIcon: true,
  showBanner: true,
  showPartnerSection: true,
  searchBoxClicked: false,
  isNewPatient: false,
  isOldPatient: false,
  formEditing: false,
  dialogConfirm: false,
  isConfirm: false,
  todaySelected: false,
  today: function () {
    return Date.now();
  },
});

setTimeout(() => {
  state.showSwipeIcon = false;
}, 2500);

export default {
  state,
};
