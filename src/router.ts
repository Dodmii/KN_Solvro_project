import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./components/MainPage.vue";
import FavoriteCocktails from "./components/FavoriteCocktails.vue";
import CocktailsList from "./components/.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main.page",
      component: MainPage,
    },
    {
      path: "/ulubione",
      component: FavoriteCocktails,
      name: "jobs",
    },
    {
      path: "/koktaile",
      component: CocktailsList,
      name: "job.create",
    }
  ],
});



export default router;
