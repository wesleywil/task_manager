<script lang="ts">
  import { utils } from "../../../store/utils";

  let projectId = 0;
  $: projectId = $utils.projectId;

  const hidePanel = () => utils.switchHideDeletePanel();

  async function deleteProject(id: number) {
    const res = await fetch(`http://localhost:5173/api/projects/${projectId}`, {
      method: "DELETE",
      cache: "no-cache",
    });
    window.location.reload();
  }
</script>

<div class="w-fit py-1 px-2 bg-[#111e20] flex gap-4 rounded">
  <h1 class="font-semibold text-[#7bc243]">
    Are you sure you want to delete this project - {projectId}?
  </h1>
  <div class="flex justify-center gap-4 font-bold">
    <button
      on:click={() => deleteProject(projectId)}
      class="px-1 text-[#ebf0f2] bg-red-500 hover:bg-red-700 rounded"
      >Yes</button
    >
    <button
      on:click={hidePanel}
      class="px-1 text-[#111e20] bg-[#7bc243] hover:bg-green-600 rounded"
      >No</button
    >
  </div>
</div>
