<script lang="ts">
  export let name: string;
  export let tasks: Array<any>;
</script>

<div
  class="w-42 py-2 bg-white text-black font-semibold border rounded-xl shadow"
>
  <h1 class="w-full bg-orange-200">{name}</h1>
  <div
    class="w-20 h-20 mt-2 mx-2 mx-auto flex flex-col items-center justify-center bg-black text-white rounded-full"
  >
    <h2>Tasks</h2>
    <h1>{tasks.length}</h1>
  </div>
</div>
