<template>
  <div>
    <div class="demo-grid-legend">Grid of 1 column wide items</div>
    <mdc-layout-grid class="demo-grid">
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="1">1</mdc-layout-grid-cell>
    </mdc-layout-grid>

    <div class="demo-grid-legend">Grid of 4 column wide items</div>
    <mdc-layout-grid class="demo-grid">
      <mdc-layout-grid-cell class="demo-cell" span="4">4</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="4">4</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="4">4</mdc-layout-grid-cell>
    </mdc-layout-grid>

    <div class="demo-grid-legend">Grid of differently sized items</div>
    <mdc-layout-grid class="demo-grid">
      <mdc-layout-grid-cell class="demo-cell" span="6">6</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="4">4</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="2">2</mdc-layout-grid-cell>
    </mdc-layout-grid>

    <div class="demo-grid-legend">Grid of items with tweaks at different screen sizes</div>
    <mdc-layout-grid class="demo-grid">
      <mdc-layout-grid-cell class="demo-cell" span="6" tablet-span="8">6 (8 tablet)</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="4" tablet-span="6">4 (6 tablet)</mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell" span="2" phone-span="4">2 (4 phone)</mdc-layout-grid-cell>
    </mdc-layout-grid>

    <div class="demo-grid-legend">Grid with max width and center alignment</div>
    <mdc-layout-grid class="demo-grid demo-max-width">
      <mdc-layout-grid-cell class="demo-cell"></mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell"></mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell"></mdc-layout-grid-cell>
    </mdc-layout-grid>

    <div class="demo-grid-legend">Grid with max width and left alignment</div>
    <mdc-layout-grid class="demo-grid demo-max-width demo-left-align">
      <mdc-layout-grid-cell class="demo-cell"></mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell"></mdc-layout-grid-cell>
      <mdc-layout-grid-cell class="demo-cell"></mdc-layout-grid-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.demo-grid-legend {
  margin: 16px 0 8px 0;
}

.demo-grid {
  background-color: #DDDDDD;
  margin-bottom: 32px;
}

.demo-cell {
  box-sizing: border-box;
  background-color: #666666;
  height: 200px;
  padding: 8px;
  color: white;
  font-size: 1.5em;
}

.demo-max-width {
  width: 800px;
}

.demo-left-align {
  margin-left: 0;
  margin-right: auto;
}
</style>
