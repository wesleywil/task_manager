<script lang="ts">
  import { utils } from "../../../store/utils";

  export let projectId: number;

  let taskId = 0;
  $: taskId = $utils.taskId;
</script>

<div
  class="w-full flex flex-col items-center justify-center bg-slate-700 border border-white rounded"
>
  <h1 class="text-3xl text-white font-semibold">New Tag</h1>
  <form
    method="POST"
    action={`/api/projects/${projectId}/tasks/${taskId}/tags`}
    class="w-full p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center"
  >
    <input
      type="text"
      name="title"
      placeholder="Tag's title"
      class="w-2/3 px-2 py-1 rounded"
    />
    <textarea
      name="description"
      rows="5"
      placeholder="Tag's Description"
      class="w-2/3 px-2 py-1 rounded"
    />
    <div class="flex justify-center gap-4">
      <button
        class="px-2 py-1 bg-black hover:bg-slate-900 text-white text-xl font-semibold rounded"
        >Submit</button
      >
      <button
        type="button"
        class="px-2 py-1 bg-black hover:bg-slate-900 text-white text-xl font-semibold rounded"
        >Cancel</button
      >
    </div>
  </form>
</div>
