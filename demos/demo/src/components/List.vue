<template>
  <div>
    <section>
      <h2>Single-Line List</h2>
      <section>
        <h3>Text only</h3>
        <mdc-list>
          <mdc-list-item>Single-line item</mdc-list-item>
          <mdc-list-item>Single-line item</mdc-list-item>
          <mdc-list-item>Single-line item</mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Text only (dense)</h3>
        <mdc-list dense>
          <mdc-list-item>Single-line item</mdc-list-item>
          <mdc-list-item>Single-line item</mdc-list-item>
          <mdc-list-item>Single-line item</mdc-list-item>
        </mdc-list>
      </section>

      <section class="mdc-theme--dark">
        <h3>Text Only (dark)</h3>
        <mdc-list>
          <mdc-list-item>Single-line item</mdc-list-item>
          <mdc-list-item>Single-line item</mdc-list-item>
          <mdc-list-item>Single-line item</mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Start Detail</h3>
        <aside><em>Note: The grey background is styled using demo placeholder styles</em></aside>
        <mdc-list>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Start Detail (dense)</h3>
        <mdc-list dense>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Start Detail Example - Icon with Text</h3>
        <mdc-list id="icon-with-text-demo">
          <mdc-list-item>
            <mdc-list-item-start-detail class="material-icons" tag="i" aria-hidden="true">network_wifi</mdc-list-item-start-detail>
            Wi-Fi
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail class="material-icons" tag="i" aria-hidden="true">bluetooth</mdc-list-item-start-detail>
            Bluetooth
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail class="material-icons" tag="i" aria-hidden="true">data_usage</mdc-list-item-start-detail>
            Data Usage
          </mdc-list-item>
        </mdc-list>
      </section>

      <section class="mdc-theme--dark">
        <h3>Start Detail Example - Icon with Text (Dark)</h3>
        <mdc-list id="icon-with-text-demo">
          <mdc-list-item>
            <mdc-list-item-start-detail class="material-icons" tag="i" aria-hidden="true">network_wifi</mdc-list-item-start-detail>
            Wi-Fi
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail class="material-icons" tag="i" aria-hidden="true">bluetooth</mdc-list-item-start-detail>
            Bluetooth
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail class="material-icons" tag="i" aria-hidden="true">data_usage</mdc-list-item-start-detail>
            Data Usage
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Avatar List</h3>
        <mdc-list avatars>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Avatar List (dense)</h3>
        <mdc-list avatars dense>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Example - Avatar with Text</h3>
        <mdc-list avatars>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal1.svg" />
            Panda
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal2.svg" />
            Sloth
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal3.svg" />
            Bear
          </mdc-list-item>
        </mdc-list>
      </section>

      <section class="mdc-theme--dark">
        <h3>Example - Avatar with Text (Dark)</h3>
        <mdc-list avatars>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal1.svg" />
            Panda
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal2.svg" />
            Sloth
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal3.svg" />
            Bear
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>End Detail</h3>
        <mdc-list>
          <mdc-list-item>
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>End Detail (Dense)</h3>
        <mdc-list dense>
          <mdc-list-item>
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Avatar + End Detail</h3>
        <mdc-list avatars>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Avatar + End Detail</h3>
        <mdc-list avatars dense>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            Single-line item
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Example - Avatar with Text and icon</h3>
        <mdc-list avatars id="avatar-text-icon-demo-list">
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal1.svg" />
            Panda
            <mdc-list-item-end-detail tag="a" class="material-icons">favorite</mdc-list-item-end-detail>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal2.svg" />
            Sloth
            <mdc-list-item-end-detail tag="a" class="material-icons">favorite_border</mdc-list-item-end-detail>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal3.svg" />
            Bear
            <mdc-list-item-end-detail tag="a" class="material-icons">favorite_border</mdc-list-item-end-detail>
          </mdc-list-item>
        </mdc-list>
      </section>

      <section class="mdc-theme--dark">
        <h3>Example - Avatar with Text and icon</h3>
        <mdc-list avatars id="avatar-text-icon-demo-list">
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal1.svg" />
            Panda
            <mdc-list-item-end-detail tag="a" class="material-icons">favorite</mdc-list-item-end-detail>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal2.svg" />
            Sloth
            <mdc-list-item-end-detail tag="a" class="material-icons">favorite_border</mdc-list-item-end-detail>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="img" width="56" height="56" src="http://material-components-web.appspot.com/images/animal3.svg" />
            Bear
            <mdc-list-item-end-detail tag="a" class="material-icons">favorite_border</mdc-list-item-end-detail>
          </mdc-list-item>
        </mdc-list>
      </section>
    </section>

    <section>
      <h2>Two-line List</h2>
      <section>
        <h3>Text-Only</h3>
        <mdc-list two-line>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Text-Only (Dense)</h3>
        <mdc-list two-line dense>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Start Detail</h3>
        <mdc-list two-line>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Start Detail (Dense)</h3>
        <mdc-list two-line dense>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Avatar List</h3>
        <mdc-list two-line avatars>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Avatar List (dense)</h3>
        <mdc-list two-line avatars dense>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg" />
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>End Detail</h3>
        <mdc-list two-line>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>End Detail (Dense)</h3>
        <mdc-list two-line dense>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-text-group>
              Two-line item
              <mdc-list-item-secondary-text>Secondary text</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="span" class="grey-bg" />
          </mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Example - Two-line avatar + text + icon</h3>
        <mdc-list two-line avatars class="two-line-avatar-text-icon-demo">
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
              <i class="material-icons" aria-hidden="true">folder</i>
            </mdc-list-item-start-detail>
            <mdc-list-item-text-group>
              Photos
              <mdc-list-item-secondary-text>Jan 9, 2014</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
              <i class="material-icons" aria-hidden="true">folder</i>
            </mdc-list-item-start-detail>
            <mdc-list-item-text-group>
              Recipes
              <mdc-list-item-secondary-text>Jan 17, 2014</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
              <i class="material-icons" aria-hidden="true">folder</i>
            </mdc-list-item-start-detail>
            <mdc-list-item-text-group>
              Work
              <mdc-list-item-secondary-text>Jan 28, 2014</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
          </mdc-list-item>
        </mdc-list>
      </section>

      <section class="mdc-theme--dark">
        <h3>Example - Two-line avatar + text + icon (Dark)</h3>
        <mdc-list two-line avatars class="two-line-avatar-text-icon-demo">
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
              <i class="material-icons" aria-hidden="true">folder</i>
            </mdc-list-item-start-detail>
            <mdc-list-item-text-group>
              Photos
              <mdc-list-item-secondary-text>Jan 9, 2014</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
              <i class="material-icons" aria-hidden="true">folder</i>
            </mdc-list-item-start-detail>
            <mdc-list-item-text-group>
              Recipes
              <mdc-list-item-secondary-text>Jan 17, 2014</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
              <i class="material-icons" aria-hidden="true">folder</i>
            </mdc-list-item-start-detail>
            <mdc-list-item-text-group>
              Work
              <mdc-list-item-secondary-text>Jan 28, 2014</mdc-list-item-secondary-text>
            </mdc-list-item-text-group>
            <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
          </mdc-list-item>
        </mdc-list>
      </section>
    </section>

    <section>
      <h2>List Dividers</h2>

      <section>
        <h3>Full-Width Dividers</h3>
        <mdc-list>
          <mdc-list-item>Single-line item - section 1</mdc-list-item>
          <mdc-list-item>Single-line item - section 1</mdc-list-item>
          <mdc-list-item>Single-line item - section 1</mdc-list-item>
          <mdc-list-item-divider />
          <mdc-list-item>Single-line item - section 2</mdc-list-item>
          <mdc-list-item>Single-line item - section 2</mdc-list-item>
        </mdc-list>
      </section>

      <section>
        <h3>Inset Dividers</h3>
        <mdc-list avatars>
          <mdc-list-item>
            <mdc-list-item-start-detail class="grey-bg" />
            Single-line item - section 1
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail class="grey-bg" />
            Single-line item - section 1
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail class="grey-bg" />
            Single-line item - section 1
          </mdc-list-item>
          <mdc-list-item-divider inset />
          <mdc-list-item>
            <mdc-list-item-start-detail class="grey-bg" />
            Single-line item - section 2
          </mdc-list-item>
          <mdc-list-item>
            <mdc-list-item-start-detail class="grey-bg" />
            Single-line item - section 2
          </mdc-list-item>
        </mdc-list>
      </section>
    </section>

    <section>
      <h2>List Groups</h2>
      <section>
        <h3>Basic Usage</h3>
        <mdc-list-group>
          <mdc-list-group-subheader>List 1</mdc-list-group-subheader>
          <mdc-list>
            <mdc-list-item>Single-line item</mdc-list-item>
            <mdc-list-item>Single-line item</mdc-list-item>
            <mdc-list-item>Single-line item</mdc-list-item>
          </mdc-list>
          <mdc-list-divider />
          <mdc-list-group-subheader>List 2</mdc-list-group-subheader>
          <mdc-list>
            <mdc-list-item>Single-line item</mdc-list-item>
            <mdc-list-item>Single-line item</mdc-list-item>
            <mdc-list-item>Single-line item</mdc-list-item>
          </mdc-list>
        </mdc-list-group>
      </section>

      <section>
        <h3>Example - Two-line Lists, Avatars, end detail, inset dividers</h3>
        <mdc-list-group>
          <mdc-list-group-subheader>Folders</mdc-list-group-subheader>
          <mdc-list two-line avatars class="two-line-avatar-text-icon-demo">
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Photos
                <mdc-list-item-secondary-text>Jan 9, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Recipes
                <mdc-list-item-secondary-text>Jan 17, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Work
                <mdc-list-item-secondary-text>Jan 28, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
          </mdc-list>
          <mdc-list-divider inset />
          <mdc-list-group-subheader>Files</mdc-list-group-subheader>
          <mdc-list two-line avatars class="two-line-avatar-text-icon-demo">
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">insert_drive_file</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Vacation Itinerary
                <mdc-list-item-secondary-text>Jan 10, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">insert_drive_file</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Kitchen Remodel
                <mdc-list-item-secondary-text>Jan 20, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
          </mdc-list>
        </mdc-list-group>
      </section>

      <section class="mdc-theme--dark">
        <h3>Example - Two-line Lists, Avatars, end detail, inset dividers (Dark)</h3>
        <mdc-list-group>
          <mdc-list-group-subheader>Folders</mdc-list-group-subheader>
          <mdc-list two-line avatars class="two-line-avatar-text-icon-demo">
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Photos
                <mdc-list-item-secondary-text>Jan 9, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Recipes
                <mdc-list-item-secondary-text>Jan 17, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">folder</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Work
                <mdc-list-item-secondary-text>Jan 28, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
          </mdc-list>
          <mdc-list-divider inset />
          <mdc-list-group-subheader>Files</mdc-list-group-subheader>
          <mdc-list two-line avatars class="two-line-avatar-text-icon-demo">
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">insert_drive_file</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Vacation Itinerary
                <mdc-list-item-secondary-text>Jan 10, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
            <mdc-list-item>
              <mdc-list-item-start-detail tag="span" class="grey-bg folder" role="presentation">
                <i class="material-icons" aria-hidden="true">insert_drive_file</i>
              </mdc-list-item-start-detail>
              <mdc-list-item-text-group>
                Kitchen Remodel
                <mdc-list-item-secondary-text>Jan 20, 2014</mdc-list-item-secondary-text>
              </mdc-list-item-text-group>
              <mdc-list-item-end-detail tag="a" href="#" class="material-icons info">info</mdc-list-item-end-detail>
            </mdc-list-item>
          </mdc-list>
        </mdc-list-group>
      </section>
    </section>

    <section>
      <h2>Non ul/li lists</h2>
      <section>
        <h3>nav list</h3>
        <mdc-list tag="nav">
          <mdc-list-item tag="a" href="#">Single-line item</mdc-list-item>
          <mdc-list-item tag="a" href="#">Single-line item</mdc-list-item>
          <mdc-list-item tag="a" href="#">Single-line item</mdc-list-item>
        </mdc-list>
      </section>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.grey-bg {
  background: rgba(0, 0, 0, .26);
}

#icon-with-text-demo .material-icons {
  color: rgba(0, 0, 0, .54);
}

.mdc-theme--dark #icon-with-text-demo .material-icons {
  color: rgba(255, 255, 255, .7);
}

#avatar-text-icon-demo-list .material-icons {
    text-decoration: none;
    color: #ff4081;
}

.two-line-avatar-text-icon-demo .folder {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.two-line-avatar-text-icon-demo .info {
  color: rgba(0, 0, 0, .26);
  text-decoration: none;
}

.mdc-theme--dark .two-line-avatar-text-icon-demo .folder {
  background-color: rgba(255, 255, 255, .7);
  color: #303030;
}

.mdc-theme--dark .two-line-avatar-text-icon-demo .info {
  color: rgba(255, 255, 255, .7);
}
</style>
