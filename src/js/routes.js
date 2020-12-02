import LoginPage from '../pages/Login.vue';
import RegisterPage from '../pages/Register.vue';
import MainPage from '../pages/Main.vue';

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
];

export default routes;
