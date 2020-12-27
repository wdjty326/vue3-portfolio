<script lang="tsx">
import { h } from "vue";

interface FloatProps {
	left?: string;
	right?: string;
	center?: string;
}

const FloatComponent = (props: FloatProps, context: any) => {
	const { left, right, center } = props;
	
	if (right) context.attrs["data-right"] = "";
	else if (center) context.attrs["data-center"] = "";
	else context.attrs["data-left"] = "";

	return h("div", context.attrs, context.slots);
};

FloatComponent.props = {
	left: {
		type: String,
		default: undefined,
	},
	right: {
		type: String,
		default: undefined,
	},
	center: {
		type: String,
		default: undefined,
	},
};

export default FloatComponent;
</script>
<style lang="scss">
div {
	&[data-left] {
		float: left;
	}

	&[data-right] {
		float: right;
	}

	&[data-center] {
		float: center;
	}
}
</style>