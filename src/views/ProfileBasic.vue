<template>
  <v-container>
    <v-row class="d-flex flex-column">
      <v-col :key="field.label" v-for="field in fields" cols="5">
        <v-text-field
          density="comfortable"
          hide-details
          :label="field.label"
          variant="solo"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const fields = [
  { label: "name" },
  { label: "Last name" },
  { label: "Phone" },
  { label: "Address" },
];
</script>
