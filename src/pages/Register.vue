<template>
  <f7-page login-screen>
    <f7-block
      class="register-content"
    >
      <f7-row class="content-register">
        <f7-col width="100">
          <div>
            <img
              :src="logoRegister"
              width="85%"
              class="margin-left"
            >
          </div>
        </f7-col>
        <f7-col width="100">
          <f7-list
            id="list-form"
            form
          >
            <f7-list-input
              outline
              label="Usuario"
              item-label
              type="text"
              placeholder="Usuario"
              clear-button
              name="username"
              max="255"
              autocomplete="on"
              required
              @input="username = $event.target.value"
            />
            <!-- Password -->
            <f7-list-input
              outline
              label="Contraseña"
              item-label
              type="password"
              placeholder="Contraseña"
              clear-button
              name="password"
              max="255"
              autocomplete="current-password"
              required
              @input="password = $event.target.value"
            />
            <f7-list-input
              outline
              label="Nombre"
              item-label
              type="text"
              placeholder="Nombre"
              clear-button
              name="nombre"
              max="255"
              autocomplete="on"
              required
              @input="nombre = $event.target.value"
            />
            <f7-list-input
              outline
              label="Apellidos"
              item-label
              type="text"
              placeholder="Apellidos"
              clear-button
              name="apellidos"
              max="255"
              autocomplete="on"
              required
              @input="apellidos = $event.target.value"
            />
            <f7-list-input
              outline
              label="Email"
              item-label
              type="text"
              placeholder="Email"
              clear-button
              name="email"
              max="255"
              autocomplete="on"
              required
              @input="email = $event.target.value"
            />
            <f7-list-input
              outline
              label="Fecha de nacimiento"
              item-label
              type="text"
              placeholder="Fecha de nacimiento"
              clear-button
              name="fecha_nacimiento"
              max="255"
              autocomplete="on"
              required
              @input="fecha_nacimiento = $event.target.value"
            />
            <f7-list-input
              outline
              label="País"
              item-label
              type="text"
              placeholder="País"
              clear-button
              name="d_pais"
              max="255"
              autocomplete="on"
              required
              @input="d_pais = $event.target.value"
            />
            <f7-list-input
              outline
              label="Provincia"
              item-label
              type="text"
              placeholder="Provincia"
              clear-button
              name="d_provincia"
              max="255"
              autocomplete="on"
              required
              @input="d_provincia = $event.target.value"
            />
            <f7-list-input
              outline
              label="Localidad"
              item-label
              type="text"
              placeholder="Localidad"
              clear-button
              name="d_localidad"
              max="255"
              autocomplete="on"
              required
              @input="d_localidad = $event.target.value"
            />
            <f7-list-input
              outline
              label="Código Postal"
              item-label
              type="text"
              placeholder="Código Postal"
              clear-button
              name="d_cp"
              max="255"
              autocomplete="on"
              required
              @input="d_cp = $event.target.value"
            />
            <f7-list-input
              outline
              label="Calle"
              item-label
              type="text"
              placeholder="Calle"
              clear-button
              name="d_calle"
              max="255"
              autocomplete="on"
              required
              @input="d_calle = $event.target.value"
            />
            <f7-list-input
              outline
              label="Número"
              item-label
              type="text"
              placeholder="Número Edificio/Casa/Local"
              clear-button
              name="d_numero"
              max="255"
              autocomplete="on"
              required
              @input="d_numero = $event.target.value"
            />
            <f7-list-input
              outline
              label="Piso"
              item-label
              type="text"
              placeholder="Piso"
              clear-button
              name="d_piso"
              max="255"
              autocomplete="on"
              required
              @input="d_piso = $event.target.value"
            />
            <f7-list-input
              outline
              label="Puerta"
              item-label
              type="text"
              placeholder="Puerta"
              clear-button
              name="d_puerta"
              max="255"
              autocomplete="on"
              required
              @input="d_puerta = $event.target.value"
            />
          </f7-list>
        </f7-col>
        <f7-col width="100">
          <f7-list>
            <f7-button
              col
              button
              button-large
              button-raised
              fill
              class="margin-top"
              @click="submit()"
            >
              Registrarse!
            </f7-button>
          </f7-list>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import logoRegister from '../static/img/appastradarkregister.png';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      nombre: '',
      apellidos: '',
      email: '',
      fecha_nacimiento: '',
      d_pais: '',
      d_provincia: '',
      d_localidad: '',
      d_cp: '',
      d_calle: '',
      d_numero: '',
      d_piso: '',
      d_puerta: '',
      finalObj: {
        username: '',
        password: '',
        nombre: '',
        apellidos: '',
        email: '',
        fecha_nacimiento: '',
        d_pais: '',
        d_provincia: '',
        d_localidad: '',
        d_cp: '',
        d_calle: '',
        d_numero: '',
        d_piso: '',
        d_puerta: '',
      },
    };
  },

  computed: {
    logoRegister() {
      return logoRegister;
    },
  },

  methods: {
    submit() {
      this.finalObj.username = this.username;
      this.finalObj.password = this.password;
      this.finalObj.nombre = this.nombre;
      this.finalObj.apellidos = this.apellidos;
      this.finalObj.email = this.email;
      this.finalObj.fecha_nacimiento = this.fecha_nacimiento;
      this.finalObj.d_pais = this.d_pais;
      this.finalObj.d_provincia = this.d_provincia;
      this.finalObj.d_localidad = this.d_localidad;
      this.finalObj.d_cp = this.d_cp;
      this.finalObj.d_calle = this.d_calle;
      this.finalObj.d_numero = this.d_numero;
      this.finalObj.d_piso = this.d_piso;
      this.finalObj.d_puerta = this.d_puerta;
    },
  },

};
</script>

<style scoped>
  .register-content{
    padding-left: 4em;
    padding-right: 4em;
    padding-top: 6em;
    padding-bottom: 6em;
    border: 2px solid rgb(31, 31, 31);
    transition: 0.6s all;
  }

  .register-content:hover {
    box-shadow: 10px 10px 14px 1px rgba(145,126,145,1);
  }

  .brand-text{
    font-weight: 700;
    font-size: 36px;
    text-align: center;
  }
</style>
