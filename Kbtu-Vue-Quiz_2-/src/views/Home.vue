// src/views/Home.vue
<template>
  <div>
    <h1>User List</h1>
    <div class="grid-content">
      <div v-for="user in users" :key="user.id">
        <UserCard :user="user" @click="handleUserClick(user.id)" />
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" },
        { id: 3, name: "Aruzhan K", email: "aruzhan@example.com" },
        { id: 4, name: "Sabyrjan ", email: "sabyr@example.com" },
        { id: 5, name: "Sultan", email: "sula@example.com" },
      ],
    };
  },
  methods: {
    handleUserClick(userId) {
      this.$router.push(`/user/${userId}`);
    },
  },
};
</script>

<style scoped>
.grid-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
h1 {
  text-align: center;
  color: crimson;
}
</style>
