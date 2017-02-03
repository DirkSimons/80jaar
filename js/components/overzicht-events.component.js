window.Event = new Vue();

Vue.component("slc-event-overzicht", {
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
            <div class="panel-block" v-for="tlevent in sortedtimelineEvents">

            <a class="button is-default" @click="deleteEvent(tlevent)">
              <span class="icon">
                <i class="fa fa-trash"></i>
              </span>
            </a>
            &nbsp;
            <a class="button is-default" @click="edit(tlevent['.key'])">
              <span class="icon">
                <i class="fa fa-pencil"></i>
              </span>
            </a>
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img :src="tlevent.afbeelding">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{tlevent.onderwerp}}</strong> <small>{{tlevent.datum}}</small>
                    <br>
                    {{tlevent.omschrijving}}
                  </p>
                </div>
              </div>
            </article>
          </div>
      `,
    data() {
        return {
            "mediaKeuze": "afbeelding",
            "tlevent": {}
          }
    },
    firebase: {
        timelineEvents: db.ref('timelineEvents')
    },
    methods:{
      deleteEvent: function (item){
        this.$firebaseRefs.timelineEvents.child(item['.key']).remove();
      },
      edit:function(item){
        console.log("send tlEvent = "+item);
        Event.$emit("edittlEvent", {id:item, edit:true})
      }
    },
    computed:{
      sortedtimelineEvents(){
        return _.orderBy(this.timelineEvents,["datum"])
      }
    }

});
