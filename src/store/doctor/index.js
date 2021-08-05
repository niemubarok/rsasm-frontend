// import router from 'src/router'
import { ref } from "vue";
import { useRoute } from "vue-router";
import { date } from "quasar";
import axios from "axios";
import data from "../patient";

const today = () => {
  return date.formatDate(Date.now, "DD-MM-YYYY");
};

const state = {
  // detail: [
  //   {
  //     id: "001",
  //     name: "dr. Abdurrahman, Sp.P",
  //     specialist: "paru",
  //     date: "03-08-2021",
  //     time: {
  //       start: "07.50",
  //       end: "08.50",
  //     },
  //     url: "/img/abdurrahman.jpg",
  //   },
  // ],
  detail: ref([]),
  clinicLists: ref(["Gigi", "Internis", "Kandungan", "Mata"]),
  searchText: ref(""),
  searchSpecialist: ref(null),
  searchDate: ref(""),
  isFiltered: ref(false),
  filterBy: {
    any: function () {
      return state.detail.filter((filtered) => {
        const typedText = state.searchText.value.toLowerCase();
        const selectedDate = state.searchDate.value;
        const selectedSpecialist =
          state.searchSpecialist.value !== null
            ? state.searchSpecialist.value.toLowerCase()
            : "";

        // const filteredByDate = filtered.date.includes(selectedDate);

        // FILTERED BY DATE THEN BY SPECIALIST

        if (selectedDate !== "") {
          if (selectedSpecialist !== "") {
            data.isFiltered.value = true;
            return (
              filtered.date == selectedDate &&
              filtered.specialist.toLowerCase().includes(selectedSpecialist)
            );
          } else if (selectedSpecialist !== "") {
            data.isFiltered.value = true;
            return (
              filtered.date == selectedDate &&
              filtered.name.toLowerCase().includes(typedText)
            );
          }

          return filtered.date.includes(selectedDate);
        }
        const today = date.formatDate(Date.now(), "DD-MM-YYYY");
        return (
          filtered.date.includes(today) &&
          filtered.specialist.toLowerCase().includes(selectedSpecialist)
        );
      });
    },
    time: function () {
      return state.detail.filter((filtered) => {
        return filtered.date.includes(state.searchText.value);
      });
    },
    // selectedDate: ref(""),
    today: function () {
      const today = date.formatDate(Date.now(), "DD-MM-YYYY");
      return this.filterByTime(today);
    },
  },

  filterDokter: () => {
    return state.detail.value.filter((dokter) => {
      const selectedSpecialist =
        state.searchSpecialist.value !== null
          ? state.searchSpecialist.value
          : "";
      // console.log(dokter.specialist.includes("POLI OBGYN"));
      return dokter.specialist.includes(selectedSpecialist);
    });
  },

  doctorId() {
    const route = useRoute();
    if (route.params.id) {
      return route.params.id;
    }
    return false;
  },
  selected() {
    return this.detail.find((item) => item.id == this.doctorId());
  },
  filterByTime: function () {
    return this.detail.filter((filtered) => {
      return filtered.date.includes(this.selectedDate.value);
    });
  },
  selectedDate: ref(""),
  today: function () {
    const today = date.formatDate(Date.now(), "DD-MM-YYYY");
    console.log(today);
    return this.filterByTime(today);
  },

  getDataDokter: () => {
    const changeFormatSearchDate = date.formatDate(
      state.searchDate.value,
      "DD-MMMM-YYYY"
    );
    const dayNumber = new Date(state.searchDate.value).getDay();

    state.detail.value = [];
    state.clinicLists.value = [];
    axios
      .post("http://127.0.0.1:3333/api/dokter", {
        data: {
          hari: dayNumber,
        },
      })
      .then((res) => {
        return Object.values(res.data.data).forEach((dokter) => {
          // console.log(Object.keys(dokter).length);
          const detail = {
            id: dokter.kd_dokter,
            nama: dokter.nm_dokter,
            specialist: dokter.nm_poli,
            date: state.searchDate.value,
            time: {
              start: dokter.jam_mulai,
              end: dokter.jam_selesai,
            },
          };
          // console.log(detail);
          // const listPoli = dokter.filter(
          //   (x, i, a) => a.indexOf(x) == i
          // );
          state.clinicLists.value.push(dokter.nm_poli);
          state.detail.value.push(detail);
          // console.log(state.clinicLists.value);
        });
      });
  },
};

export default { state };
