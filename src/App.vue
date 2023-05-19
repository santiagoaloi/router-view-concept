<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <v-fade-transition hide-on-leave mode="out-in">
        <component :is="Component"></component>
      </v-fade-transition>
    </template>
  </RouterView>
</template>
