<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
  import HamburgerIcon from '$lib/components/HamburgerIcon.svelte';
  import { onMount } from 'svelte';

  let isSidebarOpen = false;

  const openWhatsApp = () => {
    const phoneNumber = '+2348100322782';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  onMount(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        isSidebarOpen = false;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</svelte:head>

<div class="dashboard-layout">
  <button class="hamburger-button" on:click={toggleSidebar}>
    <HamburgerIcon isOpen={isSidebarOpen} />
  </button>
  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  <main>
    <slot />
  </main>
  
  <!-- WhatsApp FAB using Font Awesome -->
  <button class="whatsapp-fab" on:click={openWhatsApp} aria-label="Chat on WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </button>
</div>

<style>
  .dashboard-layout {
    display: flex;
    position: relative;
  }

  .hamburger-button {
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    background: none;
    border: none;
    z-index: 1100;
  }

  main {
    margin-left: 250px;
    padding: 2rem;
    width: 100%;
  }

  /* WhatsApp FAB Styles */
  .whatsapp-fab {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #25D366; /* WhatsApp brand color */
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: all 0.3s ease;
    font-size: 28px;
  }

  .whatsapp-fab:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    background-color: #128C7E; /* Darker shade on hover */
  }

  @media (max-width: 768px) {
    .hamburger-button {
      display: block;
    }

    main {
      margin-left: 0;
      padding: 1rem;
      margin-top: 4rem;
    }

    .whatsapp-fab {
      width: 50px;
      height: 50px;
      font-size: 24px;
      bottom: 1.5rem;
      right: 1.5rem;
    }
  }
</style>