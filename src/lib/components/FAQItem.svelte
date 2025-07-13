<script lang="ts">
  export let question: string;
  export let answer: string;
</script>

<div class="faq-item">
  <h3>{question}</h3>
  <p>{answer}</p>
</div>

<style>
  .faq-item {
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--secondary);
  }
</style>