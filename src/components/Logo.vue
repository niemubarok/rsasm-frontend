<template>
    <q-img
        :src="`data:image/png;base64,${logo()}`"
        spinner-color="orange"
        height="50px"
        style="max-width: 50px"
    />
</template>

<script>

import { inject } from 'vue'
import { encode } from 'base64-arraybuffer'
export default {
    setup() {

        const store = inject("store")
        const logo = ()=> encode(store.components.state.settings?.logo?.data)
        return {
            logo
        }
    }
}
</script>