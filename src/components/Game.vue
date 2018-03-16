<template>
    <section class="game_view_table">
        <section class="game_view">
            <timer-component v-on:total_time="time_toplay($event)" v-bind:total="total_question"></timer-component>
            <question v-bind:question='question'></question>
            <answers v-bind:answers='object' v-on:nextQuestion='getQuestion($event)'></answers>
        </section>
    </section>
</template>

<script>
    import Question from './Question.vue'
    import Answers from './Answers.vue'
    import Timer from './Timer.vue'
    import VueTimers from 'vue-timers/mixin'

    export default{
        mixins: [VueTimers],
        name:'game',
        components:{
        question: Question,
        answers: Answers,
        'timer-component': Timer,
      },
      data: function(){
  			return {
                questions: this.$store.state.questions,
                total_question: 0,
                question: '',
                object: {},
                result: {
                    corrects: 0,
                    incorrects: 0
                },
                gameActive: true,
                millisecond: 0,
                startTime: Date.now()
            }
        },
        methods:{
            getQuestion: function(answer){
                if(answer){
                    this.result.corrects++;
                    this.object.useranswer = 1;
                    this.$store.commit('setUserQuestion', this.object);
                }
                else if(answer == false){
                    this.result.incorrects++;
                    this.object.useranswer = 0;
                    this.$store.commit('setUserQuestion', this.object);
                }
                else if(answer == null){}
                if(this.questions[0]){
                    this.total_question++;
                    this.gameActive = true;
                    this.object = this.questions.shift();
                    this.question = this.object.question;
                }
                else{
                    this.$store.commit('setMilliseconds', this.millisecond);
                    this.$store.commit('setResults', this.result);
                    this.$router.push({name: 'your_initial'})
                }
            },

            totalTimeMillisecond(){
                this.millisecond = Date.now() - this.startTime;
            },

            time_toplay(time){
                this.$store.commit('setTotalTimetoplay',time);
            }
        },
        created(){
            this.getQuestion();
            this.totalTimeMillisecond();
            this.$options.interval = setInterval(this.totalTimeMillisecond, 10);

            console.log(this.object);
        },
        destroyed() {
        }
    }
</script>

<style scoped>
    .heading{
        -webkit-animation: fade-in .3s forwards;
    }
    .game_view_table{
        height:100%;
        width:100%;
        display:table;
    }
    .game_view{
        display:table-cell;
        vertical-align:middle;
    }

.game{
	min-height: 100vh;
}

    @keyframes fade-in {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        .container{
            width:80%;
            max-width:80%
        }
        .leader_board{
            width:400px;
            float:right;
        }
    }
</style>