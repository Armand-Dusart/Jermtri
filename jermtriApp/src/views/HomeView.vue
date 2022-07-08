<template>
  <div class="home">
    <v-btn v-if="!loading" elevation="2" @click="testApi">TestApi</v-btn>
    <v-progress-circular
      v-else
      indeterminate
      color="green"
    ></v-progress-circular>
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Controller from "../controller/controller";

@Component
export default class HomeView extends Vue {
  controller: Controller = new Controller();
  loading: boolean = false;
  data: any = null;
  async testApi() {
    this.loading = true;
    const restoData = await this.controller.get("/restaurants/18");
    console.log(
      "🚀 ~ file: HomeView.vue ~ line 23 ~ HomeView ~ testApi ~ test",
      restoData
    );
    if (!!restoData) {
      this.data = restoData;
    }
    this.loading = false;
  }
}
</script>
