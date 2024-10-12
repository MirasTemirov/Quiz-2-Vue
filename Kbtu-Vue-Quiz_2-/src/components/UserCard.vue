<!-- src/components/UserCard.vue -->
<template>
  <div class="user-card" @click="$emit('click')">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.user-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  color: #eee;
  background-color: brown;

  cursor: pointer;
}

.user-card:hover {
  opacity: 0.8;
}
</style>
