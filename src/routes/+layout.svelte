<script lang="ts">
  import { signIn } from "@auth/sveltekit/client";
  import FaSignInAlt from "svelte-icons/fa/FaSignInAlt.svelte";
  import { page } from "$app/stores";
  import logo from "$lib/assets/logo.png";

  import Menu from "../lib/components/menu/Menu.svelte";

  import "../app.css";
</script>

<svelte:head>
  <title>Task Manager</title>
</svelte:head>
{#if $page.data.session && Object.keys($page.data.session).length}
  <div class="w-full h-[100vh] flex bg-[#ebf0f2]">
    <Menu />
    <slot />
  </div>
{:else}
  <div class="w-full h-[100vh] flex bg-[#ebf0f2]">
    <div class="w-full flex flex-col items-center justify-center">
      <img src={logo} alt="logo" class="w-24 h-24" />
      <h1 class="text-6xl font-bold">You're not logged!</h1>
      <h2 class="mt-2 text-2xl font-semibold">
        Unlock the full potential - Log in or sign up now!
      </h2>
      <button
        on:click={() => signIn("google")}
        class="mt-4 px-2 pb-2 bg-[#7bc243] hover:bg-[#3b8800] text-[#111e20] hover:text-[#ebf0f2] font-bold text-4xl rounded transition duration-700 ease-in-out"
      >
        <div class="flex gap-4">
          <div class="self-center h-8 w-8 mt-1"><FaSignInAlt /></div>
          <span class="self-center">Sign In</span>
        </div>
      </button>
    </div>
  </div>
{/if}
