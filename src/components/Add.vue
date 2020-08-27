<template>
  <div>
    <div v-for="(item, index) in Fixtures" :key="item.message">
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-autocomplete v-model="item.name" :md-options="fixturetypes">
            <label>Fixture</label>
          </md-autocomplete>
        </div>
        <div class="md-layout-item md-size-20">
          <md-field>
            <label>Anzahl</label>
            <md-input v-model="item.anzahl" type="number"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-10">
          <md-button @click="remove(index)">Delete</md-button>
        </div>
      </div>
    </div>
    <md-button @click="add">Hinzufügen</md-button>
  </div>
</template>

<script>
export default {
  name: "Add",
  components: {},
  data: () => ({
    Fixtures: [{ name: "", anzahl: 0 }],
    fixturetypes: [
      "JB Lighting P18",
      "JB Lighting A12",
      "JB Lighting A7",
      "Clay Paky Alpha Spot 800",
      "Clay Paky Alpha Profile 800",
      "SGM P5",
    ],
  }),
  methods: {
    add() {
      this.Fixtures.push({ name: "", anzahl: 0 });
    },
    remove(index) {
      this.Fixtures.splice(index, 1);
    },
  },
};
</script>
