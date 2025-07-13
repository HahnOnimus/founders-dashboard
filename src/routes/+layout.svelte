<script lang="ts">
  import { auth } from '$lib/firebase/firebase';
  import { onAuthStateChanged } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import '../app.css';

  let isAuthenticated = false;

  onAuthStateChanged(auth, (user) => {
    isAuthenticated = !!user;
    if (!user && $page.url.pathname.startsWith('/dashboard')) {
      goto('/');
    }
  });
</script>

{#if isAuthenticated}
  <slot />
{:else}
  {#if $page.url.pathname !== '/'}
    <script>
      goto('/');
    </script>
  {/if}
  <slot />
{/if}