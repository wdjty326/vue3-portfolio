<template>
  <div class="index">index page</div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";


@Options({})
export default class IndexComponent extends Vue {
	@Prop({})
	private test: number = 0;
}

// export default defineComponent({
//   name: "Index",
//   components: {},
//   setup(prop) {},
// });
</script>
<style lang="scss">
.index {
  width: 100%;
  height: 100%;
}
</style>