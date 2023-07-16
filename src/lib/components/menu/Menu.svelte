<script lang="ts">
  import { onMount } from "svelte";
  import type { Project } from "../../../utils/interfaces";

  let projects: Project[] = [];
  onMount(async () => {
    const res = await fetch("http://localhost:5173/api/projects", {
      cache: "no-cache",
    });
    projects = await res.json();
  });
</script>

<div class="h-full w-48 px-4 py-2 bg-black text-slate-400">
  <div class="h-full flex flex-col items-center justify-between">
    <div class=" flex flex-col gap-12">
      <!-- User Info -->
      <div class="flex flex-col">
        <div class="mt-12 h-24 w-24 bg-white rounded-full" />
        <div class="mt-2 flex flex-col gap-2">
          <button
            class="bg-slate-100 hover:bg-slate-300 font-semibold text-black rounded"
            >Profile</button
          >
          <button
            class="bg-slate-100 hover:bg-slate-300 font-semibold text-black rounded"
            >Sign Out</button
          >
        </div>
      </div>
      <!-- Favorites -->
      <div class="flex flex-col gap-4">
        <a href="/projects" class="text-xl font-semibold">Favorites</a>
        <div class="flex flex-col gap-2">
          {#await projects}
            <h2>Loading...</h2>
          {:then projects}
            {#each projects as project}
              {#if project.favorite}
                <div class="flex gap-2 items-center">
                  <span class="bg-red-400 w-3 h-3 rounded-full" />
                  <h2>{project.name}</h2>
                </div>
              {/if}
            {/each}
          {/await}
        </div>
      </div>
      <!-- All projects -->
      <div class="flex flex-col gap-4">
        <a href="/projects" class="text-xl font-semibold">All Projects</a>
        <div class="flex flex-col gap-2">
          {#await projects}
            <h2>Loading...</h2>
          {:then projects}
            {#each projects as project}
              <div class="flex gap-2 items-center">
                <span class="bg-slate-300 w-3 h-3 rounded-full" />
                <h2>{project.name}</h2>
              </div>
            {/each}
          {/await}
        </div>
      </div>
    </div>

    <!-- New Project -->
    <button
      class="w-11/12 py-1 bg-white hover:bg-slate-300 text-black font-bold rounded"
      >+ New Project</button
    >
  </div>
</div>
