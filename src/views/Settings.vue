<template>
  <v-tabs class="border-b" fixed-tabs mandatory v-model="currentTabRoute">
    <v-tab
      hide-slider
      color="indigo"
      :to="item.route"
      v-for="item in items"
      :key="item.route"
      :value="item.route"
      :ripple="false"
    >
      {{ item.tabName }}
    </v-tab>
  </v-tabs>

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <v-fade-transition hide-on-leave>
        <component :is="Component"></component>
      </v-fade-transition>
    </template>
  </RouterView>
</template>

<script setup>
import { ref } from "vue";

const items = [
  {
    tabName: "Profile Settings",
    route: "/secure/settings/profile",
  },
  {
    tabName: "Security settings",
    route: "/secure/settings/security",
  },
];

const currentTabRoute = ref();
</script>
