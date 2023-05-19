<template>
  <v-app-bar color="indigo" title="Secure Layout" modelValue>
    <template v-slot:append>
      <v-btn @click="appStore.logout()" variant="text">Logout</v-btn>
      <v-app-bar-nav-icon to="/" icon="mdi-home-import-outline" class="mx-4" />
    </template>
  </v-app-bar>
</template>
<script setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>
