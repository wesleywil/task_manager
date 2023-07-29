<script lang="ts">
  import type { LayoutData } from "./$types";

  import Menu from "../lib/components/menu/Menu.svelte";

  import "../app.css";
</script>

<svelte:head>
  <title>Task Manager</title>
</svelte:head>

<div class="w-full h-[100vh] flex bg-[#ebf0f2]">
  <Menu />
  <slot />
</div>
