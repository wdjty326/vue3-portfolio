import { ComponentPropsOptions } from "vue"
import { Vue, createDecorator, VueConstructor } from "vue-class-component"

import { applyMetadata } from "@Libs/Metadata";

/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
export function Prop(options: ComponentPropsOptions | VueConstructor[] | VueConstructor = {}) {
  return (target: Vue, key: string) => {
    applyMetadata(options, target, key)
    createDecorator((componentOptions, k) => {
      ;(componentOptions.props || ((componentOptions.props = {}) as any))[
        k
      ] = options
    })(target, key)
  }
}