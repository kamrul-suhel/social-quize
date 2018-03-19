<template>
    <section class="parent_section">
        <section class="section_leaderboard">
            <div class="top_heading">
                <h2 class="large">Leaderboard</h2>
            </div>
        </section>

        <section class="leader_board_content">
            <div class="container">
                <div class="row" v-for="(score, index) in scores"
                     :class="{'text-info': selected_id == score.unique_id}"
                     :data-id="score.unique_id"
                     :id="'ref_'+score.unique_id"
                >
                    <div class="col-1">
                        <h4>{{ index+1 }}{{ index+1 | pluralize('st','nd','rd','th') }}</h4>
                    </div>

                    <div class="col-2">
                        <p class="initials">{{ score.initial_name }}</p>
                    </div>

                    <div class="col-7">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar"
                                 :class="{'bg-info': selected_id == score.unique_id}"
                                 :style="{width: score.correct_answers*10+'%'}"
                                 :aria-valuenow="score.correct_answers"
                                 :aria-valuemin="score.correct_answers"
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div class="col-1">
                        <h4>{{score.time.minutes}}:{{ score.time.seconds < 10 ? '0'+score.time.seconds : score.time.seconds }}</h4>
                        {{ score.time.offsetX}}
                    </div>

                    <div class="col-1">
                        <h4>{{score.correct_answers}}/10</h4>
                    </div>
                </div>
            </div>
        </section>

        <router-link :to="'/'">
            <button class="quiz-button inverted">Next</button>
        </router-link>
    </section>
</template>

<script>
    export default{
        name:'leader_board',
        data() {
            return {
                scores:[],
                selected_id:''
            }
        },
        methods:{

        },
        created(){
            if(this.$route.query.id){
                this.selected_id = this.$route.query.id;
            }

            this.$http.get('https://unilad-expo-quiz.firebaseio.com/results.json')
                .then(function(data) {
                    let arr = []
                    for (let x in data.body) {arr.push(data.body[x])}
//                    this.scores = arr.sort((a, b) => a.correct_answers < b.correct_answers || a.milliseconds < b.milliseconds ? 1 : -1)
                    var sorto = {
                        correct_answers:"desc",milliseconds:"asc"
                    };
                    this.scores = arr.keySort(sorto);
                })
                .catch(function(data) {
                    console.log('Error: ', data)
                })
        }
    }

    Array.prototype.keySort = function(keys) {

        keys = keys || {};

        var obLen = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key))
                    size++;
            }
            return size;
        };

        // avoiding using Object.keys because I guess did it have IE8 issues?
        // else var obIx = function(obj, ix){ return Object.keys(obj)[ix]; } or
        // whatever
        var obIx = function(obj, ix) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (size == ix)
                        return key;
                    size++;
                }
            }
            return false;
        };

        var keySort = function(a, b, d) {
            d = d !== null ? d : 1;
            // a = a.toLowerCase(); // this breaks numbers
            // b = b.toLowerCase();
            if (a == b)
                return 0;
            return a > b ? 1 * d : -1 * d;
        };

        var KL = obLen(keys);

        if (!KL)
            return this.sort(keySort);

        for ( var k in keys) {
            // asc unless desc or skip
            keys[k] =
                keys[k] == 'desc' || keys[k] == -1  ? -1
                    : (keys[k] == 'skip' || keys[k] === 0 ? 0
                    : 1);
        }

        this.sort(function(a, b) {
            var sorted = 0, ix = 0;

            while (sorted === 0 && ix < KL) {
                var k = obIx(keys, ix);
                if (k) {
                    var dir = keys[k];
                    sorted = keySort(a[k], b[k], dir);
                    ix++;
                }
            }
            return sorted;
        });
        return this;
    };
</script>
<style scoped>
    .section_leaderboard{
        position:fixed;
        top: 0;
        width:100%;
        z-index:1;
    }
    .initials{
        padding-top:5px;
        text-transform: uppercase;
    }
    .navigation{
        padding:40px 0px;
        background: #fff;
        position: absolute;
        bottom: 0;
    }
    .leader_board_content{
        background:#fff;
        padding:300px 0 150px 0;
        color:#000;
    }
    .progress{
        margin-top:8px;
        height:24px;
        background:#fff;
    }
    .progress-bar{
        background:#000;
        height:24px;
        border-radius:20px;
    }

    .leader_board_button{
        background:transparent;
        color:#000 !important;
    }

    .leader_board_content .container, .navigation .container{
        width:50%;
    }

</style>