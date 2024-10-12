<!-- src/App.vue -->
<template>
  <div id="app" class="container">
    <main class="main"><router-view /></main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Global styles can go here */
.container {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
