<script lang="ts">
  import FaTrashAlt from "svelte-icons/fa/FaTrashAlt.svelte";
  import type { Category } from "../../../utils/interfaces";

  export let category: Category = {} as Category;

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:5173/api/projects/${category.projectId}/categories/${category.id}`,
      {
        method: "DELETE",
      }
    );
    console.log("RETURN=> ", await res.json());
    window.location.reload();
  };
</script>

<div
  class="px-2 py-1 flex justify-center items-center gap-2 bg-blue-200 font-semibold rounded-xl"
>
  <span class="self-center">{category.title}</span>
  <div class="self-center h-4 w-4">
    <button on:click={handleDelete} class="text-red-500 hover:text-red-700"
      ><FaTrashAlt /></button
    >
  </div>
</div>
