<template>
  <div class="design-finder" :data-display="displaySync ? 1 : 0">
    <div>
      <design-finder-header :title="title" @close="onClose" />
      <design-finder-body>
        <slot></slot>
      </design-finder-body>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";
import { PropSync } from "@Components/Decorator/PropSync";

import DesignFinderHeader from "@Components/Design/Finder/DesignFinderHeader.vue";
import DesignFinderBody from "@Components/Design/Finder/DesignFinderBody.vue";

@Options({
  components: {
    "design-finder-header": DesignFinderHeader,
    "design-finder-body": DesignFinderBody,
  },
})
export default class DesignExplorer extends Vue {
  /** `finder` 표출여부입니다. */
  @PropSync("display", {
    type: Boolean,
  })
  private displaySync!: boolean;

  @Prop({
    type: String,
  })
  private title!: string;

  private onClose() {
    this.displaySync = false;
  }
}
</script>
<style lang="scss">
$design-finder-grid-template-columes: 180px 1fr;

.design-finder {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transform: translateY(0);
  transition: all 133ms linear;

  &:not([data-display="1"]) {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-20px);
  }

  > div {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 70px 1fr;

    min-width: 640px;
    min-height: 568px;
  }

  .design-finder-header > div:last-child,
  .design-finder-body {
    display: grid;
    grid-template-columns: $design-finder-grid-template-columes;
    grid-template-rows: auto;

    > *:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    > *:nth-child(2) {
      grid-column: 2;
      grid-row: 1;
    }
  }
}
</style>