<template>
  <header class="flex justify-center items-center shadow-lg min-h-[50px] sticky top-0 z-40 w-full dark:bg-slate-900/75">
    <div class="dark:text-slate-200 text-slate-700 font-bold h-full">
      jonicas
    </div>
  </header>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 bg-white dark:bg-slate-900 h-[calc(100vh-110px)] mt-10">
    <nav id="nav"
      class="hidden sm:col-span-2 lg:block lg:sticky lg:top-10 dark:text-slate-200 lg:max-h-[calc(100vh-90px)] overflow-y-auto overflow-x-hidden px-10">
      <ul>
        <li class="flex dark:text-slate-400 font-medium text-slate-700 dark:hover:text-slate-300 mb-4">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="flex dark:text-slate-400 font-medium text-slate-700 dark:hover:text-slate-300 mb-4">
          <NuxtLink to="/json/format">JSON formatter</NuxtLink>
        </li>
      </ul>
    </nav>
    <main class="w-full col-span-10 sm:col-span-10">
      <NuxtPage :transition="{ name: 'bounce', mode: 'out-in' }" />
    </main>
  </div>
</template>