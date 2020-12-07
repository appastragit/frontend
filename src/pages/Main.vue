<template>
  <f7-page>
    <Navbar />
    <Sidenav />
    <f7-button
      raised
      panel-open="left"
    >
      Open left panel.
    </f7-button>
  </f7-page>
</template>

<script>

import Sidenav from '../components/sidenav.vue';
import Navbar from '../components/navbar.vue';

export default {
  name: 'Main',
  components: {
    Sidenav,
    Navbar,
  },
};
</script>

<style scoped>

</style>
