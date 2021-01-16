<template>
  <div class="design-finder" :data-display="displaySync ? 1 : 0">
    <div>
      <design-finder-header :title="title" />
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
}
</script>
<style lang="scss">
.design-finder {
  position: fixed;
  width: 100%;
  height: 100%;

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
    grid-template-rows: 35px 1fr;

    min-width: 320px;
    min-height: 568px;
  }
}
</style>