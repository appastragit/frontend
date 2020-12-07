<template>
  <f7-page>
    <Navbar />
    <Sidenav />
    <class />
  </f7-page>
</template>

<script>

import Sidenav from '../components/sidenav.vue';
import Navbar from '../components/navbar.vue';
import Class from '../components/class.vue';

export default {
  name: 'Main',
  components: {
    Sidenav,
    Navbar,
    Class,
  },
};
</script>

<style scoped>

</style>
