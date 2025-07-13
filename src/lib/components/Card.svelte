<script lang="ts">
  import type { Card } from '$lib/types/card';

  export let card: Card;
</script>

<div class="card">
  <div class="color-bar" style="background-color: var(--{card.color})"></div>
  <div class="card-content">
    <h3>{card.title}</h3>
    <p class="timestamp">{card.timestamp}</p>
    <p>{card.message}</p>
  </div>
</div>

<style>
  .card {
    background: var(--card-bg);
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 6, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: translateY(-4px);
  }

  .color-bar {
    height: 4px;
  }

  .card-content {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .timestamp {
    color: var(--secondary);
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }
</style>