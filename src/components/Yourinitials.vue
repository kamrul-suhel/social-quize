<template>
    <div class="start d-flex align-items-center">
        <div class="w-100 text-center py-4 mx-auto">
            <section class="container">
                <div class="row">
                    <transition name="fade">
                        <section class="col-12 initial_heading">
                            <h2>What are your initials?</h2>
                        </section>
                    </transition>
                    
                    <transition name="fade">
                        <section class="col-12">
                            <div class="alert" v-if="required_field">Field is required</div>
                            <input type="text" class="initial_input"
                            v-model="initial_value"
                            maxlength="3"
                            @input="$v.initial_value.$touch()"
                            />
                        </section>
                    </transition>

                    <transition name="fade">
                        <div class="col-12" v-if="initial_value">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <p>Submit your details for your chance to win a prize</p>
                                </div>
                                <div class="col-12 text-center">
                                    <button class="quiz-button" v-on:click="enterPriceDraw()">Enter prize draw</button>
                                    <button class="quiz-button" v-on:click="leaderboard()">No thanks</button>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
    name: 'your_initial',
    data() {
      return {
          initial_value:'',
          required_field:false,
          last_id : '',
          invalid: false
      }
  },
  validations: {
      initial_value: {
          required
      },

  },
  methods: {
    enterPriceDraw(){
      this.$store.commit('setInitialName', this.initial_value);
      this.$router.push({
          name: 'your_detail'
      })
  },


  leaderboard(){
    if(this.initial_value == ''){
        this.required_field = true;
        return;
    }

    this.$store.commit('setInitialName', this.initial_value);

    var created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var initial_name = this.initial_value;
    this.last_id = this.$store.getters.getLastId;
    var answer = this.$store.getters.getIncorrectCorrect;

    var upload = {
        time: {
            minutes: this.$store.state.time.minutes,
            seconds: this.$store.state.time.seconds
        },
        correct_answers: answer.correct_answers,
        incorrect_answers: answer.incorrect_answers,
        milliseconds: this.$store.getters.getMilliseconds,
        userquestions: this.$store.getters.getUserQuestion,
        created_at: created_at,
        unique_id: this.last_id,
        initial_name: initial_name
    };

    this.$http.post('https://unilad-expo-quiz.firebaseio.com/results.json', upload)
    .then(function(data) {
        this.$router.push({
            name: 'leader_board',
            query:{id: this.last_id}
        })
    })
    .catch(function(data) {
        console.log("Error: ", data)
    });

},

sendtest(){
    this.$router.push({
        name:'leader_board',
        query:{id: 10},

    });
}
},

created(){

},
mounted(){

}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start{
    background: url('../assets/images/dots_sm.png') no-repeat bottom right;
}

.row{
    transition:all ease-in-out .3s;
}

h2{
    font-size:140px;
    font-family: giorgiosans-bolditalic;
}

.initial_input{
    text-transform: uppercase;
    font-size: 150px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-weight: bold;
    font-family: giorgiosans-bolditalic;
    text-align: center;
    font-style: italic;
    margin-bottom: 30px;
    width: 50%;
    transition: all ease-in-out .3s;
    letter-spacing: 39px;
}
.initial_heading{
    margin-bottom:50px;
    transition:all ease-in-out .3s;
}
.start {
    height: 100%;
}
.card{
    background:#000;
    color:#fff;
}
.quiz-button{
    display:inline-block;
    margin-right:20px;
    position:initial;
}
.alert{
    margin: 0px;
    padding: 0;
    color: #ff0000;
    font-size: 20px;
    font-style: italic;
}
.initial_value_hide{
    opacity:0;
}


</style>
