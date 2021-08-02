<template>
  <q-card 
  class="my-card q-ma-sm" 
  style="border-left:1px solid #527C51;border-right:6px solid #527C51;  border-radius: 30px;max-height:200px;margin-top:35px;width:80vw; background-color:rgb(249,166,2, 0.6)" 
  :style="$q.screen.gt.xs ? 'width:250px;': '' " >
      <q-card-section horizontal>
        <q-card-section style="margin-left:10%; margin-top:-10%">
            <q-avatar size="80px" class="shadow-8 ">
                <img :src="pictureUrl" />
            </q-avatar>
            <q-badge style="margin-left:-15px;background-color:rgb(31,50,63, 1)" class="text-light shadow-10 q-px-lg q-py-sm" align="middle"  rounded :label="'Klinik ' + specialist"  text-color="primary" size="sm"/>
        </q-card-section>
      </q-card-section>
        <q-card-section style="margin-top:-25px">
          <div class="text-h6 text-center" style="text-overflow:ellipsis;overflow:hidden;">
            <span class="text-accent text-light" >
              {{doctor}}
            </span>
          </div>
        </q-card-section>
      <q-separator style="margin-top:-15px"/>

      <q-card-actions>
        <q-btn class="text-grey-8" flat round icon="schedule" />
          <strong class="text-grey-8">
            {{time.start}} - {{time.end}}
          </strong> 
          <q-space/>
        <q-btn rounded color="secondary" label="Daftar"/>
          <!-- Daftar
        </q-btn> -->
      </q-card-actions>
    </q-card>
</template>

<script>

export default {
  props :[ 'pictureUrl', 'specialist', 'doctor', 'time' ]
}
</script>
