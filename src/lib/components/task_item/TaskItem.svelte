<script lang="ts">
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
    <button on:click={() => switchDeletePanel(task.id)} class="self-center"
      ><svg
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 30 30"
      >
        <path
          d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"
        />
      </svg></button
    >
  </div>

  <p class="text-slate-600 text-xs">
    {task.description}
  </p>

  <h2 class="w-1/2 mx-auto mt-2 px-1 bg-red-600 text-white font-bold rounded">
    {task.priority}
  </h2>

  <h2 class="text-sm">Due Date: {String(task.due_date).slice(0, 10)}</h2>
  <div>
    <div>
      <span class="px-2 font-semibold bg-purple-200">Front-End</span>
    </div>
  </div>
  <button
    on:click={() => switchUpdateTaskForm(task.id)}
    class="w-full mt-2 text-xl bg-green-400 hover:bg-green-600 text-black font-semibold rounded-xl"
    >Update</button
  >
</div>
