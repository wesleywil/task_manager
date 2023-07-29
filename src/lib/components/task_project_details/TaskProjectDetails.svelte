<script lang="ts">
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";

  import { utils } from "../../../store/utils";
  import type { Project } from "../../../utils/interfaces";
  import ProjectCategoryItem from "../project_category_item/ProjectCategoryItem.svelte";

  export let project: Project = {} as Project;
</script>

<div class="mt-4 px-8 text-left text-[#111e20]">
  <div class="flex gap-2">
    <h1 class="self-center text-3xl font-bold">
      {project.name}
    </h1>
    <div
      class="mt-2 tooltip tooltip-right tooltip-warning self-center"
      data-tip="add category"
    >
      <button
        on:click={() => utils.switchCategoryForm()}
        class="w-8 h-8 p-1 bg-[#7bc243] hover:bg-green-600 rounded-full"
        ><FaPlus /></button
      >
    </div>
  </div>

  <p class="text-xs">
    {project.description}
  </p>
  <div class="mt-2 flex gap-2">
    {#if project.categories !== undefined}
      {#each project.categories as category}
        <ProjectCategoryItem {category} />
      {/each}
    {/if}
  </div>
</div>
