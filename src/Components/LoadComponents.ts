import { App } from "vue";

import DesignAccordion from "@Components/Design/Accordion/DesignAccordion.vue";
import DesignToolbar from "@Components/Design/Toolbar/DesignToolbar.vue";
import DesignShortcuts from "@Components/Design/Shortcuts/DesignShortcuts.vue";

import Float from "./Common/float.vue";
import Clearfix from "./Common/Clearfix.vue";


export function LoadComponents(app: App<Element>): App<Element> {
	app.component("design-accordion", DesignAccordion);
	app.component("design-toolbar", DesignToolbar);
	app.component("design-shortcuts", DesignShortcuts);
	
	app.component("float", Float);
	app.component("clearfix", Clearfix);

	return app;
}