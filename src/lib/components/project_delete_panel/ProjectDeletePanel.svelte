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

<div class="w-fit py-1 px-2 bg-black flex gap-4 rounded">
  <h1 class="font-semibold text-red-600">
    Are you sure you want to delete this project - {projectId}?
  </h1>
  <div class="flex justify-center gap-1 font-bold">
    <button
      on:click={() => deleteProject(projectId)}
      class="px-1 bg-red-400 hover:bg-red-600 rounded">Yes</button
    >/
    <button
      on:click={hidePanel}
      class="px-1 bg-green-400 hover:bg-green-600 rounded">No</button
    >
  </div>
</div>
