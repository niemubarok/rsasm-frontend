<template>
    <router-link to="/registration" style="text-decoration:none">
        <q-btn v-if="$route.path == '/'" no-wrap push text-color="grey-9" color="primary" icon="assignment"  label="Daftar Berobat" />
    </router-link>
</template>

<script>
import {inject} from 'vue'

export default {
    setup() {
        const store =  inject('store')
        return {
            store
        }
    },
}
</script>