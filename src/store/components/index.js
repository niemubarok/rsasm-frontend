import { reactive } from "vue";
import axios from 'axios';

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
  settings:"",
  getSettings: async () => {
     await axios({
      url: process.env.API_ENDPOINT + "settings",
      method: "GET",
     }).then(res => {
      // console.log(res);
      state.settings = res.data.data
    });
}
});

 

setTimeout(() => {
  state.showSwipeIcon = false;
}, 2500);

export default {
  state,
};
