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
        background-color: rgb(194, 85, 85);
    }
    .blue {
        background-color: rgb(90, 170, 90);
    }
</style>