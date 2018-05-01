<template>
    <div id="section-start">
        <div class="start d-flex align-items-center">
            <div class="card w-100 py-4 mx-auto">
                <section class="container">
                    <div class="row">
                        <div class="col-8 table-style">
                            <div class="table-cell-style">
                                <div class="heading_leaderboard_page">
                                    <h1 class="heading_main">How well do you<br/>know the social<br/>generation?</h1>
                                </div>

                                <!--div class="prizes">
                                    <h4>1st Prize&nbsp;&nbsp;&nbsp;&nbsp;Three Course Sunday Lunch for Two at the Michelin-Starred Ritz Restaurant</h4>
                                    <h4>2nd Prize&nbsp;&nbsp;&nbsp;&nbsp;Champagne Cinema Evening for Two at the 5* Luxury Courthouse Hotel</h4>
                                    <h4>3rd Prize&nbsp;&nbsp;&nbsp;&nbsp;2018 UNILAD Meme Calendar</h4>
                                </div-->
                            </div>
                        </div>
                        
                        <div class="col-4">
                            <div class="leader_board text-left" id="leader_board">
                                <div id="children">
                                    <h2 class="text-left sub_heading">Leaderboard</h2>

                                    <table class="table">
                                        <tbody>
                                            <tr v-for="(score, index) in scores" v-if="index < 10">
                                                <td><strong style="font-family:'giorgiosans-bolditalic'">{{index+1}}{{index+1 | pluralize('st','nd','rd','th')}}</strong></td>
                                                <td style="font-family:'gotham-book'; font-weight:normal; font-style:normal; text-transform:uppercase;">{{score.initial_name}}</td>
                                                <td><strong style="font-family:'giorgiosans-bolditalic'">{{score.time.minutes}}:{{score.time.seconds < 10 ? '0'+score.time.seconds : score.time.seconds}}</strong></td>
                                                <td><strong style="font-family:'giorgiosans-bolditalic'">{{score.correct_answers}}/10</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="pos-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-10">
                                <p class="text-left">Test your knowledge of the world of social by answering 10 questions as quick as you can to see if you have what it takes to become a social media expert.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <button class="quiz-button" v-on:click="begainGame()">Start</button>
    </div>
</template>

<script>
    import VueTimers from 'vue-timers/mixin'
  export default {
      mixins: [VueTimers],
      name: 'your_initial',
    data() {
      return {
          scores:[]
      }
    },
      beforeRouteEnter(to, from, next) {
        next( vm =>{
            
        })
      },
    methods: {
      getQuestions() {
        var router = this.$router;
        this.$store.dispatch('getQuestions')
          .then(function(data) {
            router.push({
              name: 'games'
            })
          })
          .catch(function(data) {
            console.log("Rejected Request")
          })
      },

        begainGame(){
            var router = this.$router;
            this.$store.dispatch('getQuestions')
              .then(function(data) {
                router.push({
                  name: 'game'
                })
              })
              .catch(function(data) {
                console.log("Rejected Request")
              })
        }
    },

      created(){
          this.$store.state.questions = [];

          this.$store.commit('setInitializeUserQuestion');
          this.$http.get('https://unilad-expo-quiz.firebaseio.com/results.json')
              .then(function(data) {
                  let arr = [];
                  for (let x in data.body) {arr.push(data.body[x])}
                  var sorto = {
                      correct_answers:"desc",milliseconds:"asc"
                  };
                  this.scores = arr.keySort(sorto);
                  this.$store.commit('setLastId', this.scores.length);

              })
              .catch(function(data) {
                  console.log('Error: ', data)
              })

      },
      mounted(){

      },
      destroyed(){
      }
  }


    Array.prototype.keySort = function(keys) {

        keys = keys || {};

// via
// https://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#section-start{
    background:black;
    height:100%;
}
.start{
    background: url('../assets/images/dots_sm.png') no-repeat bottom right;
}
.prizes{
    padding-top:50px;
}
.heading_leaderboard_page{
    text-align:left;
    width:900px;
}
.heading_leaderboard_page:after{
    content: '';
    background: #fff;
    padding-top: 10px;
    width: 60%;
    border: none;
    display: block;
    margin-top:30px;
}
.table-style{
    display:table;
    height:675px;
}
.table-cell-style{
    display:table-cell;
    vertical-align: middle;
}
.start {
    height: 100%;
}
.card{
    background:transparent;
    color:#fff;
    margin-bottom:100px;
}
.mt-10{
    margin-top:50px;
}
.pos-bottom{
    position: fixed;
    bottom: 40px;
    width: 100%;
}
table td{
    padding:0 10px;
    font-size:36px;
    font-style:italic;
    border:none;
    font-weight:bold;
}
.container{
   width:100%;
   max-width:88%
}
.leader_board{
    padding:30px 35px;
    background:#fff;
    color:#000;
    height:675px;
    width:550px;
    float:right;
}


</style>
