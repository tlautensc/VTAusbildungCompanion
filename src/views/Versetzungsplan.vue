<template>
  <div>
      <h2>Versetzungsplan</h2>
      <div class="md-layout md-gutter md-alignment-top-space-between">
        <div class="md-layout-item md-size-25">
          <md-list>
            <md-list-item v-for="(item) in 14" :key="item">
              <md-content v-bind:class="{ AKW: item==KW }">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item">
                    KW {{ item }} 
                  </div>
                  <div class="md-layout-item">
                    {{ Versetzung[item-1] }}
                  </div>
                </div>
              </md-content>
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout-item md-size-25">
          <md-list>
            <md-list-item v-for="(item) in 14" :key="item">
              <md-content v-bind:class="{ AKW: item+14==KW }">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item">
                    KW {{ item+14 }} 
                  </div>
                  <div class="md-layout-item">
                    {{ Versetzung[item+13] }}
                  </div>
                </div>
              </md-content>
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout-item md-size-25">
          <md-list>
            <md-list-item v-for="(item) in 14" :key="item">
              <md-content v-bind:class="{ AKW: item+28==KW }">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item">
                    KW {{ item+28 }} 
                  </div>
                  <div class="md-layout-item">
                    {{ Versetzung[item+27] }}
                  </div>
                </div>
              </md-content>
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout-item md-size-25">
          <md-list>
            <md-list-item v-for="(item) in 11" :key="item">
              <md-content v-bind:class="{ AKW: item+42==KW }">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item">
                    KW {{ item+42 }} 
                  </div>
                  <div class="md-layout-item">
                    {{ Versetzung[item+41] }}
                  </div>
                </div>
              </md-content>
            </md-list-item>
          </md-list>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    test: true,
    Versetzung: [
      'BEL',
      'BEL',
      'BEL',
      'TT-MT',
      'TT-MT',
      'TT-MT',
      'BT',
      'BT',
      'BT',
      'BS',
      'BS',
      'BEL',
      'BEL',
      'BEL',
      'TT-MT',
      'TT-MT',
      'TT-MT',
      'BT',
      'BT',
      'BT',
      'BS',
      'BS',
      'kw 23',
      'kw 24',
      'kw 25',
      'kw 26',
      'kw 27',
      'kw 28',
      'kw 29',
      'kw 30',
      'kw 31',
      'kw 32',
      'kw 33',
      'kw 34',
      'kw 35',
      'kw 36',
      'kw 37',
      'kw 38',
      'kw 39',
      'kw 40',
      'kw 41',
      'kw 42',
      'kw 43',
      'kw 44',
      'kw 45',
      'kw 46',
      'kw 47',
      'kw 48',
      'kw 49',
      'kw 50',
      'kw 51',
      'kw 52',
      'kw 53',
      ],
  }),
  props: {KW: Number}
};

</script>

<style lang="scss" scoped>
.AKW {
  color: red;
}
</style>