<script lang="ts">
  import { utils } from "../../../store/utils";

  export let projects: Array<any>;

  const switchHideForm = (id: number) => {
    utils.switchHideForm();
    utils.selectProjectId(id);
  };
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
    {#each projects as project}
      <tr class="border-b border-black">
        <td><input type="checkbox" /></td>
        <td><span>{project.name}</span></td>
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
        <td>{project.start_date}-{project.due_date}</td>
        <td><span class="text-red-600 font-bold">{project.priority}</span></td>
        <td>
          <div class="flex flex-wrap gap-2 justify-center">
            <button
              on:click={() => switchHideForm(project.id)}
              class="px-2 bg-green-400 font-semibold rounded">Edit</button
            >
            <button class="px-2 bg-red-400 font-semibold rounded">Delete</button
            >
          </div>
        </td>
      </tr>
    {/each}
  </table>
</div>
