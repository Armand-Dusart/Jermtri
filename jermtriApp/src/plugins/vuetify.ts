import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  directives: {
    Ripple,
  },
});
Vue.use(Vuetify);
//options: {
//    themeCache: {
//        get: (key: any) => localStorage[key],
//            set: (key: any, value: any) => localStorage.setItem(key, value),
//            },
//},
export default new Vuetify({
  lang: {
    current: navigator.language,
  },
  theme: {
    dark: localStorage["isDark"]
      ? localStorage["isDark"] === "true"
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
});
