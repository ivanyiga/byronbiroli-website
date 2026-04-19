<template>
  <article class="work-item">
    <div class="video-frame">
      <iframe 
        :src="videoUrl" 
        :title="title" 
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <h3 class="work-title">{{ title }}</h3>
    <p class="work-description">
      <slot />
    </p>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  videoUrl: String
})
</script>

<style scoped>
.work-item {
    margin-bottom: var(--space-8);
}

.work-item:last-child {
    margin-bottom: 0;
}

.video-frame {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
    background: var(--color-bg-elevated);
    border: 1px solid var(--color-border);
    margin-bottom: var(--space-5);
}

.video-frame iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.work-title {
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--color-fg);
    margin-bottom: var(--space-3);
}

.work-description {
    font-size: 0.9375rem;
    line-height: 1.7;
    color: var(--color-fg-muted);
    max-width: 620px;
}
</style>
