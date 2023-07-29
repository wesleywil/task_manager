<script lang="ts">
  import { onMount } from "svelte";
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import type { Project } from "../../../utils/interfaces";
  import NewProjectBtn from "../new_project_btn/NewProjectBtn.svelte";

  let projects: Project[] = [];

  onMount(async () => {
    const res = await fetch("http://localhost:5173/api/projects", {
      cache: "no-cache",
    });
    projects = await res.json();
  });
</script>

<div class="h-full w-48 px-4 py-2 bg-[#111e20] text-[#ebf0f2]">
  <div class="h-full flex flex-col items-center justify-between">
    <div class=" flex flex-col gap-12">
      <!-- User Info -->
      <div class="flex flex-col gap-2">
        {#if $page.data.session && Object.keys($page.data.session).length}
          {#if $page.data.session.user?.image}
            <img
              src={$page.data.session.user.image}
              alt="profile"
              class="mt-4 mx-auto md:h-20 xl:h-24 md:h-20 xl:w-24 rounded-full"
            />
          {:else}
            <div
              class="mt-4 mx-auto md:h-20 xl:h-24 md:h-20 xl:w-24 rounded-full"
            />
          {/if}
          <a
            href="/profile"
            class=" bg-[#ebf0f2] hover:bg-slate-300 font-semibold text-center text-[#111e20] rounded transition duration-300 ease-in-out"
            >Profile</a
          >
          <button
            on:click={() => signOut()}
            class="bg-[#ebf0f2] hover:bg-slate-300 font-semibold text-[#111e20] rounded transition duration-300 ease-in-out"
            >Sign Out</button
          >
        {:else}
          <div
            class="mt-4 mx-auto md:h-20 xl:h-24 md:h-20 xl:w-24 bg-[#ebf0f2] rounded-full"
          />
          <button
            on:click={() => signIn("google")}
            class="bg-[#ebf0f2] hover:bg-slate-300 font-semibold text-[#111e20] rounded transition duration-300 ease-in-out"
            >SignIn</button
          >
        {/if}
      </div>
      <!-- Favorites -->
      <div class="flex flex-col gap-4">
        <h1 class="text-xl font-semibold">Favorites</h1>
        <div class="flex flex-col gap-2">
          {#await projects}
            <h2>Loading...</h2>
          {:then projects}
            {#each projects as project}
              {#if project.favorite}
                <div class="flex gap-2 items-center">
                  <span class="mt-1 bg-[#7bc243] w-3 h-3 rounded-full" />
                  <a
                    href={`/projects/${project.id}/tasks`}
                    target="_self"
                    class="hover:text-[#7bc243]/80 transition duration-300 ease-in-out"
                    >{project.name}</a
                  >
                </div>
              {/if}
            {/each}
          {/await}
        </div>
      </div>
      <!-- All projects -->
      <div class="flex flex-col gap-4">
        <a
          href="/projects"
          class="text-xl font-semibold hover:text-[#7bc243] transition duration-700 ease-in-out"
          >All Projects</a
        >
        <div class="flex flex-col gap-2">
          {#await projects}
            <h2>Loading...</h2>
          {:then projects}
            {#each projects as project}
              <div class="flex gap-2 items-center">
                <span class="bg-[#ebf0f2] mt-1 w-3 h-3 rounded-full" />
                <a
                  href={`/projects/${project.id}/tasks`}
                  target="_self"
                  class="hover:text-[#7bc243]/80 transition duration-300 ease-in-out"
                  >{project.name}</a
                >
              </div>
            {/each}
          {/await}
        </div>
      </div>
    </div>

    <NewProjectBtn />
  </div>
</div>
