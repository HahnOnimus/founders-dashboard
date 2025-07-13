<div class="timeline-wrapper">
  <h1>Timeline</h1>
  <p class="intro">Follow the project journey from start to finish.</p>
  <div class="hero-decoration"></div>
  <div class="timeline-content">
    {#each timelineSteps as step, index}
      <div class="timeline-entry" class:active={index === activeIndex}>
        <div class="timeline-node">
          <span class="diamond-icon">◆</span>
          <span class="node-label" style="color: var(--primary);">{step.label}</span>
        </div>
        <div class="timeline-details" class:current={index === activeIndex}>
          <h3>{step.title}</h3>
          <p class="date">{step.date}</p>
          <p>{step.details}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .timeline-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
    color: var(--text);
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--primary);
  }
   .hero-decoration {
    width: 60px;
    height: 5px;
    background: greenyellow;
    margin: 0 auto;
    border-radius: 2px;
    animation: pulse 1.5s infinite ease-in-out;
  }
  
  .intro {
    text-align: center;
    color: var(--secondary);
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }

  .timeline-content {
    position: relative;
    padding: 1rem 0;
  }

  .timeline-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: var(--border);
    z-index: 0;
  }

  .timeline-entry {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  .timeline-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    z-index: 2;
  }

  .diamond-icon {
    font-size: 1.5rem;
    color: var(--primary);
    margin-bottom: 0.25rem;
  }

  .node-label {
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
  }

  .timeline-entry.active .node-label {
    font-weight: 700;
  }

  .timeline-details {
    flex: 1;
    padding: 1.5rem 2rem;
    background: var(--card-bg);
    border-radius: 0.75rem;
    box-shadow: 0 4px 12px rgba(0, 0, 6, 0.1);
    margin-left: 2rem;
    transition: transform 0.3s ease;
  }

  .timeline-details.current {
    border: 3px dashed var(--primary);
  }

  .timeline-entry:hover .timeline-details {
    transform: translateX(10px);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .date {
    color: var(--secondary);
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.6;
    color: var(--text);
  }

  @media (max-width: 768px) {
    .timeline-wrapper {
      padding: 1.5rem 1rem;
    }

    h1 {
      font-size: 1.75rem;
    }

    .intro {
      font-size: 1rem;
    }

    .timeline-content::before {
      left: 30px;
      transform: none;
    }

    .timeline-entry {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 2.5rem;
    }

    .timeline-node {
      margin-bottom: 1rem;
    }

    .timeline-details {
      margin-left: 0;
      width: 100%;
    }

    .timeline-entry:hover .timeline-details {
      transform: translateX(0);
    }
  }
</style>

<script lang="ts">
  let activeIndex = 1; // Highlight the second step (Build) as the current milestone
  const timelineSteps = [
    {
      label: 'Start',
      title: 'Project Kickoff',
      date: '2025-06-27',
      details: 'Officially start with team briefing and resource allocation.'
    },
    {
      label: 'Pre-orders',
      title: 'sales of 200 Pre-orders',
      date: '01 - 30, July, 2025',
      details: 'The full month of July dedicated for sales of the Pre-orders.'
    },
    {
      label: 'Product Development',
      title: 'Development Phase',
      date: '2025-08-01 - 2025-10-31',
      details: 'The development of the Minimum Viable Product (MVP) for the product commences. This phase includes design, prototyping, and initial testing to ensure the product meets market needs.'
    },
    {
      label: 'Launch',
      title: 'Market Launch',
      date: '01-11-2025',
      details: 'The product is officially launched to the public.'
    },
    
  ];
</script>