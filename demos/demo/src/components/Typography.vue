<template>
  <mdc-layout-grid>
    <mdc-layout-grid-cell span="12">
      <h2>Styles</h2>
      <section class="demo-typography--section mdc-typography">
        <mdc-text-display4>Display 4</mdc-text-display4>
        <mdc-text-display3>Display 3</mdc-text-display3>
        <mdc-text-display2>Display 2</mdc-text-display2>
        <mdc-text-display1>Display 1</mdc-text-display1>
        <mdc-text-headline>Headline</mdc-text-headline>
        <mdc-text-title>
          Title <mdc-text-caption>Caption.</mdc-text-caption>
        </mdc-text-title>
        <mdc-text-subheading2>Subheading 2</mdc-text-subheading2>
        <mdc-text-subheading1>Subheading 1</mdc-text-subheading1>
        <mdc-text-body1>Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</mdc-text-body1>
        <mdc-text-body2>Body 2 text, calling something out.</mdc-text-body2>
      </section>

      <h2>Styles with margin adjustments</h2>
      <section class="demo-typography--section mdc-typography">
        <mdc-text-display4 adjust-margin>Display 4</mdc-text-display4>
        <mdc-text-display3 adjust-margin>Display 3</mdc-text-display3>
        <mdc-text-display2 adjust-margin>Display 2</mdc-text-display2>
        <mdc-text-display1 adjust-margin>Display 1</mdc-text-display1>
        <mdc-text-headline adjust-margin>Headline</mdc-text-headline>
        <mdc-text-title>
          Title <mdc-text-caption adjust-margin>Caption.</mdc-text-caption>
        </mdc-text-title>
        <mdc-text-subheading2 adjust-margin>Subheading 2</mdc-text-subheading2>
        <mdc-text-subheading1 adjust-margin>Subheading 1</mdc-text-subheading1>
        <mdc-text-body1 adjust-margin>Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</mdc-text-body1>
        <mdc-text-body2 adjust-margin>Body 2 text, calling something out.</mdc-text-body2>
      </section>
    </mdc-layout-grid-cell>
  </mdc-layout-grid>
</template>

<script>
export default {
}
</script>

<style>
.demo-typography--section {
  padding: 16px;
  border: 1px solid #ddd;
}
</style>
