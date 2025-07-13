<script lang="ts">
  const faqs = 
  [
  {
    question: 'What is Project B23?',
    answer: 'Project B23 is an AI-powered business visibility and automation platform designed to help small and medium-sized businesses grow faster. It combines sales automation, marketing tools, lead generation, and analytics into a single streamlined dashboard.'
  },
  {
    question: 'Who is Project B23 for?',
    answer: 'Project B23 is built for business owners, agencies, startups, and entrepreneurs who want to automate client acquisition, increase visibility, and scale operations without high overhead costs.'
  },
  {
    question: 'Who is a pre-order holder?',
    answer: 'A pre-order holder is someone who secures early access to Project B23 before its official launch. This includes badge for founders, 1 month access, and the ability to convert their pre-order into equity.'
  },
  {
    question: 'What do I get as a pre-order holder?',
    answer: 'Pre-order holders receive option to convert to equity, up to 90% off the official share price, access to exclusive internal company performance information, and eligibility for monthly ROI for a lifetime.'
  },
  {
    question: 'How can I redeem my pre-order once the platform launches?',
    answer: 'Once the platform goes live, you will be contacted with instructions to access your benefits.'
  },
  {
    question: 'Can I request a refund after placing a pre-order?',
    answer: 'Pre-orders are non-refundable during development as the funds are used for product development. If however, after the development you decided to get a refund, you would be eligible for 1.5x the pre-order amount in a minimum of 6 months.'
  },
  {
    question: 'Can I upgrade my pre-order tier later?',
    answer: 'If slots are still available, you may upgrade your pre-order tier by purchasing more pre-orders. Upgrades include higher benefits and additional perks.'
  },
  {
    question: 'How do I contact support as a pre-order holder?',
    answer: 'Pre-order holders have priority support access. You can contact us via the official whatsapp account or live chat.'
  },
  {
    question: 'When is the official launch date of Project B23?',
    answer: 'The official launch is scheduled for November 2025. You  will be updated with any changes to this timeline.'
  },
  {
    question: 'Can I refer people to purchase the pre-order?',
    answer: 'Yes, you will earn 10% commission on each successful referral who purchases a pre-order using the last 7 digits of your phone number as referral ID.'
  }
]

  ;
</script>

<div class="faq-wrapper">
  <div class="faq-header">
    <h1>FAQs</h1>
    <p class="intro">Find answers to common questions about Project B23</p>
    <div class="hero-decoration"></div>
  </div>
  
  <div class="faq-grid">
    {#each faqs as faq, index}
      <div class="faq-card">
        <div class="faq-number">Q{index + 1}</div>
        <div class="faq-content">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .faq-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    color: var(--text);
  }

  .faq-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--primary);
  }

  .intro {
    font-size: 1.25rem;
    color: var(--secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
   .hero-decoration {
    width: 60px;
    height: 4px;
    background: var(--primary);
    margin: 0 auto;
    border-radius: 2px;
    animation: pulse 1.5s infinite ease-in-out;
  }
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .faq-card {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid var(--border);
  }

  .faq-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: var(--primary);
  }

  .faq-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 1rem;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(var(--primary-rgb), 0.1);
    border-radius: 50px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text);
    line-height: 1.4;
  }

  p {
    line-height: 1.7;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .faq-wrapper {
      padding: 2rem 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    .intro {
      font-size: 1.1rem;
    }

    .faq-grid {
      grid-template-columns: 1fr;
    }
  }
</style>