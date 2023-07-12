<script lang="ts">
  import ProjectItem from "$lib/components/project_item/ProjectItem.svelte";
  import ProjectTable from "$lib/components/project_table/ProjectTable.svelte";

  async function getProjects() {
    const res = await fetch("http://localhost:5173/api/projects", {
      cache: "no-cache",
    });
    const projects: Array<any> = await res.json();
    return projects;
  }
</script>

{#await getProjects()}
  <p>Loading...</p>
{:then projects}
  <div class="w-full h-full text-center">
    <h1 class="mt-24 mb-8 text-6xl font-bold">PROJECTS</h1>
    <!-- Favorites -->
    <h2 class="px-8 text-left text-2xl">Favorites</h2>
    <div class="w-full p-8 flex gap-4 flex-wrap">
      {#each projects as project}
        <ProjectItem name={project.name} tasks={project.tasks} />
      {/each}
    </div>
    <!-- All Projects -->
    <h2 class="px-8 text-left text-2xl">All Projects</h2>
    <div class="p-8 flex flex-col gap-4">
      <div class="flex">
        <input
          type="text"
          placeholder="Search Project"
          class="w-1/3 px-2 py-1 rounded-l"
        />
        <button class="bg-black text-white px-2 py-1 rounded-r">Search</button>
      </div>
      <!-- Project List Table -->
      <ProjectTable {projects} />
    </div>
  </div>
{:catch error}
  <p>{error.message}</p>
{/await}
