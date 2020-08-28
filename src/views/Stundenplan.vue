<template>
  <div>
    <h2>Stundenplan</h2>
    <md-table>
      <md-table-row>
        <md-table-head style="width: 3%">Stunde</md-table-head>
        <md-table-head style="width: 10%">Uhrzeit</md-table-head>
        <md-table-head>Montag</md-table-head>
        <md-table-head>Dienstag</md-table-head>
        <md-table-head>Mittwoch</md-table-head>
        <md-table-head>Donnerstag</md-table-head>
        <md-table-head>Freitag</md-table-head>
      </md-table-row>
      <md-table-row v-for="(item, index) in zeiten" :key="index">
        <md-table-cell> {{index + 1}} </md-table-cell>
        <md-table-cell> {{item}} </md-table-cell>
        <md-table-cell v-for="(item) in faecher" :key="item"> {{item[index]}} </md-table-cell>
      </md-table-row>
    </md-table>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    zeiten: 
    [
      '7:45 - 8:30',
      '8:30 - 9:15',
      '9:15 - 10:00',
      '10:00 - 10:45',
      '11:00 - 11:45',
      '11:45 - 12:30',
      '12:30 - 13:15',
      '13:15 - 14:00',
      '14:00 - 14:45',
      '14:45 - 15:30',
      '15:30 - 16:15',
      '16:15 - 17:00'
    ],
    faecher: [
      ['VT', 'VT', 'VT', 'VT', 'PlOrg', 'PlOrg', 'PlOrg', 'Fach 8', 'Fach 9', 'Fach 10', 'Fach 11', 'Fach 12'],
      ['DIFach 1', 'Fach 2', 'Fach 3', 'Fach 4', 'Fach 5', 'Fach 6', 'Fach 7', 'Fach 8', 'Fach 9', 'Fach 10', 'Fach 11', 'Fach 12'],
      ['Fach 1', 'Fach 2', 'Fach 3', 'Fach 4', 'Fach 5', 'Fach 6', 'Fach 7', 'Fach 8', 'Fach 9', 'Fach 10', 'Fach 11', 'Fach 12'],
      ['Fach 1', 'Fach 2', 'Fach 3', 'Fach 4', 'Fach 5', 'Fach 6', 'Fach 7', 'Fach 8', 'Fach 9', 'Fach 10', 'Fach 11', 'Fach 12'],
      ['Fach 1', 'Fach 2', 'Fach 3', 'Fach 4', 'Fach 5', 'Fach 6', 'Fach 7', 'Fach 8', 'Fach 9', 'Fach 10', 'Fach 11', 'Fach 12'],
      ]

  })
};
</script>

<style>
</style>