<script lang="ts">
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import { utils } from "../../../store/utils";

  const handleRedirect = () => {
    utils.switchHideForm();
  };
</script>

<div class="flex items-center gap-2 text-[#ebf0f2]">
  <a href="/projects" on:click={handleRedirect}>
    <div
      class="h-8 w-8 text-[#111e20] bg-[#7bc243] hover:bg-[#7bc243]/60 rounded-full transition duration-300 ease-in-out"
    >
      <FaPlus />
    </div>
  </a>
  <span class="text-sm">New Project</span>
</div>
