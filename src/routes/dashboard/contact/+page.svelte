<script lang="ts">
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';

  const contacts = [
    { name: 'Support Team', phone: '+1234567890' },
    { name: 'Sales Team', phone: '+0987654321' }
  ];
</script>

<div class="contact-container">
  <h1>Contact Us</h1>
  <div class="contact-list">
    {#each contacts as contact}
      <div class="contact-item">
        <h3>{contact.name}</h3>
        <WhatsAppButton phone={contact.phone} />
      </div>
    {/each}
  </div>
</div>

<style>
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-item {
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 6, 0.1);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
</style>