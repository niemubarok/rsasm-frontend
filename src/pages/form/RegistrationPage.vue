/* eslint-disable import/named */ /* eslint-disable import/export */
<template>
  <registration
    class="q-px-md"
    :class="$q.platform.is.mobile ? 'q-ml-xs' : 'q-ml-lg q-mt-xs q-pt-lg '"
  />
</template>

<script>
import Registration from "/src/components/form/Registration.vue";

export default {
  components: { Registration },
};
</script>

<style></style>
