<script setup>
defineProps({
  text: String,
  index: Number,
});
defineEmits(["remove"]);
</script>

<template>
  <div class="item">
    {{ text }}
    <button class="clear-btn" @click.prevent="$emit('remove', index)">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
</template>

<style scoped>
.item {
  outline: 1px solid gray;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: var(--font-family-secondary);
  background-color: white;
}
.clear-btn {
  border: none;
  background-color: transparent;
  color: grey;
  font-weight: bold;
}
.clear-btn::after {
  color: grey;
}
.clear-btn:hover {
  transform: scale(1.2);
  border: none;
}
</style>
