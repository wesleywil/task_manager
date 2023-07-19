<script lang="ts">
  import { utils } from "../../../store/utils";
  import type { Task } from "../../../utils/interfaces";
  import TaskItemStatusUpdate from "../task_item_status_update/TaskItemStatusUpdate.svelte";

  export let task: Task = {} as Task;

  const switchUpdateTaskForm = (id: number) => {
    utils.switchTaskForm();
    utils.selectTaskId(id);
  };
</script>

<div class="w-11/12 mx-auto p-1 bg-slate-200 rounded shadow">
  <TaskItemStatusUpdate {task} />
  <h1 class="text-xl font-semibold">{task.title}</h1>
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
