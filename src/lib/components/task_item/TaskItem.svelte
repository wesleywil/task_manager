<script lang="ts">
  import FaTrashAlt from "svelte-icons/fa/FaTrashAlt.svelte";
  import FaEllipsisH from "svelte-icons/fa/FaEllipsisH.svelte";

  import { utils } from "../../../store/utils";
  import type { Task } from "../../../utils/interfaces";
  import TaskDeletePanel from "../task_delete_panel/TaskDeletePanel.svelte";
  import TaskItemStatusUpdate from "../task_item_status_update/TaskItemStatusUpdate.svelte";

  export let task: Task = {} as Task;

  let hidePanel = true;
  $: hidePanel = $utils.hideDeleteTaskPanel;

  const switchUpdateTaskForm = (id: number) => {
    utils.switchTaskForm();
    utils.selectTaskId(id);
  };

  const switchDeletePanel = (id: number) => {
    utils.switchHideDeleteTaskPanel();
    utils.selectTaskId(id);
  };
</script>

{#if hidePanel === false}
  <TaskDeletePanel projectId={task.projectId} />
{/if}

<div class="w-11/12 mx-auto p-1 bg-slate-200 rounded shadow">
  <TaskItemStatusUpdate {task} />
  <div class="flex">
    <h1 class="grow ml-8 text-xl font-semibold">
      {task.title}
    </h1>
    <!-- DropDown -->
    <div class="w-4 h-4 mt-2 mx-2 dropdown dropdown-end">
      <label for="test" tabindex={0} class="text-xl font-bold">
        <span class="hover:text-red-400"><FaEllipsisH /></span>
      </label>
      <ul
        tabIndex={0}
        class="dropdown-content w-24 p-2 bg-slate-200 shadow flex flex-col items-center gap-1 rounded-box z-2"
      >
        <button
          class="w-full px-2 py-1 bg-yellow-400 hover:bg-yellow-600 rounded"
          >Tags</button
        >

        <button
          on:click={() => switchUpdateTaskForm(task.id)}
          class="w-full px-2 py-1 bg-green-400 hover:bg-green-600 rounded"
          >Update</button
        >

        <button
          on:click={() => switchDeletePanel(task.id)}
          class="w-full px-2 py-1 bg-red-400 hover:bg-red-600 rounded"
          >Delete</button
        >
      </ul>
    </div>
  </div>

  <p class="text-slate-600 text-xs">
    {task.description}
  </p>

  <h2 class="w-1/2 mx-auto mt-2 px-1 bg-red-600 text-white font-bold rounded">
    {task.priority}
  </h2>

  <h2 class="text-sm">Due Date: {String(task.due_date).slice(0, 10)}</h2>
  <div>
    <div class="flex flex-wrap gap-2">
      {#if task.tags !== undefined}
        {#each task.tags as tags}
          <span class="px-2 font-semibold bg-purple-200">{tags.title}</span>
        {/each}
      {/if}
    </div>
  </div>
</div>
