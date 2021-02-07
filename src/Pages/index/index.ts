import { createApp } from "vue";
import Index from "./Index.vue";

import { LoadComponents } from "@Components/LoadComponents";

const app = LoadComponents(createApp(Index));
app.mount("#app");
