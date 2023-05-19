<template>
  <v-main>
    <v-container fluid class="d-flex flex-column fill-height bg-grey-lighten-4">
      <v-card height="100%" width="100%">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <v-fade-transition hide-on-leave>
              <component :is="Component"></component>
            </v-fade-transition>
          </template>
        </RouterView>
      </v-card>
    </v-container>
  </v-main>
</template>

<script setup>
//
</script>
