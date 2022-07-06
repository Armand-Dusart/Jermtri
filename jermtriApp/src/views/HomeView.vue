<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <v-btn elevation="2" @click="testApi">TestApi</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Controller from "../controller/controller";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  controller: Controller = new Controller();

  async testApi() {
    const test = await this.controller.get("/");
    console.log(
      "🚀 ~ file: HomeView.vue ~ line 23 ~ HomeView ~ testApi ~ test",
      test
    );
  }
}
</script>
