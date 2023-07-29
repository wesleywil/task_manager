<script lang="ts">
  import FaCheck from "svelte-icons/fa/FaCheck.svelte";
  import FaTimes from "svelte-icons/fa/FaTimes.svelte";

  import { utils } from "../../../store/utils";
  import { projects as filteredProjects } from "../../../store/projects";

  const switchHideForm = (id: number) => {
    utils.switchHideForm();
    utils.selectProjectId(id);
  };

  const switchHideDeletePanel = (id: number) => {
    utils.switchHideDeletePanel();
    utils.selectProjectId(id);
  };
  let prs: Array<any> = [];
  $: prs = $filteredProjects.projects;
</script>

<div>
  <table class="border-x border-[#111e20]">
    <tr class="border-b border-[#111e20]">
      <th class="px-1 bg-[#111e20]/50 text-white border-x border-[#111e20]"
        >Favorite</th
      >
      <th class="px-1 bg-[#111e20]/50 text-white border-r border-[#111e20]"
        >Project</th
      >
      <th class="px-1 bg-[#111e20]/50 text-white border-r border-[#111e20]"
        >Project Description</th
      >
      <th class="px-1 bg-[#111e20]/50 text-white border-r border-[#111e20]"
        >Status</th
      >
      <th class="px-1 bg-[#111e20]/50 text-white border-r border-[#111e20]"
        >Start/Due Date</th
      >
      <th class="px-1 bg-[#111e20]/50 text-white border-r border-[#111e20]"
        >Priority</th
      >
      <th class="px-1 bg-[#111e20]/50 text-white border-r border-[#111e20]"
        >Actions</th
      >
    </tr>
    {#each $filteredProjects.projects as project}
      <tr class="border-b border-[#111e20]">
        <td>
          {#if project.favorite}
            <div class="h-8 w-8 mx-auto text-[#7bc243]">
              <FaCheck />
            </div>
          {:else}
            <div class="h-8 w-8 mx-auto text-[#111e20]">
              <FaTimes />
            </div>
          {/if}
        </td>
        <td class="px-2"><span>{project.name}</span></td>
        <td
          ><p class="p-2">
            {project.description}
          </p></td
        >
        <td
          ><span
            class="px-2 bg-[#111e20] text-[#ebf0f2] text-sm font-semibold rounded-xl"
            >{project.status}</span
          ></td
        >
        <td class="px-2 pt-1 flex flex-col border-0">
          <span>{String(project.start_date).slice(0, 10)}</span>
          <span>{String(project.due_date).slice(0, 10)}</span>
        </td>
        <td
          ><span class="px-2 text-red-600 font-bold">{project.priority}</span
          ></td
        >
        <td>
          <div class="flex flex-wrap gap-2 justify-center">
            <button
              on:click={() => switchHideForm(project.id)}
              class="px-2 bg-[#7bc243] hover:bg-green-600 font-semibold rounded"
              >Edit</button
            >
            <button
              on:click={() => switchHideDeletePanel(project.id)}
              class="px-2 bg-red-500 hover:bg-red-700 text-[#ebf0f2] font-semibold rounded"
              >Delete</button
            >
          </div>
        </td>
      </tr>
    {/each}
  </table>
</div>
