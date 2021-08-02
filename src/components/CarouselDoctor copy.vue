<template>
  <!-- <div class="q-pa-sm fit no-wrap" > -->
    <q-scroll-area
    virtual-scroll-horizontal
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      :style="$q.screen.lt.sm ? 'height: 55vh' : 'height: 40vh'"
        id="scroll-area-with-virtual-scroll-1"
      :class="$q.screen.lt.sm ? 'q-pt-sm' : '' "
    >
      <!-- class="q-pt-lg" -->
        <div :class="$q.screen.gt.md ? 'row items-center q-ma-lg q-mt-lg' : ''">
            <card-doctor 
            v-for="data in filterBy" 
            :key="data.name" 
            :pictureUrl="data.url" 
            :doctor="data.name"
            :specialist="data.specialist" />

        </div>
   </q-scroll-area>
  <!-- </div> -->
</template>

<script>
import { ref, inject, computed } from 'vue'
import CardDoctor from './CardDoctor.vue'

export default {
  components: { CardDoctor },
  setup () {
      const store = inject('store')

      const filterBy = computed(()=>{
          return store.doctor.detail.filter((data)=>{
            const typedText = store.doctor.searchName.value.toLowerCase()
            return data.name.toLowerCase().includes(typedText) || data.specialist.toLowerCase().includes(typedText)
            // return searchDoctor 
         })
      })
    return {
        store,
        filterBy,
        slide: ref(1),
        thumbStyle: {
        right: '5px',
        borderRadius: '8px',
        backgroundColor: '#E8A216',
        width: '8px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '14px',
        backgroundColor: '#E8A216',
        width: '14px',
        opacity: 0.2,
        marginTop: '-3px',
        marginBottom: '-3px',
        paddingTop: '3px',
        paddingBottom: '3px'
      }
    }
  }
}
</script>