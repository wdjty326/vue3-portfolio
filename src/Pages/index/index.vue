<template>
  <div class="index">
    <design-explorer title="index"></design-explorer>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";

import DesignExplorer from "@Components/Design/Explorer/DesignExplorer.vue";

@Options({
  components: {
    "design-explorer": DesignExplorer,
  },
})
export default class IndexComponent extends Vue {
  @Prop({})
  private test: number = 0;
}
</script>
<style lang="scss">
.index {
  width: 100%;
  height: 100%;

  background-image: url($AssetRoot + "/bg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>