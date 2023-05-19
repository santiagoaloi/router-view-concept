<template>
  <v-navigation-drawer color="grey-lighten-4" modelValue>
    <v-list color="indigo" nav>
      <v-list-item :ripple="false" :to="item.to" v-for="item in pages">
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const pages = [
  {
    title: "Dashboard",
    to: "/secure/dashboard",
  },
  {
    title: "Settings",
    to: "/secure/settings",
  },
];
</script>
