import { boot } from 'quasar/wrappers'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
 app.component("v-select", vSelect);
})
