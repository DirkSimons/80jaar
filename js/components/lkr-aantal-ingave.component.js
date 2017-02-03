Vue.component("lkr-aantal-ingave", {
    template: `

        <div class="panel">
            <div class="panel-heading">
                Geef een nieuw item op
            </div>
            <div class="panel-block">
                <div class="control">

                    <p class="control">
                        <label class="label">Jaartal</label>
                        <input type="text" class="input" v-model="obj.jaar">
                    </p>
                    <p class="control">
                        <label class="label">Aantal Leerkrachten</label>
                        <input type="text" class="input" v-model="obj.aantal">
                    </p>

                    <hr>
                    <button class="button is-primary" @click="pushIt()" >Indienen</button>
                    <br><br>
                </div>
            </div>
        </div>

    `,
    data() {
        return {
            "obj": {}
        }
    },
    firebase: {
        lkraantal: db.ref('lkraantal')
    },
    methods: {
        pushIt: function() {
            this.$firebaseRefs.lkraantal.push(this.obj)
            console.log(this.obj)
            toastr.success('Jouw lkr-aantal is opgeslagen in de databees!')
        }
    }

});
