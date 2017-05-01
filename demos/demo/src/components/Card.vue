<template>
  <mdc-layout-grid>
    <mdc-layout-grid-cell>
      <section>
        <mdc-card class="demo-card">
          <mdc-card-media class="demo-card__16-9-media" />
          <mdc-card-supporting-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </mdc-card-supporting-text>
        </mdc-card>

        <mdc-card class="demo-card demo-card--with-avatar">
          <mdc-card-primary>
            <div class="demo-card__avatar"></div>
            <mdc-card-title>Title</mdc-card-title>
            <mdc-card-subtitle>Subhead</mdc-card-subtitle>
          </mdc-card-primary>
          <mdc-card-media class="demo-card__16-9-media" />
          <mdc-card-supporting-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </mdc-card-supporting-text>
          <mdc-card-actions>
            <mdc-card-action-button>Action 1</mdc-card-action-button>
            <mdc-card-action-button>Action 2</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card demo-card--with-avatar">
          <mdc-card-primary>
            <div class="demo-card__avatar"></div>
            <mdc-card-title>Title</mdc-card-title>
            <mdc-card-subtitle>Subhead</mdc-card-subtitle>
          </mdc-card-primary>
          <mdc-card-media class="demo-card__16-9-media" />
          <mdc-card-actions vertical>
            <mdc-card-action-button>Action 1</mdc-card-action-button>
            <mdc-card-action-button>Action 2</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card">
          <mdc-card-media class="demo-card__16-9-media" />
          <mdc-card-primary>
            <mdc-card-title large>Title goes here</mdc-card-title>
            <mdc-card-subtitle>Subtitle here...</mdc-card-subtitle>
          </mdc-card-primary>
          <mdc-card-actions>
            <mdc-card-action-button>Action 1</mdc-card-action-button>
            <mdc-card-action-button>Action 2</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card">
          <mdc-card-primary>
            <mdc-card-title large>Title goes here</mdc-card-title>
            <mdc-card-subtitle>Subtitle here...</mdc-card-subtitle>
          </mdc-card-primary>
          <mdc-card-supporting-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </mdc-card-supporting-text>
          <mdc-card-actions>
            <mdc-card-action-button>Action 1</mdc-card-action-button>
            <mdc-card-action-button>Action 2</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card demo-card--bg-demo" dark>
          <mdc-card-primary>
            <mdc-card-title large>Title goes here</mdc-card-title>
            <mdc-card-subtitle>Subtitle here</mdc-card-subtitle>
          </mdc-card-primary>
          <mdc-card-actions>
            <mdc-card-action-button dark>Action 1</mdc-card-action-button>
            <mdc-card-action-button dark>Action 2</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card demo-card--small">
          <mdc-card-media>
            <mdc-card-title large>Title</mdc-card-title>
          </mdc-card-media>
          <mdc-card-actions>
            <mdc-card-action-button>Action 1</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card">
          <mdc-card-horizontal-block>
            <mdc-card-primary>
              <mdc-card-title large>Title goes here</mdc-card-title>
              <mdc-card-subtitle>Subtitle here</mdc-card-subtitle>
            </mdc-card-primary>
            <mdc-card-media-item src="http://material-components-web.appspot.com/images/1-1.jpg" />
          </mdc-card-horizontal-block>
          <mdc-card-actions>
            <mdc-card-action-button>Action 1</mdc-card-action-button>
            <mdc-card-action-button>Action 2</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card">
          <mdc-card-horizontal-block>
            <mdc-card-primary>
              <mdc-card-title large>Title here</mdc-card-title>
              <mdc-card-subtitle>Subtitle here</mdc-card-subtitle>
            </mdc-card-primary>
            <mdc-card-media-item 1dot5x src="http://material-components-web.appspot.com/images/1-1.jpg" />
          </mdc-card-horizontal-block>
          <mdc-card-actions>
            <mdc-card-action-button>Action 1</mdc-card-action-button>
            <mdc-card-action-button>Action 2</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card">
          <mdc-card-horizontal-block>
            <mdc-card-primary>
              <mdc-card-title large>Title here</mdc-card-title>
              <mdc-card-subtitle>Subtitle here</mdc-card-subtitle>
            </mdc-card-primary>
            <mdc-card-media-item 2x src="http://material-components-web.appspot.com/images/1-1.jpg" />
          </mdc-card-horizontal-block>
          <mdc-card-actions>
            <mdc-card-action-button>Action 1</mdc-card-action-button>
            <mdc-card-action-button>Action 2</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>

        <mdc-card class="demo-card">
          <mdc-card-horizontal-block>
            <mdc-card-media-item 3x src="http://material-components-web.appspot.com/images/1-1.jpg" />
            <mdc-card-actions vertical>
              <mdc-card-action-button>A1</mdc-card-action-button>
              <mdc-card-action-button>A2</mdc-card-action-button>
            </mdc-card-actions>
          </mdc-card-horizontal-block>
        </mdc-card>
      </section>
    </mdc-layout-grid-cell>
  </mdc-layout-grid>
</template>

<script>
export default {
}
</script>

<style>
.demo-card {
  margin-bottom: 24px;
}

.demo-card--bg-demo {
  height: 21.875rem; /* 350sp */
  background-image: url(http://material-components-web.appspot.com/images/1-1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.demo-card--bg-demo .mdc-card__primary,
.demo-card--bg-demo .mdc-card__actions {
  background: rgba(0, 0, 0, .4);
}

.demo-card--small {
  max-width: 10.938rem; /* 175sp */
}

.demo-card--small .mdc-card__media {
  background-image: url(http://material-components-web.appspot.com/images/1-1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 10.938rem; /* 175sp, for 1:1 ratio with 175sp demo card width */
}

.demo-card__16-9-media {
  background-image: url(http://material-components-web.appspot.com/images/16-9.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 12.313rem;
}

.demo-card--with-avatar .demo-card__avatar {
  position: absolute;
  background: #bdbdbd;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
}

.demo-card--with-avatar .mdc-card__title, .demo-card--with-avatar .mdc-card__subtitle {
  margin-left: 56px;
}
</style>
