import { reactive, ref } from "vue";
import { date } from "quasar";
import axios from "axios";

const data = reactive({
  depo:  [
  { id: "FAR1", label: "Gudang" },
  { id: "FAR3", label: "Depo Rajal" },
],
  obat: "",
  petugas: "",
  real: 0,
  
  getObat: async () => {
    // console.log(process.env.API_ENDPOINT);
    return await axios.get(process.env.API_ENDPOINT+'opname/obat')
  }
  
});

export default data;
