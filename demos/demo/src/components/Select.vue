<template>
  <mdc-layout-grid>
    <mdc-layout-grid-cell span="4">
      <mdc-text-title>Fully featured component</mdc-text-title>

      <mdc-select v-model="selectTest1">
        <mdc-select-option id="grains">Bread, Cereal, Rice, and Pasta</mdc-select-option>
        <mdc-select-option id="vegetables">Vegetables</mdc-select-option>
        <mdc-select-option id="fruit">Fruit</mdc-select-option>
        <mdc-select-option id="dairy">Milk, Yogurt, and Cheese</mdc-select-option>
        <mdc-select-option id="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</mdc-select-option>
        <mdc-select-option id="fats">Fats, Oils, and Sweets</mdc-select-option>
      </mdc-select>

      <p>selectTest1: {{selectTest1}}</p>

      <mdc-text-title>Multi-select (css only)</mdc-text-title>

      <mdc-multiselect size="5" v-model="selectMultiTest1">
        <mdc-multiselect-optgroup label="Fats, Oils, & Sweets">
          <mdc-multiselect-option>Olive Oil</mdc-multiselect-option>
          <mdc-multiselect-option value="brown-sugar">Brown Sugar</mdc-multiselect-option>
          <mdc-multiselect-option value="ice-cream">Ice Cream</mdc-multiselect-option>
        </mdc-multiselect-optgroup>

        <mdc-multiselect-divider />

        <mdc-multiselect-optgroup label="Dairy">
          <mdc-multiselect-option value="milk">Milk</mdc-multiselect-option>
          <mdc-multiselect-option value="cheese">Cheese</mdc-multiselect-option>
          <mdc-multiselect-option value="more-cheese">More Cheese</mdc-multiselect-option>
        </mdc-multiselect-optgroup>
      </mdc-multiselect>

      <p>selectMultiTest1: {{selectMultiTest1}}</p>

      <mdc-button @click="changeMultiSelect">Change multiselect value</mdc-button>
    </mdc-layout-grid-cell>
  </mdc-layout-grid>
</template>

<script>
export default {
  data () {
    return {
      selectTest1: 'fruit',
      selectMultiTest1: ['milk', 'Olive Oil']
    }
  },
  methods: {
    changeMultiSelect () {
      this.selectMultiTest1 = ['brown-sugar', 'ice-cream']
    }
  }
}
</script>
