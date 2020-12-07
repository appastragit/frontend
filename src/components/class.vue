<template>
  <f7-block
    class="class-block"
  >
    <h2>Nombre de la clase</h2>
    <h3>Breve descripción de la clase</h3>
    <f7-button
      href="/class/"
    >
      entrar
    </f7-button>
  </f7-block>
</template>

<script>

export default {
  name: 'Class',

  data() {
    return {
    };
  },

  computed: {

  },

  methods: {

  },
};

</script>

<style>
.class-block {
    border: 1px solid black;
    margin: 1em;
    padding: 1em;
    width: 60%;
}
</style>
