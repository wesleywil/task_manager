<script>
  import TaskItem from "$lib/components/task_item/TaskItem.svelte";
  import TaskProjectDetails from "$lib/components/task_project_details/TaskProjectDetails.svelte";
</script>

<div class="w-full h-full text-center">
  <!-- Project Details -->
  <TaskProjectDetails />
  <h1 class="mt-8 px-8 text-2xl text-left">Tasks</h1>
  <div class="mt-1 px-8 flex gap-8">
    <div class="grow p-1 flex flex-col border border-black rounded">
      <h1 class="font-semibold">
        New Request <span class="px-2 bg-black text-white rounded-full">6</span>
      </h1>
      <button class="w-full mt-1 text-3xl font-bold bg-white rounded">+</button>
      <div class="h-[70vh] mt-4 flex flex-col gap-2 overflow-y-auto">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
    <div class="grow p-1 flex flex-col border border-black rounded">
      <h1 class="font-semibold">
        In Progress <span class="px-2 bg-black text-white rounded-full">3</span>
      </h1>
      <button class="w-full mt-1 text-3xl font-bold bg-white rounded">+</button>
      <div class="h-[70vh] mt-4 flex flex-col gap-2 overflow-y-auto">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
    <div class="grow p-1 flex flex-col border border-black rounded">
      <h1 class="font-semibold">
        Complete <span class="px-2 bg-black text-white rounded-full">12</span>
      </h1>
      <button class="w-full mt-1 text-3xl font-bold bg-white rounded">+</button>
      <div class="h-[70vh] mt-4 flex flex-col gap-2 overflow-y-auto">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  </div>
</div>
