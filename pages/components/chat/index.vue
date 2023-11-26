<script setup lang="ts">
import { DESCRIPTIONS, COLORS, ALIGNMENTS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const bubbleWithColors = [
  { text: "Hey!" },
  { text: "What kind of nonsense is this" },
  { text: "Put me on the Council and not make me a Master!??" },
  { text: "That's never been done in the history of the Jedi. It's insulting!" },
  { text: "Calm down, Anakin.", end: true },
  { text: "You have been given a great honor.", end: true },
  { text: "To be on the Council at your age.", end: true },
  { text: "It's never happened before.", end: true },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Chat bubble</h1>

    <p>
      Chat bubbles are used to show one line of conversation and all its data, including
      the author image, author name, time, etc.
    </p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>chat-start and chat-end</template>

      <div class="w-full">
        <ui-chat> It's over Anakin, <br />I have the high ground. </ui-chat>
        <ui-chat alignment="end"> You underestimate my power! </ui-chat>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Chat with image</template>

      <div class="w-full">
        <ui-chat
          v-for="text of [
            'It was said that you would, destroy the Sith, not join them.',
            'It was you who would bring balance to the Force',
            'Not leave it in Darkness',
          ]"
        >
          <template #avatar>
            <div class="w-10 rounded-full">
              <img src="/img/avatar.jpg" />
            </div>
          </template>

          {{ text }}
        </ui-chat>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Chat with image, header and footer</template>

      <div class="w-full">
        <ui-chat>
          <template #avatar>
            <div class="w-10 rounded-full">
              <img src="/img/avatar.jpg" />
            </div>
          </template>

          <template #header>
            Obi-Wan Kenobi
            <time class="text-xs opacity-50">12:45</time>
          </template>

          You were the Chosen One!

          <template #footer>
            <span class="opacity-50">Delivered</span>
          </template>
        </ui-chat>

        <ui-chat alignment="end">
          <template #avatar>
            <div class="w-10 rounded-full">
              <img src="/img/avatar.jpg" />
            </div>
          </template>

          <template #header>
            Anakin
            <time class="text-xs opacity-50">12:46</time>
          </template>

          I hate you!

          <template #footer>
            <span class="opacity-50">Seen at 12:46</span>
          </template>
        </ui-chat>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Chat with header and footer</template>

      <div class="w-full">
        <ui-chat>
          <template #header>
            Obi-Wan Kenobi
            <time class="text-xs opacity-50">2 hours ago</time>
          </template>

          You were my brother, Anakin.

          <template #footer>
            <span class="opacity-50">Seen</span>
          </template>
        </ui-chat>

        <ui-chat>
          <template #header>
            Obi-Wan Kenobi
            <time class="text-xs opacity-50">2 hours ago</time>
          </template>

          I loved you.

          <template #footer>
            <span class="opacity-50">Delivered</span>
          </template>
        </ui-chat>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Chat Bubble with colors</template>

      <div class="w-full">
        <ui-chat
          v-for="(chat, i) of bubbleWithColors"
          :color="COLORS[i]"
          :alignment="chat?.end ? 'end' : 'start'"
        >
          {{ chat.text }}
        </ui-chat>
      </div>
    </component-preview>
  </div>
</template>
~/pages/components/chat/chat
