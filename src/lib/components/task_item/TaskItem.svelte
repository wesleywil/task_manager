<script lang="ts">
  import type { Task } from "../../../utils/interfaces";

  export let task: Task = {} as Task;
</script>

<div class="w-11/12 mx-auto p-1 bg-slate-200 rounded shadow">
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
</div>
