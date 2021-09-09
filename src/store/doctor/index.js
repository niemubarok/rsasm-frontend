// import router from 'src/router'
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { date, SessionStorage } from "quasar";
import axios from "axios";

const state = {
  detail: ref([]),
  clinicLists: ref([]),
  searchText: ref(""),
  searchSpecialist: ref(""),
  searchDate: ref(""),
  isFiltered: ref(false),
  tempPoli: ref([]),

  filterDokter: () => {
    if (Object.keys(state.getDoctorFromSessionStorage).length != 0) {
      return Object.values(state.getDoctorFromSessionStorage).filter(
        (dokter) => {
          return (
            dokter
              .specialist()
              .toUpperCase()
              .includes(state.searchSpecialist.value.toUpperCase()) ||
            dokter.name
              .toUpperCase()
              .includes(state.searchSpecialist.value.toUpperCase())
          );
        }
      );
    } else {
      return state.detail.value.filter((dokter) => {
        return (
          dokter
            .specialist()
            .toUpperCase()
            .includes(state.searchSpecialist.value.toUpperCase()) ||
          dokter.name
            .toUpperCase()
            .includes(state.searchSpecialist.value.toUpperCase())
        );
      });
    }
  },

  doctorId() {
    const route = useRoute();
    if (route.params.id) {
      return route.params.id;
    }
    return false;
  },
  selected: [],
  selectedDate: ref(""),

  getDataDokter: () => {
    const dayNumber = new Date(state.searchDate.value).getDay();

    state.detail.value = [];
    // state.clinicLists.value = [];

    axios
      .post(
        process.env.API_ENDPOINT + "dokter",
        {
          data: {
            hari: dayNumber,
          },
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((res) => {
        state.clinicLists.value = Object.values(res.data.data)
          .map((item) => item.nm_poli.replace("POLI", ""))
          .filter((value, index, self) => self.indexOf(value) == index);

        return Object.values(res.data.data).forEach((dokter) => {
          if (dokter) {
            const detail = {
              id: dokter.kd_dokter,
              name: dokter.nm_dokter,
              specialist: () => {
                return dokter.nm_poli.replace("POLI", "");
              },
              date: state.searchDate.value,
              time: {
                start: dokter.jam_mulai,
                end: dokter.jam_selesai,
              },
            };

            state.tempPoli.value.push(
              dokter.nm_poli.replace("POLI", "SPESIALIS")
            );
            state.detail.value.push(detail);
            SessionStorage.set("doctor", detail);
          } else {
            state.detail.value.push(null);
          }
          // console.log(SessionStorage.getItem('doctor'));
        });
      });
  },
  getDoctorFromSessionStorage: () => {
    return SessionStorage.getItem("doctor");
  },
  getPoli: () => {
    axios.post(process.env.API_ENDPOINT + "poli").then((res) => {
      res.data.data.filter((each) => {
        // console.log(each.nama_poli.includes(state.tempPoli.value));
      });
    });
  },
};

export default { state };

// filterBy: {
//   any: function () {
//     return state.detail.filter((filtered) => {
//       const typedText = state.searchText.value.toLowerCase();
//       const selectedDate = state.searchDate.value;
//       const selectedSpecialist =
//         state.searchSpecialist.value !== null
//           ? state.searchSpecialist.value.toLowerCase()
//           : "";

//       // const filteredByDate = filtered.date.includes(selectedDate);

//       // FILTERED BY DATE THEN BY SPECIALIST

//       if (selectedDate !== "") {
//         if (selectedSpecialist !== "") {
//           data.isFiltered.value = true;
//           return (
//             filtered.date == selectedDate &&
//             filtered.specialist.toLowerCase().includes(selectedSpecialist)
//           );
//         } else if (selectedSpecialist !== "") {
//           data.isFiltered.value = true;
//           return (
//             filtered.date == selectedDate &&
//             filtered.name.toLowerCase().includes(typedText)
//           );
//         }

//         return filtered.date.includes(selectedDate);
//       }
//       const today = date.formatDate(Date.now(), "DD-MM-YYYY");
//       return (
//         filtered.date.includes(today) &&
//         filtered.specialist.toLowerCase().includes(selectedSpecialist)
//       );
//     });
//   },
//   time: function () {
//     return state.detail.filter((filtered) => {
//       return filtered.date.includes(state.searchText.value);
//     });
//   },
//   // selectedDate: ref(""),
//   today: function () {
//     const today = date.formatDate(Date.now(), "DD-MM-YYYY");
//     return this.filterByTime(today);
//   },
// },
