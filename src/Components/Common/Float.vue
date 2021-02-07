<script lang="tsx">
import { h } from "vue";

interface FloatProps {
	left?: string;
	right?: string;
	center?: string;
}

const Float = (props: FloatProps, context: any) => {
	const { right, center } = props;

	if (right) context.attrs["data-float"] = "right";
	else if (center) context.attrs["data-float"] = "center";
	else context.attrs["data-float"] = "left";

	context.attrs["class"] = "float";

	return h("div", context.attrs, context.slots);
};

Float.props = {
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

export default Float;
</script>
<style lang="scss">
div.float {
	&[data-float="left"] {
		float: left;
	}

	&[data-float="right"] {
		float: right;
	}

	&[data-float="center"] {
		float: center;
	}
}
</style>