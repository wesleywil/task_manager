<script lang="ts">
  import { onMount } from "svelte";
  import { convertToDatetimeLocal } from "../../../utils/utils";
  import { utils } from "../../../store/utils";
  import Loading from "../loading/Loading.svelte";

  const switchHideForm = () => utils.switchHideForm();

  let projectId = 0;
  $: projectId = $utils.projectId;

  async function getProjectById() {
    const res = await fetch(`http://localhost:5173/api/projects/${projectId}`, {
      cache: "no-cache",
    });
    const project: any = await res.json();
    return project;
  }
</script>

<div class="absolute w-full h-[100vh] bg-slate-700/90 z-10">
  <div class="h-full p-4 flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl text-white font-bold uppercase">
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
        class="w-1/2 p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center bg-slate-700 border border-white rounded"
      >
        <input
          type="text"
          name="name"
          placeholder="Project's Name"
          class="w-2/3 px-2 py-1 rounded"
        />
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
    {:else}~
      {#await getProjectById()}
        <Loading />
      {:then project}
        <form
          method="POST"
          action={`/api/projects/${$utils.projectId}`}
          class="w-1/2 p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center bg-slate-700 border border-white rounded"
        >
          <input
            type="text"
            name="name"
            value={project.name}
            placeholder="Project's Name"
            class="w-2/3 px-2 py-1 rounded"
          />
          <textarea
            rows="5"
            name="description"
            value={project.description}
            placeholder="Project's Description"
            class="w-2/3 px-2 py-1 rounded"
          />
          <select
            name="status"
            value={project.status}
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
            value={convertToDatetimeLocal(project.due_date)}
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
      {/await}
    {/if}
  </div>
</div>
