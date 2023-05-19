<template>
  <v-container>
    <v-row class="d-flex flex-column">
      <v-col v-for="field in fields" cols="5">
        <v-switch
          :model-value="true"
          color="indigo-accent-2"
          inset
          hide-details
          :label="field.label"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const fields = [{ label: "Linkedin" }, { label: "Google" }];
</script>
