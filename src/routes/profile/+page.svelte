<script lang="ts">
  import { onMount } from "svelte";
  import { signIn } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import type { Project } from "../../utils/interfaces";

  let projects: Project[] = [];
  let totalTaskCount: number;

  onMount(async () => {
    const res = await fetch("http://localhost:5173/api/projects", {
      cache: "no-cache",
    });
    projects = await res.json();
    const taskCountsPerProject = projects.map(
      (project) => project.tasks.length
    );
    totalTaskCount = taskCountsPerProject.reduce(
      (sum, count) => sum + count,
      0
    );
  });
</script>

<div
  class="w-full h-full flex flex-col items-center text-[#111e20] text-center"
>
  <div class="w-1/2 mt-24 flex flex-col gap-2">
    <h1 class="text-4xl font-bold">Profile</h1>
    <div class="mt-4 flex flex-col items-center">
      {#if $page.data.session && Object.keys($page.data.session).length}
        {#if $page.data.session.user?.image}
          <img
            src={$page.data.session.user.image}
            alt="profile"
            class="mt-4 mx-auto h-24 w-24 rounded-full"
          />
        {:else}
          <div class="mt-4 mx-auto h-24 w-24 rounded-full" />
        {/if}
        <h1 class="text-2xl font-semibold">{$page.data.session.user.name}</h1>
        <h2 class="text-xs">{$page.data.session.user.email}</h2>
        <h1 class="xl:w-1/2 mt-8 text-3xl text-left font-semibold">Totals</h1>
        <div
          class="xl:w-1/2 mt-1 p-4 flex flex-col gap-2 text-2xl text-[#ebf0f2] bg-[#111e20] rounded"
        >
          <div class="px-2 flex items-start border border-[#7bc243] rounded">
            <h1 class="grow pr-2 text-left">Projects</h1>
            <h1 class="p-1 pl-2 text-right border-l border-[#7bc243]">
              {projects.length}
            </h1>
          </div>
          <div class="px-2 flex items-start border border-[#7bc243] rounded">
            <h1 class="grow pr-2 text-left">Tasks</h1>
            <h1 class="p-1 pl-2 text-right border-l border-[#7bc243]">
              {totalTaskCount}
            </h1>
          </div>
        </div>
      {:else}
        <h1 class="text-3xl text-red-500 text-center font-bold">
          You are Not Logged
        </h1>
        <button
          on:click={() => signIn("google")}
          class="mt-4 px-2 py-1 bg-red-400 hover:bg-red-600 font-semibold text-black hover:text-gray-200 text-3xl rounded"
          >SignIn</button
        >
      {/if}
    </div>
  </div>
</div>
