<template>
  <v-row no-gutters class="fill-height">
    <v-col style="background: #f4f4f8" cols="2">
      <v-tabs
        color="indigo"
        class="mt-2"
        direction="vertical"
        mandatory
        v-model="currentTabRoute"
      >
        <v-tab
          :ripple="false"
          :to="item.route"
          v-for="item in items"
          :key="item.route"
          :value="item.route"
        >
          {{ item.tabName }}
        </v-tab>
      </v-tabs>
    </v-col>
    <v-col>
      <RouterView />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const items = [
  {
    tabName: "Basic",
    route: "basic",
  },
  {
    tabName: "Integrations",
    route: "integrations",
  },
];

const currentTabRoute = ref();
</script>
