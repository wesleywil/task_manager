<script lang="ts">
  import { convertToDatetimeLocal } from "../../../utils/utils";
  import { utils } from "../../../store/utils";
  import type { Project } from "../../../utils/interfaces";

  const switchHideForm = () => utils.switchHideForm();

  let projectId = 0;
  $: projectId = $utils.projectId;

  export let project: Project;
</script>

<form
  method="POST"
  action={`/api/projects/${$utils.projectId}`}
  class="w-1/2 p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center bg-slate-700 border border-white rounded"
>
  <input
    type="text"
    name="name"
    bind:value={project.name}
    placeholder="Project's Name"
    class="w-2/3 px-2 py-1 rounded"
  />
  <div class="w-2/3 px-2 py-1 flex gap-2 bg-white rounded">
    <span class="self-center text-slate-400"
      >Set as Favorite: {project.favorite}</span
    >
    <input
      type="checkbox"
      bind:checked={project.favorite}
      name="favorite"
      class="w-8 h-8"
    />
  </div>
  <textarea
    rows="5"
    name="description"
    bind:value={project.description}
    placeholder="Project's Description"
    class="w-2/3 px-2 py-1 rounded"
  />
  <select
    name="status"
    bind:value={project.status}
    class="w-2/3 px-2 py-1 rounded"
  >
    <option value="IN_PROGRESS">In Progress</option>
    <option value="COMPLETED">Completed</option>
    <option value="PENDING">Pending</option>
  </select>
  <select
    name="priority"
    value={project.priority}
    class="w-2/3 px-2 py-1 rounded"
  >
    <option value="HIGH">High</option>
    <option value="MEDIUM">Medium</option>
    <option value="LOW">Low</option>
  </select>
  <input
    type="datetime-local"
    step="1"
    name="due_date"
    value={convertToDatetimeLocal(String(project.due_date))}
    class="w-2/3 px-2 py-1 rounded"
  />
  <div class="flex justify-center gap-4">
    <button
      type="submit"
      class="px-2 py-1 bg-black hover:bg-slate-900 text-white text-xl font-semibold rounded"
      >Submit</button
    >
    <button
      type="button"
      on:click={switchHideForm}
      class="px-2 py-1 bg-black hover:bg-slate-900 text-white text-xl font-semibold rounded"
      >Cancel</button
    >
  </div>
</form>
