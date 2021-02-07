<template>
  <div class="design-accordion"></div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";
import { PropSync } from "@Components/Decorator/PropSync";

@Options({
  components: {},
})
export default class DesignAccordion extends Vue {
}
</script>
<style lang="scss">
.design-accordion {
}
</style>