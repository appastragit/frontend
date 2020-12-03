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
          :class="item.customClass"
        >
          <img
            :src="item.Icon"
            width="32px"
            class="margin-right"
          >
          <a
            href="#"
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
          customClass: 'noBorder',
        },
        {
          Title: 'Tareas',
          Role: 'Any',
          Icon: iconPrueba,
          customClass: 'borderBtn',
        },
        {
          Title: 'Mi Perfil',
          Role: 'Any',
          Icon: iconPrueba,
          customClass: 'borderBtn',
        },
        {
          Title: 'Gestionar usuarios',
          Role: 'Admin',
          Icon: iconPrueba,
          customClass: 'borderBtn',
        },
        {
          Title: 'Gestionar clases',
          Role: 'Admin',
          Icon: iconPrueba,
          customClass: 'borderBtn',
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

.noBorder {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.borderBtn {
  border-top: 1px solid rgb(221, 219, 219);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
</style>
