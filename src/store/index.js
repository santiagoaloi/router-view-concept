// Utilities
import { createPinia } from "pinia";
import router from "@/router";
import { markRaw } from "vue";

//https://github.com/prazdevs/pinia-plugin-persistedstate
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

// 👉 Router can be used in any pinia store module.
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

pinia.use(piniaPluginPersistedstate);

export default pinia;
