<template>
  <router-view />
</template>
<script>
import { defineComponent,onBeforeMount, inject } from 'vue';


export default defineComponent({
  name: 'App',
  setup(){
    const store = inject("store")
    onBeforeMount(() => {
       store.components.state.getSettings();
    })
  }

})
</script>
