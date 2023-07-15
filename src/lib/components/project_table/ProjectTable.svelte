<script lang="ts">
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
  <table class="border-x border-black">
    <tr class="border-b border-black">
      <th class="px-1 bg-slate-400 text-white border-x border-black"
        >Favorite</th
      >
      <th class="px-1 bg-slate-400 text-white border-r border-black">Project</th
      >
      <th class="px-1 bg-slate-400 text-white border-r border-black"
        >Project Description</th
      >
      <th class="px-1 bg-slate-400 text-white border-r border-black">Status</th>
      <th class="px-1 bg-slate-400 text-white border-r border-black"
        >Start/Due Date</th
      >
      <th class="px-1 bg-slate-400 text-white border-r border-black"
        >Priority</th
      >
      <!-- <th class="px-1 bg-slate-400 text-white border-r border-black"
        >Tags/Categories</th
      > -->
      <th class="px-1 bg-slate-400 text-white border-r border-black">Actions</th
      >
    </tr>
    {#each $filteredProjects.projects as project}
      <tr class="border-b border-black">
        <td><input type="checkbox" /></td>
        <td class="px-2"><span>{project.name}</span></td>
        <td
          ><p class="p-2">
            {project.description}
          </p></td
        >
        <td
          ><span class="px-2 bg-green-500 text-white font-semibold rounded-xl"
            >{project.status}</span
          ></td
        >
        <td class="px-2"
          >{String(project.start_date).slice(0, 10)} --- {String(
            project.due_date
          ).slice(0, 10)}</td
        >
        <td
          ><span class="px-2 text-red-600 font-bold">{project.priority}</span
          ></td
        >
        <td>
          <div class="flex flex-wrap gap-2 justify-center">
            <button
              on:click={() => switchHideForm(project.id)}
              class="px-2 bg-green-400 font-semibold rounded">Edit</button
            >
            <button
              on:click={() => switchHideDeletePanel(project.id)}
              class="px-2 bg-red-400 font-semibold rounded">Delete</button
            >
          </div>
        </td>
      </tr>
    {/each}
  </table>
</div>
