<script lang="ts">
  import { onMount } from "svelte";

  import TaskItem from "$lib/components/task_item/TaskItem.svelte";
  import TaskProjectDetails from "$lib/components/task_project_details/TaskProjectDetails.svelte";
  import TaskForm from "$lib/components/task_form/TaskForm.svelte";
  import Loading from "$lib/components/loading/Loading.svelte";

  import type { Project } from "../../../../utils/interfaces";
  import { Task_Status } from "../../../../utils/interfaces";

  import { utils } from "../../../../store/utils";
  import { tasks } from "../../../../store/tasks";

  export let data: { id: number };

  // Store states
  let hideForm = true;
  $: hideForm = $utils.hideTaskForm;

  let project: Project = {} as Project;

  onMount(async () => {
    const res = await fetch(`http://localhost:5173/api/projects/${data.id}`, {
      cache: "no-cache",
    });
    project = await res.json();
  });

  const switchHideForm = (task_status: Task_Status) => {
    utils.switchTaskForm();
    tasks.setTaskStatus(task_status);
  };
</script>

{#await project}
  <Loading />
{:then projectData}
  {#if hideForm}
    <div />
  {:else}
    <TaskForm projectId={projectData.id} />
  {/if}
  <div class="w-full h-full text-center">
    <!-- Project Details -->
    <TaskProjectDetails project={projectData} />
    <h1 class="mt-8 px-8 text-2xl text-left">Tasks</h1>
    <div class="mt-1 px-8 flex gap-8">
      <div class="w-[20vw] p-1 flex flex-col border border-black rounded">
        <h1 class="font-semibold">
          To Do
          <span class="px-2 bg-black text-white rounded-full">6</span>
        </h1>
        <button
          on:click={() => {
            switchHideForm(Task_Status.TO_DO);
          }}
          class="w-full mt-1 text-3xl font-bold bg-white hover:bg-slate-200 rounded"
          >+</button
        >
        <div class="h-[70vh] mt-4 flex flex-col gap-2 overflow-y-auto">
          {#if projectData.tasks !== undefined}
            {#each projectData.tasks as tasks}
              {#if tasks.status === Task_Status.TO_DO}
                <TaskItem task={tasks} />
              {/if}
            {/each}
          {/if}
        </div>
      </div>
      <div class="w-[20vw] p-1 flex flex-col border border-black rounded">
        <h1 class="font-semibold">
          In Progress <span class="px-2 bg-black text-white rounded-full"
            >6</span
          >
        </h1>
        <button
          on:click={() => {
            switchHideForm(Task_Status.IN_PROGRESS);
          }}
          class="w-full mt-1 text-3xl font-bold bg-white hover:bg-slate-200 rounded"
          >+</button
        >
        <div class="h-[70vh] mt-4 flex flex-col gap-2 overflow-y-auto">
          {#if projectData.tasks !== undefined}
            {#each projectData.tasks as tasks}
              {#if tasks.status === Task_Status.IN_PROGRESS}
                <TaskItem task={tasks} />
              {/if}
            {/each}
          {/if}
        </div>
      </div>
      <div class="w-[20vw] p-1 flex flex-col border border-black rounded">
        <h1 class="font-semibold">
          Completed <span class="px-2 bg-black text-white rounded-full">3</span>
        </h1>
        <button
          on:click={() => {
            switchHideForm(Task_Status.COMPLETED);
          }}
          class="w-full mt-1 text-3xl font-bold bg-white hover:bg-slate-200 rounded"
          >+</button
        >
        <div class="h-[70vh] mt-4 flex flex-col gap-2 overflow-y-auto">
          {#if projectData.tasks !== undefined}
            {#each projectData.tasks as tasks}
              {#if tasks.status === Task_Status.COMPLETED}
                <TaskItem task={tasks} />
              {/if}
            {/each}
          {/if}
        </div>
      </div>
      <div class="w-[20vw] p-1 flex flex-col border border-black rounded">
        <h1 class="font-semibold">
          Blocked <span class="px-2 bg-black text-white rounded-full">12</span>
        </h1>
        <button
          on:click={() => {
            switchHideForm(Task_Status.BLOCKED);
          }}
          class="w-full mt-1 text-3xl font-bold bg-white hover:bg-slate-200 rounded"
          >+</button
        >
        <div class="h-[70vh] mt-4 flex flex-col gap-2 overflow-y-auto">
          {#if projectData.tasks !== undefined}
            {#each projectData.tasks as tasks}
              {#if tasks.status === Task_Status.BLOCKED}
                <TaskItem task={tasks} />
              {/if}
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
{/await}
