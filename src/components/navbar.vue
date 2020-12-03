<template>
  <f7-navbar>
    <div class="navbar-item">
      <img
        :src="appIcon"
        height="50px"
      >
    </div>
  </f7-navbar>
</template>

<script>
import appIcon from '../static/img/appastra.png';

export default {
  name: 'Sidenav',

  data() {
    return {
    };
  },

  computed: {
    appIcon() {
      return appIcon;
    },
  },

  methods: {

  },
};

</script>

<style>
div.navbar-bg {
  background-color:rgb(42, 42, 42)
}
.navbar-item {
  padding: 1em;
  padding-top: 1.5em
}
</style>
