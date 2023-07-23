<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
</script>

<p>
  {#if Object.keys($page.data.session || {}).length}
    {#if $page.data.session.user.image}
      <span
        style="background-image: url('{$page.data.session.user.image}')"
        class="avatar"
      />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong
        >{$page.data.session.user.email || $page.data.session.user.name}</strong
      >
    </span>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
    <div class="flex flex-col items-center justify-center">
      <span class="notSignedInText">You are not signed in</span>
      <button
        on:click={() => signIn("github")}
        class="px-2 py-1 bg-red-400 rounded">Sign In with GitHub</button
      >
    </div>
  {/if}
</p>
