<script lang="ts">
  export let projects: Array<any>;
</script>

<div>
  <table class="border-x border-black">
    <tr class="border-b border-black">
      <th class="px-1 bg-slate-400 text-white border-x border-black"
        >Favorite</th
      >
      <th class="px-1 bg-slate-400 text-white border-r border-black">Project</th
      >
      <th class="px-1 bg-slate-400 text-white border-r border-black"
        >Project Description</th
      >
      <th class="px-1 bg-slate-400 text-white border-r border-black">Status</th>
      <th class="px-1 bg-slate-400 text-white border-r border-black"
        >Start/Due Date</th
      >
      <th class="px-1 bg-slate-400 text-white border-r border-black"
        >Priority</th
      >
      <!-- <th class="px-1 bg-slate-400 text-white border-r border-black"
        >Tags/Categories</th
      > -->
      <th class="px-1 bg-slate-400 text-white border-r border-black">Actions</th
      >
    </tr>
    {#each projects as project}
      <tr class="border-b border-black">
        <td><input type="checkbox" /></td>
        <td><span>{project.name}</span></td>
        <td
          ><p class="p-2">
            {project.description}
          </p></td
        >
        <td
          ><span class="px-2 bg-green-500 text-white font-semibold rounded-xl"
            >{project.status}</span
          ></td
        >
        <td>{project.start_date}-{project.due_date}</td>
        <td><span class="text-red-600 font-bold">{project.priority}</span></td>
        <!-- <td
        ><div class="py-1 flex flex-col gap-2 items-center">
          <span class="w-fit px-2 bg-yellow-200 rounded">Design</span><span
            class="w-fit px-2 bg-red-200 rounded">Development</span
          >
        </div></td
      > -->
        <td>
          <div class="flex flex-wrap gap-2 justify-center">
            <button class="px-2 bg-green-400 font-semibold rounded">Edit</button
            >
            <button class="px-2 bg-red-400 font-semibold rounded">Delete</button
            >
          </div>
        </td>
      </tr>
    {/each}
    <!-- <tr class="border-b border-black">
      <td><input type="checkbox" /></td>
      <td><span>Project name</span></td>
      <td
        ><p class="p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p></td
      >
      <td
        ><span class="px-2 bg-green-500 text-white font-semibold rounded-xl"
          >In Progress</span
        ></td
      >
      <td>07/12/2023-08/12/2023</td>
      <td><span class="text-red-600 font-bold">High</span></td>
      <td
        ><div class="py-1 flex flex-col gap-2 items-center">
          <span class="w-fit px-2 bg-yellow-200 rounded">Design</span><span
            class="w-fit px-2 bg-red-200 rounded">Development</span
          >
        </div></td
      >
      <td>
        <div class="flex flex-wrap gap-2 justify-center">
          <button class="px-2 bg-green-400 font-semibold rounded">Edit</button>
          <button class="px-2 bg-red-400 font-semibold rounded">Delete</button>
        </div>
      </td>
    </tr>
    <tr class="border-b border-black">
      <td><input type="checkbox" /></td>
      <td><span>Project name</span></td>
      <td
        ><p class="p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p></td
      >
      <td
        ><span class="px-2 bg-green-500 text-white font-semibold rounded-xl"
          >In Progress</span
        ></td
      >
      <td>07/12/2023-08/12/2023</td>
      <td><span class="text-red-600 font-bold">High</span></td>
      <td
        ><div class="flex flex-col gap-2 items-center">
          <span class="w-fit px-2 bg-yellow-200 rounded">Design</span><span
            class="w-fit px-2 bg-red-200 rounded">Development</span
          >
        </div></td
      >
      <td>
        <div class="flex flex-wrap gap-2 justify-center">
          <button class="px-2 bg-green-400 font-semibold rounded">Edit</button>
          <button class="px-2 bg-red-400 font-semibold rounded">Delete</button>
        </div>
      </td>
    </tr> -->
  </table>
</div>
