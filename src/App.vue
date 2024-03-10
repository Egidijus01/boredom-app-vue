<template>
  <div>
    <h1>Random Activity:</h1>
    <p>{{ activity ? activity.activity : 'Loading...' }}</p>
    <button @click="fetchNewActivity">Fetch New Activity</button>
  </div>
</template>

<script>
export default {
  computed: {
    activity() {
      return this.$store.state.activities.activity;
    },
  },
  methods: {
    async fetchNewActivity() {
      await this.$store.dispatch('activities/fetchActivity');
    },
  },
  mounted() {
    this.fetchNewActivity();
  },
};
</script>
