<template>
  <v-main>
    <v-container class="d-flex fill-height">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <v-fade-transition hide-on-leave>
            <component :is="Component"></component>
          </v-fade-transition>
        </template>
      </RouterView>
    </v-container>
  </v-main>
</template>

<script setup>
//
</script>
