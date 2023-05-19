<template>
  <v-app>
    <AppBar />
    <Drawer />
    <secure-view />
  </v-app>
</template>

<script setup>
import SecureView from "./View.vue";
import AppBar from "./layout-components/SecureAppBar.vue";
import Drawer from "./layout-components/SecureDrawer.vue";
</script>
