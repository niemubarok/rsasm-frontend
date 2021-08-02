<template>
    <q-card
            flat
            class="transparent q-mt-sm q-pa-sm"
            style="border-radius: 30px; border-left: 1px solid grey"
            :style="
              $q.screen.gt.sm
                ? 'width:80%;margin-left:20px;'
                : 'width:85vw;'
            "
          >
          <div>
            <!-- <q-skeleton type="QChip" /> -->
            <div>
              <q-chip color="grey-6" text-color="grey-3">
                <q-avatar color="grey-5" text-color="grey-7"
                  ><strong>2</strong></q-avatar
                >
                Isi Data Pasien
              </q-chip>
            </div>
            <q-card-section>
              <span class="text-grey-6"> NIK </span>
            <q-skeleton type="input" />
            </q-card-section>
            <q-card-section>
              <span class="text-grey-6"> Nama Lengkap </span>
            <q-skeleton type="input" />
            </q-card-section>
            <q-card-section>
              <span class="text-grey-6"> TTL </span>
            <q-skeleton type="input" />
            </q-card-section>
            <q-card-section>
              <span class="text-grey-6"> Nomor HP </span>
            <q-skeleton type="input" />
            </q-card-section>
          </div>

  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  }
}
</script>
