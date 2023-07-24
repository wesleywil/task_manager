<script lang="ts">
  import type { LayoutData } from "./$types";

  import Menu from "../lib/components/menu/Menu.svelte";

  import "../app.css";
</script>

<div class="w-full h-[100vh] flex bg-orange-100">
  <Menu />
  <slot />
</div>
