<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 h-full">
    <textarea v-model="originalJsonData" name="originalContent" id="originalContent" autocorrect="false"
      class="dark:bg-slate-800 dark:text-slate-200 rounded p-5"></textarea>
    <textarea v-model="formattedJson" name="originalContent" id="originalContent"
      class="dark:bg-slate-800 dark:text-slate-200 rounded p-5"></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const { beautify } = useJsonFormatter();



const originalJsonData = ref("");
const formattedJson = computed(() => {
  return beautify(originalJsonData.value);
});

const jsonExample = `{
  "name": "nuxt-app",
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "devDependencies": {
    "@nuxt/devtools": "latest",
    "@types/node": "^18.16.19",
    "autoprefixer": "^10.4.14",
    "cssnano": "^6.0.1",
    "nuxt": "^3.6.5",
    "postcss": "^8.4.27",
    "prettier": "3.0.0",
    "tailwindcss": "^3.3.3"
  }
}
`;

</script>