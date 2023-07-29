<script lang="ts">
  import { utils } from "../../../store/utils";

  export let projectId: number;

  let taskId = 0;
  $: taskId = $utils.taskId;
</script>

<div
  class="w-full flex flex-col items-center justify-center bg-[#111e20] border border-[#7bc243] rounded"
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
    <div class="w-2/3 px-2 py-1 flex gap-4 bg-white rounded">
      <div class="flex flex-col items-center justify-center">
        <span class="text-gray-500">Text Color</span>
        <input type="color" name="textColor" />
      </div>
      <div class="flex flex-col items-center justify-center">
        <span class="text-gray-500">Background Color</span>
        <input type="color" name="bgColor" />
      </div>
    </div>
    <textarea
      name="description"
      rows="5"
      placeholder="Tag's Description"
      class="w-2/3 px-2 py-1 rounded"
    />
    <div class="flex justify-center gap-4">
      <button
        class="px-2 py-1 bg-[#7bc243] hover:bg-[#7bc243]/60 text-[#111e20] text-xl font-semibold rounded"
        >Submit</button
      >
      <button
        type="button"
        on:click={() => utils.switchTagMenu()}
        class="px-2 py-1 bg-[#7bc243] hover:bg-[#7bc243]/60 text-[#111e20] text-xl font-semibold rounded"
        >Cancel</button
      >
    </div>
  </form>
</div>
