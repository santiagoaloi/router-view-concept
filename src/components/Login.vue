<template>
  <v-card
    width="500"
    v-if="!appStore.isLoggedIn"
    class="rounded-lg px-11 pt-5 bg-grey-lighten-5 mx-auto"
  >
    <VCardTitle class="text-h5 font-weight-bold my-8"> Sign in </VCardTitle>
    <VCardSubtitle>Credentials are admin / vuetify </VCardSubtitle>
    <VCardText>
      <v-form> </v-form>
      <v-text-field v-model="loginForm.account" label="Account" />
      <v-text-field
        type="password"
        v-model="loginForm.password"
        label="Password"
      />
      <div class="d-flex justify-end">
        <v-btn
          :loading="loading"
          @click="login()"
          color="indigo"
          :ripple="false"
          >Continue</v-btn
        >
      </div>
    </VCardText>
  </v-card>
  <isLoggedIn v-else />
</template>
<script setup>
import { reactive, ref } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import isLoggedIn from "@/components/IsLoggedIn.vue";

const loginForm = reactive({
  account: "admin",
  password: "vuetify",
});

const router = useRouter();

const loading = ref(false);
const appStore = useAppStore();

async function login() {
  loading.value = true;
  const { success } = await appStore.signInWithPassword({
    ...loginForm,
  });
  if (success) {
    appStore.isLoggedIn = true;
    router.push("/secure");
  }
}
</script>
