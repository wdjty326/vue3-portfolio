<template>
	<div class="design-finder-body">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "@Components/Decorator/Prop";

export default class DesignFinderBody extends Vue {
	// TODO
}
</script>
<style lang="scss">
.design-finder .design-finder-body {
	position: relative;
	width: 100%;
	height: 100%;

	grid-column: 1;
	grid-row: 2;

	background-color: #ffffff;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
</style>
