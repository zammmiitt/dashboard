<script setup>
  import ChartComponent from '@/components/ChartComponent.vue'
</script>


<template>
  <div class="aboutContainer">
    <div class="chartContainer">
      <h1>My Chart</h1>
      <ChartComponent />
    </div>
  </div>
</template>

<style>
  .aboutContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* .chartContainer {

  } */
</style>
