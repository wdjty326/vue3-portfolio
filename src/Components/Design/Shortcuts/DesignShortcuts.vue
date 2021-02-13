<template>
  <div class="design-shortcuts">
    <div></div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";

@Options({})
export default class DesignToolbar extends Vue {}
</script>
<style lang="scss">
.design-shortcuts {
  width: 100%;
  height: 64px;
  padding: 0 64px;
  line-height: 24px;

  > div {
    width: 100%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.8);

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}
</style>