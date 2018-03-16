<template>
  <div class="start d-flex align-items-center">
  
    <div class="card w-100 text-center py-4 mx-auto">
      <section class="container">
        <div class="row">
          <div class="col-12 col-xs-12 col-sm-8 col-md-12 col-lg-7 table-style">
            <div class="table-cell-style">
              <div class="heading_leaderboard_page">
                <h2 class="heading_main">How well do you<br/>understand the<br/>social generation?</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-12 col-xs-12 col-sm-4 col-md-12 col-lg-4">
            <div class="leader_board text-left" id="leader_board">
              <div id="children">
                <h2 class="text-left sub_heading">Leaderboard</h2>
                  <table class="table">
                      <tbody>
                        <tr v-for="(score, index) in scores" v-if="index < 10">
                          <td><strong>{{index+1}}{{index+1 | pluralize('st','nd','rd','th')}}</strong></td>
                          <td style="font-family:'gotham-light'; font-weight:normal;font-style:normal;">{{score.initial_name || score.user.full_name}}</td>
                          <td><strong>{{score.time.minutes}}:{{score.time.seconds}}</strong></td>
                          <td><strong>{{score.correct_answers}}/10</strong></td>
                        </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-10">
          <div class="col-10">
            <p class="text-left">Test your knowledge of the world of social by answering 10 questions as quick as you can and see if you have what it takes to become a social media expert.</p>
          </div>
          <div class="col-2">
            <div class="col text-right">
              <button class="quiz-button" v-on:click="begainGame()">Start</button>
            </div>
          </div>
        </div>
      </section>
  
      </div>
    </div>
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
              $("#leader_board").mCustomScrollbar({
                  scrollButtons: {enable:true}
              });
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
                console.log("Successful Request");
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
                  let arr = []
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
  .start{
    background: url('../assets/images/dots_sm.png') no-repeat bottom right;
  }

  .heading_leaderboard_page{
    text-align:left;
    width:800px;
  }
  .heading_leaderboard_page:after{
    content: '';
    background: #fff;
    padding-top: 10px;
    width: 70%;
    border: none;
    display: block;
    margin-top:30px;
  }
  h2.heading_main{
    line-height:120px;
    font-size:140px;
  }
  h2.sub_heading{
    font-size:40px;
  }
  .table-style{
    display:table;
    height:450px;
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
  }
  .leader_board{
    padding:20px;
    background:#fff;
    color:#000;
    height:533px;
  }
  #children{
  }
  .quiz-button{
    margin-top: 0px;
    color: #000;
    border: none;
    border-radius: 30px;
    font-size: 40px;
    cursor: pointer;
    -webkit-transition: all ease-in-out .2s;
    transition: all ease-in-out .2s;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 1px;
    padding-left: 50px;
    padding-right: 50px;
    line-height: 45px;
    background: #fff;
    font-weight: bold;
    font-family:'giorgiosans-bold';
  }
  .quiz-button:hover{
    background:#cdcdcd;
    box-shadow:0px 0px 5px rgba(255,255,255,.5);
  }

  .mt-10{
    margin-top:50px;
  }

  table td{
    padding:0 10px;
    font-size:28px;
    font-style:italic;
    border:none;
    font-weight:bold;
  }

  @media (min-width: 576px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {
   .container{
     width:100%;
     max-width:80%
   }
    .leader_board{
      width:400px;
      float:right;
    }
  }


</style>
