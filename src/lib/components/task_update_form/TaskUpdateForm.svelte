<script lang="ts">
  import { convertToDatetimeLocal } from "../../../utils/utils";
  import { utils } from "../../../store/utils";
  import type { Task } from "../../../utils/interfaces";

  export let task: Task = {} as Task;
  let taskId = 0;
  $: taskId = $utils.taskId;
</script>

<form
  method="POST"
  action={`/api/projects/${task.projectId}/tasks/${taskId}/update`}
  class="w-1/2 p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center bg-slate-700 border border-white rounded"
>
  <input
    type="text"
    name="title"
    bind:value={task.title}
    placeholder="Task's Title"
    class="w-2/3 px-2 py-1 rounded"
  />
  <textarea
    rows="5"
    name="description"
    bind:value={task.description}
    placeholder="Task's Description"
    class="w-2/3 px-2 py-1 rounded"
  />
  <select
    name="status"
    bind:value={task.status}
    class="w-2/3 px-2 py-1 rounded"
  >
    <option value="TO_DO">To Do</option>
    <option value="IN_PROGRESS">In Progress</option>
    <option value="COMPLETED">Completed</option>
    <option value="BLOCKED">Blocked</option>
  </select>
  <select
    name="priority"
    bind:value={task.priority}
    class="w-2/3 px-2 py-1 rounded"
  >
    <option value="HIGH">High</option>
    <option value="MEDIUM">Medium</option>
    <option value="LOW">Low</option>
  </select>
  <input
    type="datetime-local"
    step="1"
    name="due_date"
    value={convertToDatetimeLocal(String(task.due_date))}
    class="w-2/3 px-2 py-1 rounded"
  />
  <div class="flex justify-center gap-4">
    <button
      class="px-2 py-1 bg-black hover:bg-slate-900 text-white text-xl font-semibold rounded"
      >Submit</button
    >
    <button
      type="button"
      on:click={() => utils.switchTaskForm()}
      class="px-2 py-1 bg-black hover:bg-slate-900 text-white text-xl font-semibold rounded"
      >Cancel</button
    >
  </div>
</form>
