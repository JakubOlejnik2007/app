import { createRouter, createWebHashHistory } from "vue-router";
import AccountView from "../views/AccountView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import ReportView from "../views/ReportView.vue";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/report",
    name: "report",
    component: ReportView,
  },
  {
    path: "/account",
    name: "account",
    component: AccountView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
