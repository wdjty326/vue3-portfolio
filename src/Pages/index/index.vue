<template>
  <div class="index">
    <finder title="index"></finder>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";

import IconFinder from "@Components/IconFinder.vue";

@Options({
  components: {
    "finder": IconFinder,
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