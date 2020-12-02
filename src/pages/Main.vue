<template>
  <f7-page>
    <Sidenav />
    <f7-button
      raised
      panel-open="left"
    >
      Open left panel
    </f7-button>
  </f7-page>
</template>

<script>

import Sidenav from '../components/sidenav.vue';

export default {
  name: 'Main',
  components: {
    Sidenav,
  },
};
</script>

<style scoped>

</style>
