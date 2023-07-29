<script lang="ts">
  import type { Task } from "../../../utils/interfaces";

  export let name: string;
  export let tasks: Task[];
</script>

<div
  class="w-42 py-2 bg-white text-[#111e20] font-semibold border rounded-xl shadow"
>
  <h1 class="w-full bg-[#ebf0f2]">{name}</h1>
  <div
    class="w-20 h-20 mt-2 mx-4 mx-auto flex flex-col items-center justify-center bg-[#111e20] text-white rounded-full"
  >
    <h2>Tasks</h2>
    <h1>{tasks.length}</h1>
  </div>
</div>
