<script lang="tsx">
import { h } from "vue";

const Clearfix = (props: any, context: any) => {
	context.attrs["class"] = "clearfix";
	return h("div", context.attrs, context.slots);
};

export default Clearfix;
</script>
<style lang="scss">
div.clearfix {
	content: "";
	display: table;
	clear: both;
}
</style>