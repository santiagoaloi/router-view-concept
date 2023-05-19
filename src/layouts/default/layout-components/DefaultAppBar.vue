<template>
  <v-app-bar color="indigo" title="Public Layout" modelValue>
    <template v-slot:append>
      <v-app-bar-nav-icon
        to="/secure"
        icon="mdi-view-dashboard"
      ></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>
