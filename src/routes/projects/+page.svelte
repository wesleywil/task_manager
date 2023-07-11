<script>
  import ProjectItem from "$lib/components/project_item/ProjectItem.svelte";
  import ProjectTable from "$lib/components/project_table/ProjectTable.svelte";
</script>

<div class="w-full h-full text-center">
  <h1 class="mt-48 mb-8 text-6xl font-bold">PROJECTS</h1>
  <!-- Favorites -->
  <h2 class="px-8 text-left text-2xl">Favorites</h2>
  <div class="w-full p-8 flex gap-4 flex-wrap">
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
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
    <ProjectTable />
  </div>
</div>
