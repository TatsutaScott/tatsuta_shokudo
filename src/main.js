import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import front from "@/pages/front-page.vue";
import index from "@/pages/index-page.vue";
import recipe from "@/pages/recipe-page.vue";
import about from "@/pages/about-page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: front },
    { path: "/index", component: index },
    { path: "/about", component: about },
    {
      path: "/recipe/:name",
      component: recipe,
      props: true,
    },
  ],
});
createApp(App).use(router).mount("#app");
