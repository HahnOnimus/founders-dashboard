<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import type { Card as CardType } from '$lib/types/card';

  const cards: CardType[] = [
    {
      id: 1,
      title: 'Project Kickoff',
      timestamp: '2025-06-27 10:00 AM',
      message: 'The project was officially started.',
      color: 'green'
    },
    {
      id: 2,
      title: 'Pre-order sales started',
      timestamp: '2025-07-01 10:00 AM',
      message: 'Sales of 200 total pre-orders started. We are engaging marketers and referrals to boost sales.',
      color: 'green'
    }
  ];
</script>

<div class="home-container">
  <div class="hero-section">
    <h1>Overview</h1>
    <p class="hero-subtitle">Stay updated with latest activities and notifications.</p>
    <div class="hero-decoration"></div>
  </div>
  <div class="card-section">
    <div class="card-grid">
      {#each cards as card}
        <Card {card} />
      {/each}
    </div>
  </div>
</div>

<style>
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
    background: linear-gradient(135deg, rgba(249, 250, 251, 0.9), rgba(255, 255, 255, 0.9));
    min-height: 100vh;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    animation: fadeIn 0.5s ease-in-out;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 0.75rem;
  }

  .hero-subtitle {
    color: var(--secondary);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .hero-decoration {
    width: 60px;
    height: 4px;
    background: var(--primary);
    margin: 0 auto;
    border-radius: 2px;
    animation: pulse 1.5s infinite ease-in-out;
  }

  .card-section {
    padding: 1rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    animation: slideUp 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  @media (max-width: 768px) {
    .home-container {
      padding: 1.5rem 1rem;
    }

    .hero-section {
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .card-grid {
      grid-template-columns: 1fr;
    }
  }
</style>