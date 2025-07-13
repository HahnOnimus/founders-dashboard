<!-- src/App.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { auth } from './lib/firebase';
  import { onAuthStateChanged } from 'firebase/auth';
  import { user } from './stores/auth';
  import Login from './routes/+page.svelte';
  import DashboardLayout from './layouts/DashboardLayout.svelte';

  let loading = true;

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      user.set(firebaseUser);
      loading = false;
    });

    return () => unsubscribe();
  });
</script>

<svelte:head>
  <title>My Awesome App</title>
  <meta name="description" content="A beautiful responsive web app" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

{#if loading}
  <div class="flex items-center justify-center h-screen">
    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
{:else}
  {#if !$user}
    <Login />
  {:else}
    <DashboardLayout>
      <slot />
    </DashboardLayout>
  {/if}
{/if}