import { reactive } from "vue";

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
    return new Date(Date.now()).getDate();
  },
});

setTimeout(() => {
  state.showSwipeIcon = false;
}, 2500);

export default {
  state,
};
