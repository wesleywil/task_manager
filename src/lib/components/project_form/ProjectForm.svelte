<script lang="ts">
  import { onMount } from "svelte";
  import { convertToDatetimeLocal } from "../../../utils/utils";
  import { utils } from "../../../store/utils";
  import type { Project } from "../../../utils/interfaces";
  import Loading from "../loading/Loading.svelte";
  import ProjectUpdateForm from "../project_update_form/ProjectUpdateForm.svelte";

  const switchHideForm = () => utils.switchHideForm();

  let projectId = 0;
  $: projectId = $utils.projectId;

  async function getProjectById() {
    const res = await fetch(`http://localhost:5173/api/projects/${projectId}`, {
      cache: "no-cache",
    });
    const project: Project = await res.json();
    return project;
  }
</script>

<div class="absolute w-full h-[100vh] bg-[#111e20]/90 z-10">
  <div class="h-full p-4 flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl text-[#ebf0f2] font-bold uppercase">
      {#if projectId === 0}
        Create new Project
      {:else}
        Update Project
      {/if}
    </h1>
    {#if projectId === 0}
      <form
        method="POST"
        action="/api/projects"
        class="w-1/2 p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center bg-[#111e20] border border-[#7bc243] rounded"
      >
        <input
          type="text"
          name="name"
          placeholder="Project's Name"
          class="w-2/3 px-2 py-1 rounded"
        />
        <div class="w-2/3 px-2 py-1 flex gap-2 bg-white rounded">
          <span class="self-center text-slate-400">Set as Favorite: </span>
          <input type="checkbox" name="favorite" class="w-8 h-8" />
        </div>

        <textarea
          rows="5"
          name="description"
          placeholder="Project's Description"
          class="w-2/3 px-2 py-1 rounded"
        />
        <select name="status" class="w-2/3 px-2 py-1 rounded">
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
          <option value="PENDING">Pending</option>
        </select>
        <select name="priority" class="w-2/3 px-2 py-1 rounded">
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
        <input
          type="datetime-local"
          step="1"
          name="due_date"
          class="w-2/3 px-2 py-1 rounded"
        />
        <div class="flex justify-center gap-4">
          <button
            class="px-2 py-1 bg-[#7bc243] hover:bg-[#7bc243]/60 text-[#111e20] text-xl font-semibold rounded"
            >Submit</button
          >
          <button
            type="button"
            on:click={switchHideForm}
            class="px-2 py-1 bg-[#7bc243] hover:bg-[#7bc243]/60 text-[#111e20] text-xl font-semibold rounded"
            >Cancel</button
          >
        </div>
      </form>
    {:else}~
      {#await getProjectById()}
        <Loading />
      {:then project}
        <ProjectUpdateForm {project} />
      {/await}
    {/if}
  </div>
</div>
