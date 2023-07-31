<script lang="ts">
  import type { Task } from "../../../utils/interfaces";
  import { Task_Status } from "../../../utils/interfaces";
  export let task: Task = {} as Task;

  const handleTaskUpdate = async (task_status: Task_Status) => {
    console.log("ProjectId =>", task.projectId, " Task Id=> ", task.id);
    const req = await fetch(
      `http://localhost:5173/api/projects/${task.projectId}/tasks/${task.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: task_status }),
      }
    );
    const data = await req.json();
    if (data.message === "Task Updated Successfully!") {
      window.location.reload();
    }
  };
</script>

<div class="absolute mt-4 flex flex-col gap-2">
  {#if task.status === Task_Status.TO_DO}
    <button
      on:click={() => handleTaskUpdate(Task_Status.IN_PROGRESS)}
      class="btnTest bg-blue-400 hover:bg-blue-600"
    >
      <span class="textTest">In Progress</span>
    </button>
    <button
      on:click={() => handleTaskUpdate(Task_Status.COMPLETED)}
      class="btnTest bg-green-400 hover:bg-green-600"
    >
      <span class="textTest">Completed</span>
    </button>
    <button
      on:click={() => handleTaskUpdate(Task_Status.BLOCKED)}
      class="btnTest bg-red-400 hover:bg-red-600"
    >
      <span class="textTest">Blocked</span>
    </button>
  {:else if task.status === Task_Status.IN_PROGRESS}
    <button
      on:click={() => handleTaskUpdate(Task_Status.TO_DO)}
      class="btnTest bg-yellow-400 hover:bg-yellow-600"
    >
      <span class="textTest">To Do</span>
    </button>
    <button
      on:click={() => handleTaskUpdate(Task_Status.COMPLETED)}
      class="btnTest bg-green-400 hover:bg-green-600"
    >
      <span class="textTest">Completed</span>
    </button>
    <button
      on:click={() => handleTaskUpdate(Task_Status.BLOCKED)}
      class="btnTest bg-red-400 hover:bg-red-600"
    >
      <span class="textTest">Blocked</span>
    </button>
  {:else if task.status === Task_Status.COMPLETED}
    <button
      on:click={() => handleTaskUpdate(Task_Status.TO_DO)}
      class="btnTest bg-yellow-400 hover:bg-yellow-600"
    >
      <span class="textTest">To Do</span>
    </button>
    <button
      on:click={() => handleTaskUpdate(Task_Status.IN_PROGRESS)}
      class="btnTest bg-blue-400 hover:bg-blue-600"
    >
      <span class="textTest">In Progress</span>
    </button>
    <button
      on:click={() => handleTaskUpdate(Task_Status.BLOCKED)}
      class="btnTest bg-red-400 hover:bg-red-600"
    >
      <span class="textTest">Blocked</span>
    </button>
  {:else}
    <button
      on:click={() => handleTaskUpdate(Task_Status.TO_DO)}
      class="btnTest bg-yellow-400 hover:bg-yellow-600"
    >
      <span class="textTest">To Do</span>
    </button>
    <button
      on:click={() => handleTaskUpdate(Task_Status.IN_PROGRESS)}
      class="btnTest bg-blue-400 hover:bg-blue-600"
    >
      <span class="textTest">In Progress</span>
    </button>
    <button
      on:click={() => handleTaskUpdate(Task_Status.COMPLETED)}
      class="btnTest bg-green-400 hover:bg-green-600"
    >
      <span class="textTest">Completed</span>
    </button>
  {/if}
</div>

<!-- <div class="border-b-2 border-black">
  <div class="flex justify-center gap-2">
    {#if task.status === Task_Status.TO_DO}
      <button
        on:click={() => handleTaskUpdate(Task_Status.IN_PROGRESS)}
        class="p-3 bg-blue-300 hover:bg-blue-500 rounded-full"
      />
      <button
        on:click={() => handleTaskUpdate(Task_Status.COMPLETED)}
        class="p-3 bg-green-300 hover:bg-green-500 rounded-full"
      />
      <button
        on:click={() => handleTaskUpdate(Task_Status.BLOCKED)}
        class="p-3 bg-red-300 hover:bg-red-500 rounded-full"
      />
    {:else if task.status === Task_Status.IN_PROGRESS}
      <button
        on:click={() => handleTaskUpdate(Task_Status.TO_DO)}
        class="p-3 bg-yellow-300 hover:bg-yellow-500 rounded-full"
      />
      <button
        on:click={() => handleTaskUpdate(Task_Status.COMPLETED)}
        class="p-3 bg-green-300 hover:bg-green-500 rounded-full"
      />
      <button
        on:click={() => handleTaskUpdate(Task_Status.BLOCKED)}
        class="p-3 bg-red-300 hover:bg-red-500 rounded-full"
      />
    {:else if task.status === Task_Status.COMPLETED}
      <button
        on:click={() => handleTaskUpdate(Task_Status.TO_DO)}
        class="p-3 bg-yellow-300 hover:bg-yellow-500 rounded-full"
      />
      <button
        on:click={() => handleTaskUpdate(Task_Status.IN_PROGRESS)}
        class="p-3 bg-blue-300 hover:bg-blue-500 rounded-full"
      />
      <button
        on:click={() => handleTaskUpdate(Task_Status.BLOCKED)}
        class="p-3 bg-red-300 hover:bg-red-500 rounded-full"
      />
    {:else}
      <button
        on:click={() => handleTaskUpdate(Task_Status.TO_DO)}
        class="p-3 bg-yellow-300 hover:bg-yellow-500 rounded-full"
      />
      <button
        on:click={() => handleTaskUpdate(Task_Status.IN_PROGRESS)}
        class="p-3 bg-blue-300 hover:bg-blue-500 rounded-full"
      />
      <button
        on:click={() => handleTaskUpdate(Task_Status.COMPLETED)}
        class="p-3 bg-green-300 hover:bg-green-500 rounded-full"
      />
    {/if}
  </div>
  <h1 class="text-sm">status</h1>
</div> -->
