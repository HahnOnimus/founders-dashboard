<script lang="ts">
  export let isOpen: boolean;
</script>

<div class="hamburger" class:open={isOpen}>
  <span></span>
  <span></span>
  <span></span>
</div>

<style>
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    cursor: pointer;
  }

  .hamburger span {
    width: 100%;
    height: 3px;
    background: var(--text);
    transition: all 0.3s ease;
  }

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
  }
</style>