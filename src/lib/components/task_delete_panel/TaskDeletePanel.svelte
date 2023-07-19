<script lang="ts">
  import { utils } from "../../../store/utils";

  export let projectId = 0;

  let taskId = 0;
  $: taskId = $utils.taskId;

  const hidePanel = () => utils.switchHideDeleteTaskPanel();

  async function deleteTask() {
    const res = await fetch(
      `http://localhost:5173/api/projects/${projectId}/tasks/${taskId}`,
      {
        method: "DELETE",
        cache: "no-cache",
      }
    );
    window.location.reload();
  }
</script>

<div class="w-11/12 mx-auto p-1">
  <h1 class="font-semibold text-red-600">
    Are you sure you want to delete this task?
  </h1>
  <div class="flex justify-center gap-1 font-bold">
    <button
      on:click={deleteTask}
      class="px-1 bg-red-400 hover:bg-red-600 rounded">Yes</button
    >/
    <button
      on:click={hidePanel}
      class="px-1 bg-green-400 hover:bg-green-600 rounded">No</button
    >
  </div>
</div>
