<template>
          <!-- loading="lazy" -->
  <q-img
          :src="`data:image/png;base64,${logo}`"
          spinner-color="white"
          height="50px"
          style="max-width: 50px"
        />

</template>

<script>

import {inject, onMounted} from 'vue'
import {encode} from 'base64-arraybuffer'
export default{
setup (){

    const store = inject("store")
    const settings = store.components.state.settings
    const logo = encode(settings.logo.data)

    onMounted(async()=>{
        await store.components.state.getSettings();
    })

return{
    logo
}
}
}
</script>