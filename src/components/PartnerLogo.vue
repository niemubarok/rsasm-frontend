<template>
    <template v-for="image in images" :key="image">
         <q-img
          :src="image.url"
          loading="lazy"
          spinner-color="white"
          height="40px"
          style="max-width: 65px"
          class="q-ma-md"
          fit="fill"
          :alt="image.alt"
        />
    </template>
</template>

<script>
export default {
    setup() {
        const images = [
            {
                url: "~assets/img/logobpjs.png",
                alt:"logo bpjs"
            },
            {
                url: "~assets/img/logoadmedika.png",
                alt:"logo admedika"
            }
        ]

        return {
            images
        }
    },
}
</script>