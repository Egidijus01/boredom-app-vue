<template>
  <div class="container">
    <h1>Random Activity:</h1>
    <p class="activity">{{ activity ? activity.activity : 'Loading...' }}</p>

    <label class="partLabel" for="participantsSelect">Select Number of Participants:</label>
    <select id="participantsSelect" v-model="selectedNumber">
      <option class="option" value="" disabled>Select Number</option>
      <option class="option"  v-for="number in numbers" :key="number" :value="number">
        {{ number }}
      </option>
    </select>
    <button @click="fetchNewActivity">Fetch New Activity</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4],
      selectedNumber: null,
    };
  },
  computed: {
    activity() {
      return this.$store.state.activities.activity;
    },
  },
  methods: {
    async fetchNewActivity() {
      // Include the selectedNumber in the dispatch if needed
      if (this.selectedNumber) {
        await this.$store.dispatch('activities/fetchActivityParticipants', this.selectedNumber);
      } else {
        await this.$store.dispatch('activities/fetchActivity');
      }
    },
  },
  mounted() {
    this.fetchNewActivity();
  },
};
</script>

<style scoped>
  .container {
    font-family: Arial, Helvetica, sans-serif;
    height: 400px;
    width: 700px;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
  }
  .activity {
    background-color: bisque;
    width: 300px;
    padding: 10px 50px;
    border-radius: 15px;
    text-align: center;
    font-weight: 500;
  }
  .partLabel {
    padding-top: 20px;
    padding-bottom: 5px;
  }
  .participantsSelect{
    position: relative;
    outline: none;
    padding: 5px;
  }
</style>