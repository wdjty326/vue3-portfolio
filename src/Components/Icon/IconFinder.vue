<template>
  <div id="icon-finder" class="icon">
    <span class="icon-img" @dblclick="display = !display" />
    <span class="icon-title">{{title}}</span>
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
@import "icon";

#icon-finder {
  > .icon-img {
    background-image: url($AssetRoot + "/icon_finder.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50%;
  }
}
</style>