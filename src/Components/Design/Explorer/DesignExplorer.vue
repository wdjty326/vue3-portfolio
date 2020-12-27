<template>
  <div class="design-explorer">
    <design-explorer-header :title="title" />
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";

import DesignExplorerHeader from "@Components/Design/Explorer/DesignExplorerHeader.vue";

@Options({
  components: {
    "design-explorer-header": DesignExplorerHeader,
  },
})
export default class DesignExplorer extends Vue {
  @Prop({
    type: String,
  })
  private title: string = "";
}
</script>
<style lang="scss">
</style>