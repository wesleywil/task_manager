<script lang="ts">
  import type { Project } from "../../../utils/interfaces";

  export let project: Project = {} as Project;
</script>

<div class="mt-4 px-8 text-left">
  <h1 class="text-3xl font-bold">
    {project.name}
  </h1>
  <p class="text-xs">
    {project.description}
  </p>
  <div class="mt-2 flex gap-2">
    <span class="px-2 bg-blue-200 font-semibold rounded-xl">Website</span>
    <span class="px-2 bg-green-200 font-semibold rounded-xl">Design</span>
    <span class="px-2 bg-red-200 font-semibold rounded-xl">Development</span>
  </div>
</div>
