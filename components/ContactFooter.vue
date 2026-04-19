<template>
  <footer class="contact" aria-labelledby="contact-heading">
    <h2 class="section-heading" id="contact-heading">Contact</h2>

    <div class="contact-buttons">
      <a href="mailto:byron@sendu.ug" class="btn" rel="noopener">
        byron@sendu.ug
      </a>
      <a href="https://wa.me/447913836424" class="btn btn-accent" rel="noopener" target="_blank">
        Message on WhatsApp
      </a>
    </div>

    <div class="footer-meta">
      <span>&copy; {{ new Date().getFullYear() }} Byron Biroli</span>
      <span>Kampala / London</span>
    </div>
  </footer>
</template>

<style scoped>
.contact {
    padding-bottom: var(--space-10);
}

.contact-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 0.75rem 1.25rem;
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1;
    border: 1px solid var(--color-border-strong);
    background: transparent;
    color: var(--color-fg);
    border-radius: 2px;
    cursor: pointer;
    transition: border-color 180ms var(--ease-out),
                background 180ms var(--ease-out);
    text-decoration: none;
}

.btn:hover {
    border-color: var(--color-fg);
    background: rgba(245, 245, 243, 0.04);
}

.btn-accent {
    border-color: var(--color-accent);
    color: var(--color-accent);
}

.btn-accent:hover {
    background: rgba(4, 255, 136, 0.08);
    border-color: var(--color-accent);
}

.footer-meta {
    margin-top: var(--space-7);
    padding-top: var(--space-5);
    border-top: 1px solid var(--color-border);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-fg-dim);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-3);
}

@media (max-width: 640px) {
    .contact-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .btn {
        justify-content: center;
    }

    .footer-meta {
        flex-direction: column;
        gap: var(--space-2);
    }
}
</style>
