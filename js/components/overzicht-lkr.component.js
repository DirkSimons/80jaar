Vue.component("slc-lkr-overzicht", {
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

          <div class="panel-block" v-for="lkra in lkraantal">
            <div class="column is-one-quarter">
                <p> {{lkra.jaar}} - <strong>{{lkra.aantal}}lkr </strong></p>
              </div>
              <progress class="progress is-medium is-primary" :value="lkra.aantal" max="150"></progress>
          </div>
        </div>
      `,
    data() {
        return {
            "mediaKeuze": "afbeelding",
            "tlevent": {}
          }
    },
    firebase: {
        lkraantal:db.ref('lkraantal')
    }
});
