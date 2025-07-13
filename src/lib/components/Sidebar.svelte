<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { auth } from '$lib/firebase/firebase';
  import { signOut } from 'firebase/auth';

  export let isOpen: boolean;
  export let toggleSidebar: () => void;

  const menuItems = [
    { name: 'Home', route: '/dashboard' },
    { name: 'Timeline', route: '/dashboard/timeline' },
    { name: 'FAQ', route: '/dashboard/faq' },
   ];

  async function handleSignOut() {
    await signOut(auth);
    goto('/');
  }
</script>

<aside class="sidebar" class:open={isOpen}>
  <div class="sidebar-header">
    <h2>Welcome</h2>
  </div>
  <nav>
    {#each menuItems as item}
      <a
        href={item.route}
        class:active={$page.url.pathname === item.route}
        on:click={toggleSidebar}
      >
        {item.name}
      </a>
    {/each}
  </nav>
  <button class="signout" on:click={handleSignOut}>Sign Out</button>
</aside>

<style>
  .sidebar {
    width: 250px;
    background: var(--card-bg);
    height: 100vh;
    padding: 1.5rem;
    position: fixed;
    border-right: 1px solid var(--border);
    transition: transform 0.3s ease;
  }

  .sidebar-header {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    padding: 0.75rem;
    border-radius: 0.375rem;
    color: var(--text);
    transition: background-color 0.2s;
  }

  a:hover {
    background: var(--background);
  }

  a.active {
    background: var(--primary);
    color: white;
  }

  .signout {
    margin-top: auto;
    display: block;
    width: 100%;
    background: white;
    color: #000;
  }

  @media (max-width: 768px) {
    .sidebar {
      transform: translateX(-100%);
      z-index: 1000;
    }

    .sidebar.open {
      transform: translateX(0);
    }

    nav {
      flex-direction: column;
    }
  }
</style>