<script lang="ts">
  import { utils } from "../../../store/utils";
  export let projectId = 0;
</script>

<div class="absolute w-full h-[100vh] bg-[#111e20]/90 z-10">
  <div class="h-full p-4 flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl text-[#ebf0f2] font-bold uppercase">New Category</h1>
    <form
      method="POST"
      action={`/api/projects/${projectId}/categories`}
      class="w-1/2 p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center bg-[#111e20] border border-[#7bc243] rounded"
    >
      <input
        type="text"
        name="title"
        placeholder="Project's Name"
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
        rows="5"
        name="description"
        placeholder="Project's Description"
        class="w-2/3 px-2 py-1 rounded"
      />
      <div class="flex justify-center gap-4">
        <button
          class="px-2 py-1 bg-[#7bc243] hover:bg-[#7bc243]/60 text-[#111e20] text-xl font-semibold rounded"
          >Submit</button
        >
        <button
          type="button"
          on:click={() => utils.switchCategoryForm()}
          class="px-2 py-1 bg-[#7bc243] hover:bg-[#7bc243]/60 text-[#111e20] text-xl font-semibold rounded"
          >Cancel</button
        >
      </div>
    </form>
  </div>
</div>
