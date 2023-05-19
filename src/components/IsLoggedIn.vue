<template>
  <v-container
    fluid
    class="d-flex flex-column fill-height align-center justify-center"
  >
    <div class="text-h3">Hey, admin</div>
    Your are already authenticated.
    <div class="mt-5">
      <v-btn to="/secure" variant="flat">Go to dashboard</v-btn>
      <v-btn @click="appStore.logout()" variant="text">Logout</v-btn>
    </div>
  </v-container>
</template>
<script setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
</script>
