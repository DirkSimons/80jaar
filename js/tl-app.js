// 1. Define route components.
// These can be imported from other files
const llnIngave = {
        template: ` <div class="columns">
                      <div class="column is-half">
                        <br>
                          <lln-aantal-ingave></lln-aantal-ingave>
                        <br>
                      </div>
                      <div class="column is-half">
                        <br>
                        <slc-lln-overzicht></slc-lln-overzicht>
                        <br>
                      </div>
                    </div>` }
const eventIngave = {
  template:`<div class="columns">
                <div class="column is-half">
                  <br>
                    <event-ingave></event-ingave>
                  <br>
                </div>
                <div class="column is-half">
                  <br>
                  <slc-event-overzicht></slc-event-overzicht>
                  <br>
                </div>
              </div>`
}
const lkrIngave = {
        template: ` <div class="columns">
                      <div class="column is-half">
                        <br>
                          <lkr-aantal-ingave></lkr-aantal-ingave>
                        <br>
                      </div>
                      <div class="column is-half">
                        <br>
                        <slc-lkr-overzicht></slc-lkr-overzicht>
                        <br>
                      </div>
                    </div>` }


const routes = [{
                path: '/lln-ingave',
                component: llnIngave
            },
            {
                path: '/event-ingave',
                component: eventIngave
            },
            {
                path: '/lkr-ingave',
                component: lkrIngave
            },
            {
                path: '/',
                component: eventIngave
            }

        ]


const router = new VueRouter({routes})
const app = new Vue({
      router
}).$mount('#slcapp')


        // new Vue({
        //     el: "#slc-app"
        // })
