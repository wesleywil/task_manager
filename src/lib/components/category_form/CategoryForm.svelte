<script lang="ts">
  import { utils } from "../../../store/utils";
  export let projectId = 0;
</script>

<div class="absolute w-full h-[100vh] bg-slate-700/90 z-10">
  <div class="h-full p-4 flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl text-white font-bold uppercase">New Category</h1>
    <form
      method="POST"
      action={`/api/projects/${projectId}/categories`}
      class="w-1/2 p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center bg-slate-700 border border-white rounded"
    >
      <input
        type="text"
        name="title"
        placeholder="Project's Name"
        class="w-2/3 px-2 py-1 rounded"
      />

      <textarea
        rows="5"
        name="description"
        placeholder="Project's Description"
        class="w-2/3 px-2 py-1 rounded"
      />
      <div class="flex justify-center gap-4">
        <button
          class="px-2 py-1 bg-black hover:bg-slate-900 text-white text-xl font-semibold rounded"
          >Submit</button
        >
        <button
          type="button"
          on:click={() => utils.switchCategoryForm()}
          class="px-2 py-1 bg-black hover:bg-slate-900 text-white text-xl font-semibold rounded"
          >Cancel</button
        >
      </div>
    </form>
  </div>
</div>
