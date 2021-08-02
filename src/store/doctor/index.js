// import router from 'src/router'
import { ref } from "vue";
import { useRoute } from "vue-router";
import { date } from "quasar";

const today = () => {
  return date.formatDate(Date.now, "DD-MM-YYYY");
};

const data = {
  detail: [
    {
      id: "001",
      name: "dr. Abdurrahman, Sp.P",
      specialist: "paru",
      date: "17-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "/img/abdurrahman.jpg",
    },
    {
      id: "002",
      name: "dr. Wulunggono, Sp.PD",
      specialist: "Internis",
      date: "17-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "003",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "17-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "004",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "17-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "005",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "17-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "006",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "17-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "8",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "06-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "9",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "10",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "11",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "10-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "12",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "14-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "13",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "15-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "14",
      name: "dr. Vincent",
      specialist: "Gigi",
      date: "14-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "15",
      name: "dr. Indra",
      specialist: "Kandungan",
      date: "14-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
  ],
  clinicSelectModel: ref([]),
  clinicList: [
    {
      label: "Gigi",
      value: 1,
      icon: "medical_services",
    },
    {
      label: "Internis",
      value: 2,
    },
    {
      label: "Kandungan",
      value: 3,
    },
    {
      label: "Mata",
      value: 4,
    },
    {
      label: "Orthopedi",
      value: 5,
    },
  ],
  clinicLists: ["Gigi", "Internis", "Kandungan", "Mata"],
  searchText: ref(""),
  searchSpecialist: ref(null),
  searchDate: ref(""),
  isFiltered: ref(false),
  filterBy: {
    any: function () {
      return data.detail.filter((filtered) => {
        const typedText = data.searchText.value.toLowerCase();
        const selectedDate = data.searchDate.value;
        const selectedSpecialist =
          data.searchSpecialist.value !== null
            ? data.searchSpecialist.value.toLowerCase()
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
      return data.detail.filter((filtered) => {
        return filtered.date.includes(data.searchText.value);
      });
    },
    // selectedDate: ref(""),
    today: function () {
      const today = date.formatDate(Date.now(), "DD-MM-YYYY");
      return this.filterByTime(today);
    },
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
};

export default data;
