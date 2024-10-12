<!-- src/views/UserDetails.vue -->
<template>
  <div class="details">
    <h1>Details of {{ user.name }}</h1>
    <p>ID: {{ user.id }}</p>

    <p>Email: {{ user.email }}</p>
    <UserCard :user="user">
      <label>
        Name:
        <input v-model="changedname" />
      </label>
      <button @click="editUser">Edit</button>
    </UserCard>
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
      user: {
        id: null,
        name: "",
        email: "",
      },
      changedname: "",
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const userId = this.$route.params.id;
      // Fetch user data (mocked for simplicity)
      // Here you could fetch from an API like JSONPlaceholder
      if (userId == 1) {
        this.user = { id: 1, name: "John Doe", email: "john@example.com" };
      } else if (userId == 2) {
        this.user = { id: 2, name: "Jane Doe", email: "jane@example.com" };
      } else if (userId == 3) {
        this.user = { id: 3, name: "Alice Smith", email: "alice@example.com" };
      } else if (userId == 4) {
        this.user = { id: 3, name: "Alice Smith", email: "alice@example.com" };
      } else if (userId == 5) {
        this.user = { id: 3, name: "Alice Smith", email: "alice@example.com" };
      }
    },
    editUser() {
      this.user.name = this.changedname;
      this.changedname = "";
      console.log("User updated:", this.user);
    },
  },
  beforeDestroy() {
    console.log("Navigating away from UserDetails");
  },
};
</script>

<style scoped>
.details {
  width: fit-content;
}
</style>
