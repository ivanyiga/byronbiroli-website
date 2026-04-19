<template>
  <li class="timeline-entry" :class="{ 'education-entry': variant === 'education' }">
    <p class="timeline-meta">{{ period }}</p>
    <h3 class="timeline-role">
      <span class="org">{{ org }}</span>
      <template v-if="title"> &middot; <span class="title">{{ title }}</span></template>
    </h3>
    <div class="timeline-description">
      <slot />
    </div>
  </li>
</template>

<script setup>
defineProps({
  period: String,
  org: String,
  title: String,
  variant: {
    type: String,
    default: 'career'
  }
})
</script>

<style scoped>
.timeline-entry {
    padding: var(--space-5) 0;
    border-top: 1px solid var(--color-border);
    list-style: none;
}

.timeline-entry:first-child {
    border-top: none;
    padding-top: 0;
}

.timeline-entry:last-child {
    padding-bottom: 0;
}

.timeline-meta {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: var(--color-fg-dim);
    margin-bottom: var(--space-2);
}

.timeline-role {
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--color-fg);
    margin-bottom: var(--space-3);
}

.timeline-role .org {
    color: var(--color-fg);
}

.timeline-role .title {
    color: var(--color-fg-muted);
    font-weight: 500;
}

.timeline-description {
    font-size: 0.9375rem;
    line-height: 1.75;
    color: var(--color-fg-muted);
    max-width: 620px;
}

.education-entry {
    padding-top: 0;
}
</style>
