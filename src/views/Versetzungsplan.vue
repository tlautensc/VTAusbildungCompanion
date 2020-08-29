<template>
  <div>
      <h2>Versetzungsplan</h2>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-list>
            <md-list-item v-for="(item) in 26" :key="item">
              KW {{ item }} {{ Versetzung[item-1] }}
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout-item">
          <md-content>
            <h1>
              Abteilung<br><br>
              {{Versetzung[KW-1]}}
            </h1>
          </md-content>
        </div>
        <div class="md-layout-item">
          <md-list>
            <md-list-item v-for="(item) in 26" :key="item">
              KW {{ item+27 }} {{ Versetzung[item+26] }}
            </md-list-item>
          </md-list>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    Versetzung: [
      'kw 1',
      'kw 2',
      'kw 3',
      'kw 4',
      'kw 5',
      'kw 6',
      'kw 7',
      'kw 8',
      'kw 9',
      'kw 10',
      'kw 11',
      'kw 12',
      'kw 13',
      'kw 14',
      'kw 15',
      'kw 16',
      'kw 17',
      'kw 18',
      'kw 19',
      'kw 20',
      'kw 21',
      'kw 22',
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

<style>
</style>