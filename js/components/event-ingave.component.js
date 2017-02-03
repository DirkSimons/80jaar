Vue.component("event-ingave", {
    template: `

        <div class="panel">
            <div class="panel-heading">
                Geef een nieuw item op
            </div>
            <div class="panel-block">
                <div class="control">

                    <p class="control">
                        <label class="label">Onderwerp</label>
                        <input type="text" class="input" v-model="tlevent.onderwerp">
                    </p>
                    <p class="control">
                        <label class="label">Omschrijving</label>
                        <textarea class="textarea" v-model="tlevent.omschrijving"></textarea>
                    </p>
                    <p class="control">
                        <label class="label">Datum</label>
                        <input type="date" class="input" v-model="tlevent.datum">
                    </p>
                    <hr>
                    <p class="control">
                        <label class="radio">
                        <input type="radio" name="question" value="afbeelding" v-model="mediaKeuze">
                        Afbeelding
                        </label>
                        <label class="radio">
                        <input type="radio" name="question" value="video" v-model="mediaKeuze">
                        Video
                        </label>
                    </p>
                    <p class="control" v-if="mediaKeuze === 'afbeelding'">
                        <label class="label">Afbeelding uploaden</label>
                        <input type="file" @change="fotoUpload">
                        <br>
                        <br>
                        <progress class="progress is-primary" :value="fub" max="100" id="fotoUploadBar">{{fub}}%</progress>
                    </p>
                    <p class="control" v-if="mediaKeuze === 'video'">
                        <label class="label">Video URL  <small>(Youtube of Vimeo)</small></label>
                        <input type="text" class="input" placeholder="https://" v-model="tlevent.videoURL">
                    </p>
                    <hr>
                    <button class="button is-primary" @click="pushIt(e)" :disabled="isUploading">Indienen</button>
                    <br><br>
                </div>
            </div>
        </div>

    `,
    data() {
        return {
            "mediaKeuze": "afbeelding",
            "tlevent": {omschrijving:"", onderwerp:"",datum:""},
            "fub": 0,
            "e": "",
            "isUploading": false
        }
    },
    firebase: {
        timelineEvents: db.ref('timelineEvents')
    },
    methods: {
        pushIt: function() {
            // var d = new Date(this.tlevent.datum);
            // var dd = d.getMilliseconds();
            // this.tlevent.datum = dd;
            console.log(this.mediaKeuze);
            if (this.mediaKeuze != "afbeelding") {
                this.tlevent.afbeelding = "img/youtube.png"
            }
            this.$firebaseRefs.timelineEvents.push(this.tlevent)
            console.log(this.tlevent)
            toastr.success('Jouw gebeurtenis is opgeslagen in de databees!')
            this.tlevent = {};
        },
        fotoUpload: function(e) {
            var vm = this
            var storageRef = firebase.storage().ref('afbeeldingen/' + e.target.files[0].name);
            var uploadTask = storageRef.put(e.target.files[0]);
            uploadTask.on('state_changed',
                function progress(snapshot) {
                    vm.isUploading = true;
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    vm.fub = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + vm.fub + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                },
                function error(error) {
                    console.log(error);
                    vm.isUploading = false;
                    // Handle unsuccessful uploads
                    console.log(error);
                },
                function complete() {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    downloadURL = uploadTask.snapshot.downloadURL;
                    console.log("this is the link! --> " + downloadURL);
                    vm.tlevent.afbeelding = downloadURL
                    toastr.success("De afbeelding werd opgeslageniter! Vergeet niet op indienen te klikken, AUB.")
                    vm.isUploading = false;
                });
        }
    },
    mounted(){
        Event.$on("edittlEvent", function(params){

            console.log("BEFORE this.tlevent  = " + JSON.stringify(this.tlevent));
            console.log("BEFORE params = "+ JSON.stringify(params.event));
            

            console.log("AFTER this.tlevent  = " + JSON.stringify(this.tlevent));
          })
    }

});
