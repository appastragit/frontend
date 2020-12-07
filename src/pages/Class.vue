<template>
  <f7-page>
    <Navbar />
    <f7-block class="head-content">
      <h2>Nombre de la clase</h2>
      <h3>Profesor - curso</h3>
    </f7-block>
    <f7-block class="botonera">
      <f7-button @click="section = 0">
        Novedades
      </f7-button>
      <f7-button @click="section = 1">
        Trabajos
      </f7-button>
    </f7-block>
    <f7-block
      v-if="section == 0"
      class="novedades-content"
    >
      Novedades
    </f7-block>
    <f7-block
      v-if="section == 1"
      class="trabajos-content"
    >
      Trabajos
    </f7-block>
  </f7-page>
</template>

<script>

import Navbar from '../components/navbar.vue';

export default {
  name: 'Class',
  components: {
    Navbar,
  },
  data() {
    return {
      section: 0,
    };
  },
  computed: {

  },

  methods: {

  },
};
</script>

<style scoped>
.head-content {
  text-align: center;
  border: 1px solid black;
  padding: 1em;
  margin: 1em;
}
.botonera {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
</style>
