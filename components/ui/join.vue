<script lang="ts">
import { h } from "vue";
import type { VNode } from "vue";

export interface Props {
  vertical?: boolean;
}

const addClass = (vnode: VNode, className: string) => {
  // check if vnode is a component with nested children
  // i.e. <button v-for="i in 3">Button</button>
  if (Array.isArray(vnode.children)) {
    // recursively add class to children
    vnode.children = vnode.children.map((vnode: any) => addClass(vnode, className));
  }

  vnode.props = vnode.props ?? {};
  const staticClass = vnode.props.class ?? "";
  // bugfix: hot-module will concat the class names with comma
  vnode.props.class = `${staticClass} ${className}`.split(",").join(" ").trim();
  return vnode;
};

export default {
  props: {
    vertical: Boolean,
  },
  setup(props: Props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: ["join", { "join-vertical": props.vertical }],
        },
        slots.default!().map((vnode) => addClass(vnode, "join-item"))
      );
  },
};
</script>
