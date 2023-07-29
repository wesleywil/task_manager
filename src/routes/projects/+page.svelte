<script lang="ts">
  import { onMount } from "svelte";
  import { utils } from "../../store/utils";
  import { projects as projectStore } from "../../store/projects";

  import ProjectDeletePanel from "$lib/components/project_delete_panel/ProjectDeletePanel.svelte";
  import ProjectForm from "$lib/components/project_form/ProjectForm.svelte";
  import ProjectItem from "$lib/components/project_item/ProjectItem.svelte";
  import ProjectTable from "$lib/components/project_table/ProjectTable.svelte";
  import Loading from "$lib/components/loading/Loading.svelte";

  const switchHideForm = () => utils.switchHideForm();
  let hideForm = true;
  $: hideForm = $utils.hideForm;
  let hideDeletePanel = true;
  $: hideDeletePanel = $utils.hideDeletePanel;

  let projects: any[] = [];

  onMount(async () => {
    const res = await fetch("http://localhost:5173/api/projects", {
      cache: "no-cache",
    });
    projects = await res.json();
    projectStore.setProjects(projects);
  });

  let searchValue: string = "";

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    searchValue = target.value;
    console.log("Test => ", target.value);
  }

  function handleSearch() {
    projectStore.filterProject2(searchValue);
  }
</script>

{#await projects}
  <Loading />
{:then projects}
  {#if hideForm}
    <div />
  {:else}
    <ProjectForm />
  {/if}

  <div class="w-full h-full text-center text-[#111e20] z-0">
    <h1 class="mt-24 mb-8 text-6xl font-bold">PROJECTS</h1>
    <!-- Favorites -->
    <h2 class="px-8 text-left text-2xl">Favorites</h2>
    <div class="w-full p-8 flex gap-4 flex-wrap">
      {#each projects.slice(0, 5) as project}
        {#if project.favorite}
          <ProjectItem name={project.name} tasks={project.tasks} />
        {/if}
      {/each}
    </div>
    <!-- All Projects -->
    <h2 class="px-8 text-left text-2xl">All Projects</h2>
    <div class="p-8 flex flex-col gap-4">
      <div class="flex">
        <button
          on:click={switchHideForm}
          class="mr-4 px-2 py-1 text-xl font-bold text-white bg-[#7bc243] hover:bg-green-600 rounded"
          >+</button
        >
        <input
          type="text"
          on:change={handleChange}
          placeholder="Search Project"
          class="w-1/3 px-2 py-1 outline-0 rounded-l"
        />
        <button
          on:click={handleSearch}
          class="bg-[#7bc243] text-black font-semibold px-2 py-1 rounded-r"
          >Search</button
        >
      </div>
      <!-- Project List Table -->
      {#if hideDeletePanel}
        <div />
      {:else}
        <ProjectDeletePanel />
      {/if}

      <ProjectTable />
    </div>
  </div>
{:catch error}
  <p>{error.message}</p>
{/await}
