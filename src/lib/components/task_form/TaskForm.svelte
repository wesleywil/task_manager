<script lang="ts">
  import { tasks } from "../../../store/tasks";
  import { utils } from "../../../store/utils";
  import type { Task } from "../../../utils/interfaces";
  import { Task_Status } from "../../../utils/interfaces";
  import Loading from "../loading/Loading.svelte";
  import TaskUpdateForm from "../task_update_form/TaskUpdateForm.svelte";

  export let projectId: number;

  let task_status = Task_Status.TO_DO;
  $: task_status = $tasks.taskStatusSelected;

  let taskId = 0;
  $: taskId = $utils.taskId;

  async function getTaskById() {
    const res = await fetch(
      `http://localhost:5173/api/projects/${projectId}/tasks/${taskId}`,
      { cache: "no-cache" }
    );
    const task: Task = await res.json();
    return task;
  }
</script>

<div class="absolute w-full h-[100vh] bg-[#111e20]/90 z-10">
  <div class="h-full p-4 flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl text-[#ebf0f2] font-bold uppercase">New Task</h1>
    {#if taskId === 0}
      <form
        method="POST"
        action={`/api/projects/${projectId}/tasks`}
        class="w-1/2 p-2 py-4 font-semibold flex flex-col gap-4 items-center justify-center bg-[#111e20] border border-[#7bc243] rounded"
      >
        <input
          type="text"
          name="title"
          placeholder="Task's Title"
          class="w-2/3 px-2 py-1 rounded"
        />
        <textarea
          rows="5"
          name="description"
          placeholder="Task's Description"
          class="w-2/3 px-2 py-1 rounded"
        />
        <select
          name="status"
          value={task_status}
          class="w-2/3 px-2 py-1 rounded"
        >
          <option value="TO_DO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
          <option value="BLOCKED">Blocked</option>
        </select>
        <select name="priority" class="w-2/3 px-2 py-1 rounded">
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
        <input
          type="datetime-local"
          step="1"
          name="due_date"
          class="w-2/3 px-2 py-1 rounded"
        />
        <div class="flex justify-center gap-4">
          <button
            class="px-2 py-1 bg-[#7bc243] hover:bg-[#7bc243]/60 text-[#111e20] text-xl font-semibold rounded"
            >Submit</button
          >
          <button
            type="button"
            on:click={() => utils.switchTaskForm()}
            class="px-2 py-1 bg-[#7bc243] hover:bg-[#7bc243]/60 text-[#111e20] text-xl font-semibold rounded"
            >Cancel</button
          >
        </div>
      </form>
    {:else}
      {#await getTaskById()}
        <Loading />
      {:then task}
        <TaskUpdateForm {task} />
      {/await}
    {/if}
  </div>
</div>
