// import router from 'src/router'
import { ref } from "vue";
import { useRoute } from "vue-router";
import { SessionStorage } from "quasar";
import axios from "axios";

const state = {
  detail: ref([]),
  clinicLists: ref([]),
  searchText: ref(""),
  searchSpecialist: ref(""),
  searchDate: ref(""),
  isFiltered: ref(false),
  tempPoli: ref([]),
  kodePoli: ref(""),

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
  tempSelected: {
    id: "001",
    name: "tes",
    kd_poli: "tes",
    specialist: "tes",
    date: "tes",
    time: {
      start: "tes",
      end: "tes",
    },
  },

  getDataDokter: () => {
    const dayNumber = new Date(state.searchDate.value).getDay();

    state.detail.value = [];

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
            // console.log(dokter);
            const detail = {
              id: dokter.kd_dokter,
              name: dokter.nm_dokter,
              kd_poli: dokter.kd_poli,
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
            // SessionStorage.set("doctor", detail);
          } else {
            state.detail.value.push(null);
          }
        });
      });
  },
  getDoctorFromSessionStorage: () => {
    // return SessionStorage.getItem("doctor");
  },
  // getPoli: () => {
  //   axios.post(process.env.API_ENDPOINT + "poli").then((res) => {
  //     res.data.data.filter((each) => {
  //       // console.log(each.nama_poli.includes(state.tempPoli.value));
  //     });
  //   });
  // },
};

export default { state };
