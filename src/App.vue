<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="overlap">
        <md-app-toolbar class="md-primary md-large">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <md-button class="md-icon-button" @click="menuVisible = !menuVisible">Menü</md-button>
              <span class="md-title">VT Ausbildungs Companion</span>
            </div>
            <div class="md-toolbar-section-end">
              <md-button @click="decKW()">-</md-button>
              <span>KW {{KW}}</span>
              <md-button @click="incKW()">+</md-button>
            </div>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

          <md-list>
            <md-list-item>
              <md-button @click.native="menuVisible = false" to="/">Ausbildungsnachweise</md-button>
            </md-list-item>

            <md-list-item>
              <md-button @click.native="menuVisible = false" to="/dienstplan">Dienstplan</md-button>
            </md-list-item>

            <md-list-item>
              <md-button @click.native="menuVisible = false" to="/versetzungsplan">Versetzungsplan</md-button>
            </md-list-item>

            <md-list-item>
              <md-button @click.native="menuVisible = false" to="/stundenplan">Stundenplan</md-button>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          <router-view v-bind:KW="KW" />
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
import LoremIpsum from "./components/LoremIpsum";
import Add from "./components/Add";
export default {
  name: "Overlap",
  components: {
    LoremIpsum,
    Add,
  },
  data: () => ({
    menuVisible: false,
    KW: 35,
  }),
  methods: {
    makeInvisible() {
      this.menuVisible = false;
    },
    incKW() {
      if (this.KW == 53) {
        this.KW = 1;
      } else {
        this.KW++;
      }
    },
    decKW() {
      if (this.KW == 1) {
        this.KW = 53;
      } else {
        this.KW--;
      }
    },
  },
};
</script>