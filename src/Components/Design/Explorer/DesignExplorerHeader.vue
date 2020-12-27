<template>
  <div class="design-explorer-header">
    <float left></float>
    {{ title }}
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";

import FloatComponent from "@Components/Common/Float.vue";

@Options({
  components: {
    float: FloatComponent,
  },
})
export default class DesignExplorerHeader extends Vue {
  @Prop({
    type: String,
  })
  private title: string = "";
}
</script>
<style lang="scss">
.design-explorer-header {
  position: relative;
  width: 100%;
  height: 32px;
  line-height: 32px;
  padding: 0 14px;
  background: linear-gradient(180deg, #e7e7e7 50%, #cacaca);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>