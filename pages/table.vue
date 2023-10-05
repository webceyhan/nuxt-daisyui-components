<script setup lang="ts">
import { records, recordsWithVisuals, recordsXs, pinnedRows } from "./table-data";

const sizes: { label: string; value: string }[] = [
  { value: "lg", label: "large" },
  { value: "md", label: "normal" },
  { value: "sm", label: "small" },
  { value: "xs", label: "tiny" },
];

const columns = (rows: any[]) => Object.keys(rows[0]);

const tagFor = (key: string) => (key === "id" ? "th" : "td");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Table</h1>

    <p>Table can be used to show a list of data in a table format.</p>

    <component-preview>
      <template #title>Table</template>

      <ui-table>
        <thead>
          <tr>
            <th v-for="(column, i) of columns(records)" :key="i">
              {{ i ? column : "" }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, i) of records" :key="i">
            <component :is="tagFor(key)" v-for="(val, key) of record" :key="key">
              {{ val }}
            </component>
          </tr>
        </tbody>
      </ui-table>
    </component-preview>

    <component-preview>
      <template #title>Table with an active row</template>

      <ui-table>
        <thead>
          <tr>
            <th v-for="(column, i) of columns(records)" :key="i">
              {{ i ? column : "" }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, i) of records" :key="i" :class="{ 'bg-base-200': i === 0 }">
            <component :is="tagFor(key)" v-for="(val, key) of record" :key="key">
              {{ val }}
            </component>
          </tr>
        </tbody>
      </ui-table>
    </component-preview>

    <component-preview>
      <template #title>Table with a row that highlights on hover</template>

      <ui-table>
        <thead>
          <tr>
            <th v-for="(column, i) of columns(records)" :key="i">
              {{ i ? column : "" }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, i) of records" :key="i" class="hover">
            <component :is="tagFor(key)" v-for="(val, key) of record" :key="key">
              {{ val }}
            </component>
          </tr>
        </tbody>
      </ui-table>
    </component-preview>

    <component-preview>
      <template #title>Zebra</template>

      <ui-table zebra>
        <thead>
          <tr>
            <th v-for="(column, i) of columns(records)" :key="i">
              {{ i ? column : "" }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, i) of records" :key="i">
            <component :is="tagFor(key)" v-for="(val, key) of record" :key="key">
              {{ val }}
            </component>
          </tr>
        </tbody>
      </ui-table>
    </component-preview>

    <component-preview>
      <template #title>Table with visual elements</template>

      <ui-table>
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th
              v-for="(column, i) of ['name', 'job', 'favorite color']"
              :key="i"
              class="capitalize"
            >
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, i) of recordsWithVisuals" :key="i">
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>

            <td>
              <div class="flex items-center space-x-3">
                <ui-avatar>
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="`/img/person${i + 1}.png`" />
                  </div>
                </ui-avatar>
                <div>
                  <div class="font-bold">{{ record.name }}</div>
                  <div class="text-sm opacity-50">{{ record.country }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ record.company }}
              <br />
              <span class="badge badge-ghost badge-sm">{{ record.job }}</span>
            </td>
            <td>{{ record.favoriteColor }}</td>
          </tr>
        </tbody>
      </ui-table>
    </component-preview>

    <component-preview>
      <template #title>Table xs</template>

      <div class="overflow-x-auto">
        <ui-table size="xs">
          <thead>
            <tr>
              <th v-for="(column, i) of columns(recordsXs)" :key="i">
                {{ i ? column : "" }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, i) of recordsXs" :key="i">
              <component :is="tagFor(key)" v-for="(val, key) of record" :key="key">
                {{ val }}
              </component>
            </tr>
          </tbody>
        </ui-table>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Pinned rows</template>

      <div class="overflow-x-auto h-96">
        <ui-table pin-rows>
          <template v-for="(rows, key) of pinnedRows" :key="key">
            <thead>
              <tr>
                <th>{{ key }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) of rows" :key="i">
                <td>{{ row }}</td>
              </tr>
            </tbody>
          </template>
        </ui-table>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Table with pinned-rows and pinned-cols</template>

      <div class="overflow-x-auto h-96 w-96">
        <ui-table size="xs" pin-rows pin-cols>
          <thead>
            <tr>
              <component
                :is="tagFor(column)"
                v-for="(column, i) of columns(recordsXs)"
                :key="i"
              >
                {{ i ? column : "" }}
              </component>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(record, i) of recordsXs" :key="i">
              <component :is="tagFor(k)" v-for="(val, k) of record">
                {{ val }}
              </component>
              <th>{{ record.id }}</th>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <component
                :is="tagFor(column)"
                v-for="(column, i) of columns(recordsXs)"
                :key="i"
              >
                {{ i ? column : "" }}
              </component>
              <th></th>
            </tr>
          </tfoot>
        </ui-table>
      </div>
    </component-preview>
  </div>
</template>
