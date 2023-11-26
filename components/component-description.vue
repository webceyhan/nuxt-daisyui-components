<script lang="ts">
export interface Description {
  name: string;
  props?: {
    name: string;
    type: string;
    default?: string | number | boolean;
    values?: string[];
    description?: string;
  }[];
  slots?: {
    name: string;
    props?: string[];
    description?: string;
  }[];
}
</script>

<script setup lang="ts">
defineProps<Description>();
</script>

<template>
  <div class="mt-8">
    <code class="block text-info mb-2"> {{ `<ui-${name} />` }}</code>

    <div class="relative max-h-[25rem] overflow-x-auto">
      <!-- props table ------------------------------------------------------------------------- -->
      <table v-if="props" class="table table-xs md:table-sm table-pin-rows w-full mb-4">
        <thead>
          <tr class="border-b-0">
            <th class="bg-base-200 normal-case lg:py-3">Prop name</th>
            <th class="bg-base-200 normal-case lg:py-3">Type</th>
            <th class="bg-base-200 normal-case lg:py-3">Default</th>
            <th class="bg-base-200 rounded-r-box lg:py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prop of props">
            <th class="w-3/12 font-normal">
              <span class="whitespace-nowrap font-mono lowercase">
                {{ prop.name }}
              </span>
            </th>
            <td class="w-1/12">
              <div class="tooltip cursor-help" :data-tip="prop.description">
                <span class="badge badge-sm badge-outline w-24 whitespace-nowrap">
                  {{ prop.type }}
                </span>
              </div>
            </td>
            <td class="w-1/12">
              <span class="whitespace-nowrap kbd kbd-xs">
                {{ prop?.default ?? (prop.type === "boolean" ? "false" : "") }}
              </span>
            </td>
            <td class="w-7/12 min-w-[20rem]">
              {{ prop.description }}

              <div class="space-x-1">
                <span v-for="value of prop.values" class="kbd kbd-xs">
                  {{ value }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- slots table ------------------------------------------------------------------------- -->
      <table v-if="slots" class="table table-xs md:table-sm table-pin-rows w-full">
        <thead>
          <tr class="border-b-0">
            <th class="bg-base-200 normal-case lg:py-3">Slot name</th>
            <th class="bg-base-200 rounded-r-box lg:py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slot of slots">
            <th class="w-4/12 font-normal">
              <span class="whitespace-nowrap font-mono lowercase">
                {{ slot.name }}
              </span>
            </th>
            <td class="w-8/12 min-w-[20rem]">
              {{ slot.description }}

              <div class="space-x-1">
                <span v-for="prop of slot.props" class="kbd kbd-xs">
                  {{ prop }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        class="bg-base-100 pointer-events-none sticky bottom-0 -mt-6 flex h-16 [mask-image:linear-gradient(transparent,#000000)]"
      ></div>
    </div>
  </div>
</template>
