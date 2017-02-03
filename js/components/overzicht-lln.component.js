Vue.component("slc-lln-overzicht", {
    template: `
        <div class="panel">
            <div class="panel-heading">
                Overzicht
            </div>
            <!-- Search veld
            <div class="panel-block">
              <p class="control has-icon">
                <input class="input is-small" type="text" placeholder="Search">
                <span class="icon is-small">
                  <i class="fa fa-search"></i>
                </span>
              </p>
            </div>
            -->
          <div class="panel-block" v-for="llna in llnaantal">
            <div class="column is-one-quarter">
                <p> {{llna.jaar}} - <strong>{{llna.aantal}} lln </strong></p>
              </div>
              <progress class="progress is-medium is-primary" :value="llna.aantal" max="1200"></progress>
          </div>
        </div>
      `,
    firebase: {
        llnaantal:db.ref('llnaantal')
    }
  });
