<script lang="ts">
  import { utils } from "../../../store/utils";

  import TaskForm from "../task_form/TaskForm.svelte";
  import CategoryForm from "../category_form/CategoryForm.svelte";
  import TagMenu from "../tag_menu/TagMenu.svelte";

  export let projectId = 0;

  //Store states
  let hideForm = true;
  $: hideForm = $utils.hideTaskForm;
  let hideCategoryForm = true;
  $: hideCategoryForm = $utils.hideCategoryForm;
  let hideTagMenu = true;
  $: hideTagMenu = $utils.hideTagMenu;
</script>

<!-- Create/Update Project Form -->
{#if hideForm}
  <div />
{:else}
  <TaskForm {projectId} />
{/if}
<!-- Create/Update Category Form -->
{#if hideCategoryForm}
  <div />
{:else}
  <CategoryForm {projectId} />
{/if}
<!-- Create/Update Tag Form -->
{#if hideTagMenu}
  <div />
{:else}
  <TagMenu {projectId} />
{/if}
