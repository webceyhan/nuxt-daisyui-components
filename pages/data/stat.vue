<script setup lang="ts">
const groupProps = [
  {
    name: "vertical",
    type: "boolean",
    description: "Display stats vertically",
  },
];

const groupSlots = [
  {
    name: "default",
    description: "Content of the stats",
  },
];

const slots = [
  {
    name: "figure",
    description: "Figure of the stat",
  },
  {
    name: "title",
    description: "Title of the stat",
  },
  {
    name: "subtitle",
    description: "Subtitle of the stat",
  },
  {
    name: "desc",
    description: "Description of the stat",
  },
  {
    name: "actions",
    description: "Actions of the stat",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const stats = [
  { title: "Downlods", value: "310K", desc: "Jan 1st - Feb 1st", icon: "info-circle" },
  { title: "New Users", value: "4,200", desc: "↗︎ 400 (22%)", icon: "sliders2-vertical" },
  { title: "New Registers", value: "1,200", desc: "↘ 90 (14%)", icon: "archive" },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Stat</h1>

    <p>Stat is used to show numbers and data in a box.</p>

    <component-slots-table :slots="slots" />

    <h3 class="text-lg font-bold">Stat Group</h3>
    <component-props-table :props="groupProps" />
    <component-slots-table :slots="groupSlots" />

    <component-preview>
      <template #title> Stat </template>

      <ui-stat-group class="shadow">
        <ui-stat>
          <template #title>Total Page Views</template>
          89,400
          <template #desc>21% more than last month</template>
        </ui-stat>
      </ui-stat-group>
    </component-preview>

    <component-preview>
      <template #title> Stat with icons or image</template>

      <ui-stat-group class="shadow">
        <ui-stat>
          <template #figure>
            <ui-icon name="heart" class="text-primary text-2xl" />
          </template>
          <template #title>Total Likes</template>
          <span class="text-primary">25.6K</span>
          <template #desc>21% more than last month</template>
        </ui-stat>

        <ui-stat>
          <template #figure>
            <ui-icon name="lightning-charge" class="text-secondary text-2xl" />
          </template>
          <template #title>Page Views</template>
          <span class="text-secondary">2.6M</span>
          <template #desc>21% more than last month</template>
        </ui-stat>

        <ui-stat>
          <template #figure>
            <ui-avatar online>
              <div class="w-16 rounded-full">
                <img src="/img/avatar.jpg" />
              </div>
            </ui-avatar>
          </template>
          86%
          <template #subtitle>Tasks done</template>
          <template #desc>
            <span class="text-secondary"> 31 tasks remaining </span>
          </template>
        </ui-stat>
      </ui-stat-group>
    </component-preview>

    <component-preview>
      <template #title> Aligned to start</template>

      <ui-stat-group class="shadow">
        <ui-stat v-for="(stat, i) of stats">
          <template #figure>
            <ui-icon :name="stat.icon" class="text-secondary text-2xl" />
          </template>
          <template #title>{{ stat.title }}</template>
          {{ stat.value }}
          <template #desc> {{ stat.desc }} </template>
        </ui-stat>
      </ui-stat-group>
    </component-preview>

    <component-preview>
      <template #title> Centered items</template>

      <ui-stat-group class="shadow">
        <ui-stat v-for="(stat, i) of stats" class="place-items-center">
          <template #figure>
            <ui-icon :name="stat.icon" class="text-secondary text-2xl" />
          </template>
          <template #title>{{ stat.title }}</template>
          {{ stat.value }}
          <template #desc> {{ stat.desc }} </template>
        </ui-stat>
      </ui-stat-group>
    </component-preview>

    <component-preview>
      <template #title> Vertical</template>

      <ui-stat-group class="shadow" vertical>
        <ui-stat v-for="(stat, i) of stats">
          <template #title>{{ stat.title }}</template>
          {{ stat.value }}
          <template #desc> {{ stat.desc }} </template>
        </ui-stat>
      </ui-stat-group>
    </component-preview>

    <component-preview>
      <template #title>
        Responsive (vertical on small screen, horizontal on large screen)</template
      >

      <ui-stat-group class="shadow lg:stats-horizontal" vertical>
        <ui-stat v-for="(stat, i) of stats">
          <template #title>{{ stat.title }}</template>
          {{ stat.value }}
          <template #desc> {{ stat.desc }} </template>
        </ui-stat>
      </ui-stat-group>
    </component-preview>

    <component-preview>
      <template #title> With custom colors and button</template>

      <ui-stat-group class="shadow bg-primary text-primary-content">
        <ui-stat>
          <template #title> Account Balance </template>
          $89,400
          <template #actions>
            <ui-button size="sm" color="success"> Add funds </ui-button>
          </template>
        </ui-stat>
        <ui-stat>
          <template #title> Current Balance </template>
          $89,400
          <template #actions>
            <ui-button size="sm" class="me-1"> Withdraw </ui-button>
            <ui-button size="sm"> Deposit </ui-button>
          </template>
        </ui-stat>
      </ui-stat-group>
    </component-preview>
  </div>
</template>
