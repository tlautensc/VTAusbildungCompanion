<template>
  <div>
    <h2>Ausbildungsnachweise</h2>
    <md-table>
      <md-table-row>
        <md-table-head style="width: 90%">Tätigkeit</md-table-head>
        <md-table-head>Dauer</md-table-head>
      </md-table-row>
      <md-table-row v-for="(item, index) in jobs" :key="item">
        <md-table-cell>{{item.job}}</md-table-cell>
        <md-table-cell>{{item.dauer}}</md-table-cell>
        <md-table-cell>
          <md-button @click="remove(index)">Delete</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-button @click="add">Add</md-button>
  </div>
</template>

<script>
export default {
  name: "Ausbildungsnachweise",
  data: () => ({
    jobs: [],
  }),
  methods: {
    add() {
      this.jobs.push({ job: "testjob", dauer: 2 });
    },
    remove(index) {
      this.jobs.splice(index, 1);
    },
  },
};
</script>

<style>
</style>