// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isSecretPageEnabled: false,
    isLoggedIn: false,
  }),

  persist: {
    //Persist only currentTheme
    paths: ["isLoggedIn", "isSecretPageEnabled"],
  },
  actions: {
    async signInWithPassword({ account, password }) {
      function verifyCredentials() {
        if (account === "admin" && password === "vuetify") return true;
        return false;
      }

      return new Promise((resolve) => {
        setTimeout(async () => {
          const validCredentials = verifyCredentials();

          resolve({ success: validCredentials });
        }, 2000); // Wait for 10 seconds (10000 milliseconds)
      });
    },
    logout() {
      this.isLoggedIn = false;
      this.router.push("/");
    },
  },
});
