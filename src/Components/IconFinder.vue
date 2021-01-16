<template>
  <div id="icon-finder">
    <span class="icon-finder" @dblclick="display = !display" />
    <design-finder
      :title="title"
      :display="display"
      @update:display="($val) => (display = $val)"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";
import { PropSync } from "@Components/Decorator/PropSync";

import DesignFinder from "@Components/Design/Finder/DesignFinder.vue";

@Options({
  components: {
    "design-finder": DesignFinder,
  },
})
export default class IconFinder extends Vue {
  @Prop({
    type: String,
  })
  private title!: string;

  private display: boolean = false;
}
</script>
<style lang="scss">
#icon-finder {
  > .icon-finder {
    display: inline-block;
    width: 48px;
    height: 48px;
    background-image: url($AssetRoot + "/icon_finder.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50%;

	cursor: pointer;
  }
}
</style>