<template>
  <div class="design-finder-header">
    <div>
      <float left>
        <button class="design-finder-close" @click="onClose"></button>
        <button class="design-finder-minimize" @click="onMinimize"></button>
        <button class="design-finder-maximize" @click="onMaxmize"></button>
      </float>
      <span class="design-finder-header-title">{{ title }}</span>
      <clearfix />
    </div>
    <div class="design-finder-toolbar">
      <div class="design-finder-chevron-buttons">
        <button
          class="design-finder-chevron-button sf-symbols-chevron-left"
        ></button>
        <button
          class="design-finder-chevron-button sf-symbols-chevron-right"
        ></button>
      </div>
      <div>
        <div class="design-finder-system-buttons">
          <button
            class="design-finder-system-button sf-symbols-square-grid-3x2"
          ></button>
          <button
            class="design-finder-system-button sf-symbols-text-justify"
          ></button>
          <button
            class="design-finder-system-button sf-symbols-rectangle-split-3x1"
          ></button>
          <button
            class="design-finder-system-button sf-symbols-squares-below-rectangle"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";

@Options({})
export default class DesignFinderHeader extends Vue {
  @Prop({
    type: String,
  })
  private title: string = "";

  private onClose() {
    this.$emit("close");
  }

  private onMinimize() {
    this.$emit("minimize");
  }

  private onMaxmize() {
    this.$emit("minimize");
  }
}
</script>
<style lang="scss">
.design-finder .design-finder-header {
  position: relative;
  width: 100%;
  height: 70px;

  grid-column: 1;
  grid-row: 1;

  padding: 0 20px;
  background: linear-gradient(180deg, #e7e7e7 50%, #cacaca);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  $button-size: 16px;
  $button-margin: 8px;

  > div {
    line-height: 35px;

	&:first-child {
		text-align: center;
	}
  }

  .design-finder-header-title {
    padding-right: ($button-size + $button-margin) * 3;
  }

  .design-finder-chevron-button,
  .design-finder-system-button {
    width: 31px;
    height: 25px;
    padding: 0;
    border: 0;
    background-color: #f8f8f8;
    background-size: 21px auto;
    background-position: 50%;

    cursor: pointer;
	outline: none;
  }
  .design-finder-chevron-button {
    background-size: 11px auto;
    border-radius: 5px;

    &:not(:last-child) {
      margin-right: 2px;
    }
  }

  .design-finder-chevron-buttons,
  .design-finder-system-buttons {
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .design-finder-system-buttons {
    border-radius: 5px;
    background-color: #f8f8f8;
  }

  .design-finder-close,
  .design-finder-minimize,
  .design-finder-maximize {
    display: inline-block;
    width: $button-size;
    height: $button-size;
    padding: 0;
    border: 0;
    border-radius: 999px;

    transition: all 133ms linear;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: $button-margin;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .design-finder-close {
    background-color: #ff615d;
  }

  .design-finder-minimize {
    background-color: #ffbd30;
  }

  .design-finder-maximize {
    background-color: #28ca40;
  }
}
</style>