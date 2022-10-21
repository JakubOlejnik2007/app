import { createRouter, createWebHashHistory } from "vue-router";
import AccountView from "../views/AccountView.vue";
import HomeView from "../views/HomeView.vue";
import WycinkaDrzewa from "../views/WycinkaDrzewa.vue";
import RejestracjaPojazdu from "../views/RejestracjaPojazdu";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/account",
    name: "account",
    component: AccountView,
  },
  {
    path: "/wycinka-drzewa",
    name: "wycinka-drzewa",
    component: WycinkaDrzewa,
  },
  {
    path: "/rejestracja-pojazdu",
    name: "rejestracja-pojazdu",
    component: RejestracjaPojazdu,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
