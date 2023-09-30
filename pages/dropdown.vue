<script setup lang="ts">
const mainColors: any[] = ["default", "primary", "secondary", "accent"];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Dropdown</h1>

    <p>Dropdown can open a menu or any other element when the button is clicked.</p>

    <component-preview>
      <template #title>Dropdown with colors</template>

      <ui-dropdown class="mb-32" v-for="(color, i) of mainColors" :key="i">
        <template #trigger>
          <ui-button :color="color">{{ color }}</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <h3 class="text-2xl">Positions</h3>

    <component-preview>
      <template #title>Dropdown bottom</template>

      <ui-dropdown class="mb-32">
        <template #trigger>
          <ui-button>Click</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mb-32" align-to-end>
        <template #trigger>
          <ui-button>Aligned to end</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown top</template>

      <ui-dropdown class="mt-32" position="top">
        <template #trigger>
          <ui-button>Click</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mt-32" position="top" align-to-end>
        <template #trigger>
          <ui-button>Aligned to end</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown left</template>

      <ui-dropdown class="mb-16" position="left">
        <template #trigger>
          <ui-button>Click</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mt-16" position="left" align-to-end>
        <template #trigger>
          <ui-button>Aligned to end</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown right</template>

      <ui-dropdown class="mb-16" position="right">
        <template #trigger>
          <ui-button>Click</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mt-16" position="right" align-to-end>
        <template #trigger>
          <ui-button>Aligned to end</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown on hover</template>

      <ui-dropdown class="mb-32" hover>
        <template #trigger>
          <ui-button>Hover</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Force open</template>

      <ui-dropdown class="mb-32" open>
        <template #trigger>
          <ui-button>Button</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>
  </div>
</template>
