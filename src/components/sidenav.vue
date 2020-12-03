<template>
  <f7-panel
    left
    cover
  >
    <f7-block>
      <div class="content-menu-header">
        <div class="menu-header-item">
          <img
            :src="userIcon"
            width="75px"
            height="75px"
            class="user-avatar"
          >
        </div>
        <div class="menu-header-item">
          <div class="menu-userdata">
            Antonio Manuel Rodiguez de las Fuentes
          </div>
        </div>
      </div>
      <f7-list>
        <f7-list-item
          v-for="(item, i) in sideMenuContent"
          :key="i"
        >
          <img
            :src="item.Icon"
            width="32px"
          >
          <a
            href="#"
            class="sidenav-item"
          >
            {{ item.Title }}
          </a>
        </f7-list-item>
      </f7-list>
    </f7-block>
  </f7-panel>
</template>

<script>

import userIcon from '../static/img/pruebaUser.jpg';
import iconPrueba from '../static/icons/ic-prueba.svg';

export default {
  name: 'Sidenav',

  data() {
    return {
      sideMenuContent: [
        {
          Title: 'Mis clases',
          Role: 'Any',
          Icon: iconPrueba,
        },
        {
          Title: 'Tareas',
          Role: 'Any',
          Icon: iconPrueba,
        },
        {
          Title: 'Mi Perfil',
          Role: 'Any',
          Icon: iconPrueba,
        },
        {
          Title: 'Gestionar usuarios',
          Role: 'Admin',
          Icon: iconPrueba,
        },
        {
          Title: 'Gestionar clases',
          Role: 'Admin',
          Icon: iconPrueba,
        },
      ],
    };
  },

  computed: {
    userIcon() {
      return userIcon;
    },
    iconPrueba() {
      return iconPrueba;
    },
  },

  methods: {

  },
};
</script>

<style>
.content-menu-header {
  text-align: center;
}
.user-avatar {
  border-radius:50%
}
.menu-userdata {
  padding-top:10px;
  padding-left: 15px;
  padding-right: 15px;
}
.sidenav-item {
  text-align: left;
}
</style>
