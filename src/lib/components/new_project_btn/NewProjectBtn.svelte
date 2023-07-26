<script lang="ts">
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import { utils } from "../../../store/utils";

  const handleRedirect = () => {
    utils.switchHideForm();
  };
</script>

<div class="flex items-center gap-2 text-white">
  <a href="/projects" on:click={handleRedirect}>
    <div class="h-8 w-8 text-black bg-white hover:bg-slate-400 rounded-full">
      <FaPlus />
    </div>
  </a>
  <span class="text-sm">New Project</span>
</div>
