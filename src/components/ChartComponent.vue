<template>
    <Pie :data="data"/>
</template>
  
<script lang="ts">
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
    import { Pie } from 'vue-chartjs'
  
    ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: {
      Pie
    },
    data() {
      return {
        labels: ['Red', 'Blue', 'Yellow'],
        data: {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            datasets: [{ data: [40, 20, 12] }],
        },
        options: {
            maxHeight: '100px',
            maxWidth: '100px',
        },
      }
    }
  }
</script>