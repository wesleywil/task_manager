<script lang="ts">
  import { onMount } from "svelte";
  import FaTrashAlt from "svelte-icons/fa/FaTrashAlt.svelte";
  import type { Task } from "../../../utils/interfaces";
  import { utils } from "../../../store/utils";

  export let projectId: number;

  let taskId = 0;
  $: taskId = $utils.taskId;

  let task: Task = {} as Task;
  onMount(async () => {
    console.log("PROJECTID=>", projectId, " TaskId=> ", taskId);
    const res = await fetch(
      `http://localhost:5173/api/projects/${projectId}/tasks`
    );
    task = await res.json();
  });

  const handleTagDelete = async (id: number) => {
    const req = await fetch(`http://localhost:5173/api/tags/${id}`, {
      method: "DELETE",
    });
    const res = await req.json();
    console.log("RETURN MESSAGE=> ", res.message);
    if (res.message === "Tag deleted successfully!") {
      window.location.reload();
    }
  };
</script>

<div
  class="w-full flex flex-col items-center bg-slate-700 border border-white rounded"
>
  <h1 class="mb-4 text-3xl text-white font-semibold">Tags</h1>
  <div class="flex flex-wrap gap-2 justify-center">
    {#if task.tags !== undefined}
      {#each task.tags as tags}
        <div
          class="p-2 flex gap-4 items-center bg-red-400 text-white font-semibold rounded"
        >
          <h1>{tags.title}</h1>
          <button
            on:click={() => handleTagDelete(tags.id)}
            class="w-6 h-6 p-1 bg-white text-red-400 hover:text-red-600 rounded"
            ><FaTrashAlt /></button
          >
        </div>
      {/each}
    {/if}
  </div>
</div>
