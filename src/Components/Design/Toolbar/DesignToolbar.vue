<template>
  <div class="design-toolbar">
    <float left>
      <span class="icon-apple-logo"></span>
    </float>
    <float right>
      <button class="design-toolbar-button airplayvideo"></button>
      <button class="design-toolbar-button wifi"></button>
      <button class="design-toolbar-button sf-symbols-battery-100"></button>
      <button class="design-toolbar-button sf-symbols-list-bullet"></button>
    </float>
    <clearfix />
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";

@Options({})
export default class DesignToolbar extends Vue {}
</script>
<style lang="scss">
.design-toolbar {
  width: 100%;
  height: 24px;
  padding: 0 12px;
  line-height: 31px;
  background-color: rgba(255, 255, 255, 0.8);

  .icon-apple-logo {
    display: inline-block;
    width: 15px;
    height: 19px;

    background-image: url($AssetRoot + "Apple_logo_black.svg");
    background-size: 15px 19px;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  button.design-toolbar-button {
    width: 19px;
    height: 19px;
    border: 0;
	background-position: 50%;

	&:not(:last-child) {
		margin-right: 10px;
	}
  }
}
</style>