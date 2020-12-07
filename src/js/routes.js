import LoginPage from '../pages/Login.vue';
import RegisterPage from '../pages/Register.vue';
import MainPage from '../pages/Main.vue';
import ClassPage from '../pages/Class.vue';

const routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/main',
    component: MainPage,
  },
  {
    path: '/class',
    component: ClassPage,
  },
];

export default routes;
