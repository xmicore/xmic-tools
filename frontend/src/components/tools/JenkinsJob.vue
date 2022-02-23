<script setup>
import { ref } from 'vue';

defineProps({
  job: Object
})
</script>

<template>
    <div :class="job.color" class="job">
        {{job.name}}
    </div>
</template>

<style scoped>
    .job {
        padding: 1rem;
        border-radius: 5px;
        outline: 1px solid #000;
        background-color: whitesmoke;
    }
    .red {
        background-color: red;
        color: white;
    }
    .blue {
        background-color: var(--color-secondary);
    }
</style>