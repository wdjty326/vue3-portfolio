<script lang="tsx">
import { h } from "vue";

interface FloatProps {
	left?: string;
	right?: string;
	center?: string;
}

const Float = (props: FloatProps, context: any) => {
	if ("right" in props) context.attrs["data-float"] = "right";
	else if ("center" in props) context.attrs["data-float"] = "center";
	else context.attrs["data-float"] = "left";

	context.attrs["class"] = "float";

	return h("div", context.attrs, context.slots);
};

Float.props = {
	left: {
		type: String,
	},
	right: {
		type: String,
	},
	center: {
		type: String,
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