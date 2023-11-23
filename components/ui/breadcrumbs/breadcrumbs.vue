<script lang="ts">
import { h } from "vue";
import type { VNode } from "vue";

export interface Props {}

export default {
  // props: {},
  setup(props: Props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: ["breadcrumbs"],
        },
        h(
          "ul",
          null,
          slots.default!().map((vnode: VNode) => {
            // check if vnode has children
            // i.e. if it's a component with v-for
            if (Array.isArray(vnode.children)) {
              // return array of wrapped children
              return vnode.children.map((child: any) => h("li", null, child));
            }
            // otherwise just return wrapped vnode
            return h("li", null, vnode);
          })
        )
      );
  },
};
</script>
