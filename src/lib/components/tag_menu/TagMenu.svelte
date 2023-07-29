<script lang="ts">
  import TagForm from "../tag_form/TagForm.svelte";
  import TagList from "../tag_list/TagList.svelte";

  export let projectId: number = 0;
</script>

<div class="absolute w-full h-[100vh] bg-[#111e20]/90 z-10">
  <div class="h-full p-4 flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl text-[#ebf0f2] font-bold uppercase">Tags Menu</h1>
    <div class="md:w-2/3 xl:w-1/2 flex gap-2">
      <TagForm {projectId} />
      <TagList {projectId} />
    </div>
  </div>
</div>
