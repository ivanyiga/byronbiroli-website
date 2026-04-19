<template>
  <section :aria-labelledby="id">
    <h2 v-if="title" class="section-heading" :id="id">{{ title }}</h2>
    <slot />
  </section>
</template>

<script setup>
defineProps({
  title: String,
  id: String
})
</script>
