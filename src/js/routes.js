import LoginPage from '../pages/Login.vue';
import RegisterPage from '../pages/Register.vue';

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
];

export default routes;
