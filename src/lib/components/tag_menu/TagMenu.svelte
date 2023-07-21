<script lang="ts">
  import TagForm from "../tag_form/TagForm.svelte";

  export let projectId: number = 0;
</script>

<div class="absolute w-full h-[100vh] bg-slate-700/90 z-10">
  <div class="h-full p-4 flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl text-white font-bold uppercase">Tags Menu</h1>
    <div class="w-1/2 flex gap-2">
      <TagForm {projectId} />
    </div>
  </div>
</div>
