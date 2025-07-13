<script lang="ts">
  import { auth } from '$lib/firebase/firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let error = '';
  let isLoading = false;

  async function handleLogin(event: Event) {
    event.preventDefault();
    isLoading = true;
    error = '';
    try {
      await signInWithEmailAndPassword(auth, email, password);
      goto('/dashboard');
    } catch (err) {
      error = 'Invalid credentials';
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="login-container">
  <div class="login-card">
    <div class="icon-container">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="url(#gradient)" />
        <path d="M32 20C27.58 20 24 23.58 24 28C24 32.42 27.58 36 32 36C36.42 36 40 32.42 40 28C40 23.58 36.42 20 32 20ZM32 34C28.69 34 26 31.31 26 28C26 24.69 28.69 22 32 22C35.31 22 38 24.69 38 28C38 31.31 35.31 34 32 34ZM44 28C44 34.63 38.63 40 32 40C25.37 40 20 34.63 20 28C20 21.37 25.37 16 32 16C38.63 16 44 21.37 44 28Z" fill="white"/>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2563eb"/>
            <stop offset="1" stop-color="#3b82f6"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <h1>Hello there!</h1>
    <p class="subtitle">Sign in to access your Founder's account</p>
    <form on:submit={handleLogin}>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" bind:value={email} required placeholder="Enter your email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" bind:value={password} required placeholder="Enter your password" />
      </div>
      {#if error}
        <p class="error">{error}</p>
      {/if}
      <button type="submit" disabled={isLoading}>
        {#if isLoading}
          <span class="loader"></span>
          Signing In...
        {:else}
          Sign In
        {/if}
      </button>
    </form>
  </div>
</div>

<style>
  .login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient);
    padding: 1rem;
  }

  .login-card {
    background: var(--card-bg);
    padding: 2.5rem;
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 6, 0.15);
    width: 100%;
    max-width: 420px;
    text-align: center;
    animation: fadeIn 0.5s ease-in-out;
  }

  .icon-container {
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text);
  }

  .subtitle {
    color: var(--secondary);
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text);
  }

  .error {
    color: var(--red);
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    text-align: center;
  }

  button {
    position: relative;
    width: 100%;
    padding: 0.875rem;
    font-size: 1rem;
    background: var(--primary);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .loader {
    width: 20px;
    height: 20px;
    border: 3px solid #ffffff;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .login-card {
      padding: 1.5rem;
    }

    h1 {
      font-size: 1.75rem;
    }
  }
</style>