<template>
    <div class="game_main_container">

        <div class="container game_type_image_text" v-if="answers.type === 'image_text'">
            <div class="row answer">
                <div class="col-12 col-xs-6 col-sm-6 col-md-7 col-lg-7">
                    <div class="row">

                        <div class="col-12" v-for="(option, index) in options">
                            <div class="answer_content image_text" v-on:click='pickOption(option)'
                                 v-bind:class="{selected: option == selected, disabled : option != selected && selected}"
                            >
                                <div class="answer_result" v-if="selected && option.answer === 1 && option === selected">
                                    <img src="../assets/tick-icon.png"/>
                                </div>
                                <div class="answer_result" v-if="selected && option.answer != 1 && option === selected">
                                    <img src="../assets/x-icon.png"/>
                                </div>
                                <div class="answer_tite">
                                    <strong>{{letters[index]}}.</strong><span>{{ option.text }}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-12 col-xs-6 col-sm-6 col-md-5 col-lg-5">
                    <div class="row">
                        <div class="col text-right">
                            <div class="right_img" v-if="answers.image">
                                <img :src="answers.image" class="img-fluid"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div><!-- End Answer container -->
        </div><!-- End game type container -->

        <div class="container game_type_text" v-if="answers.type === 'text'">
            <div class="row answer">
                <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6" v-for="(option, index) in options"
                     v-bind:class="{selected: option == selected, disabled : option != selected && selected}"
                >
                    <div class="answer_content text_layout"
                         v-bind:class="{selected: option == selected, disabled : option != selected && selected}"
                         v-on:click='pickOption(option)'>
                        <div class="answer_result" v-if="selected && option.answer === 1 && option === selected">
                            <img src="../assets/tick-icon.png"/>
                        </div>
                        <div class="answer_result" v-if="selected && option.answer != 1 && option === selected">
                            <img src="../assets/x-icon.png"/>
                        </div>
                        <div class="answer_tite">
                            <strong>{{letters[index]}}.</strong><span>{{ option.text }}</span>
                        </div>
                    </div>
                </div>
            </div><!-- End Answer container -->
        </div><!-- End game type container -->
        <!--END GAME TYPE TEXT-->

        <div class="container game_type_image" v-if="answers.type === 'image'">
            <div class="row answer">
                <div class="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3" v-for="option in options"
                     v-bind:class="{selected: option == selected, disabled : option != selected && selected}"
                >
                    <div class="answer_content image_layout" v-on:click='pickOption(option)'

                    >
                        <div class="answer_result"  v-if="selected && option.answer === 1 && option === selected">
                            <img src="../assets/tick-icon.png"/>
                        </div>
                        <div class="answer_result" v-if="selected && option.answer != 1 && option === selected">
                            <img src="../assets/x-icon.png"/>
                        </div>
                        <div class="img_box" v-bind:class="{selected: option == selected,
                         disabled : option != selected && selected}">
                            <img :src="option.image" class="img-fluid"/>
                        </div>
                        <div class="answer_tite text-center">
                        <p>{{option.text}}</p>
                        </div>
                    </div>
                </div>
            </div><!-- End Answer container -->
        </div><!-- End game type container -->

        <div class="container submit_button">
            <div class="row text-right">
                <div class="col">
                    <button class="quiz-button" style="opacity:0" v-if='gameActive' v-on:click='nextQuestion()'>Next</button>
                    <button class="quiz-button" v-if='!gameActive' v-on:click='nextQuestion()'>Next</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
   export default{
       props:['answers'],
       data () {
        return{
                options: [],
                correct: '',
                gameActive: true,
                selected: '',
                status: false,
                letters:['A','B','C','D']
            }
        },
        methods: {
           assign: function(){
               this.options = this.answers.incorrect_answers,
               this.correct = this.answers.correct_answer.answer,
               this.gameActive = true,
               this.selected = ''
        },
        pickOption: function(a){
            this.selected = a;
            this.gameActive = false;
            if(this.correct == this.selected.answer) {
                this.status = true;
            }
            else {
                this.status=false;
            }
        },
        nextQuestion: function(){
            this.$emit('nextQuestion', this.status);
         },
        },
        created(){
          this.assign();
        },
        watch: {
         '$props':{
            handler: function (val, oldVal) {
            this.assign()
            },
            deep: true
            }
        },
   }
</script>
<style scoped>
    .answer_content{
        cursor:pointer;
        position:relative;
        width:100%;
        padding:15px;
        border: 1px solid transparent;
        -webkit-transition:all ease-in-out .3s;
        -moz-transition:all ease-in-out .3s;
        -o-transition:all ease-in-out .3s;
        -ms-transition:all ease-in-out .3s;
        transition:all ease-in-out .3s;
    }
    .answer_content:hover{
    }
    .answer_content.selected{
        border:1px solid #fff;
    }
    .answer{
        margin-top:50px;
    }
    .game_type_image{
        margin-top:40px;
    }
    .deactive{
        opacity:.3;
    }

    .answer_question_correct {

    }
    .answer_question_incorrect {

    }

    .answer_content.image_text {

    }
    .answer_content.image_text .answer_result{
        top:-50px;
        right:-15px;
    }

    .answer_content.text_layout .answer_result{
        top:-50px;
        right:-20px;
    }
    .answer_result{
        position: absolute;
        width: 35px;
        height: 35px;
        top: -35px;
        right: -7px;
    }
    .answer_result img{
        width:100%;
        height:auto;
        position:absolute;
    }
    .answer_result{
    }

    .game_type_image .img_box{
        width:100%;
        display:block;
        margin:0 auto;
        border:3px solid transparent;
    }
    .answer_content.image_layout{
        padding:0;
    }
    .answer_content.image_layout .answer_result{
        top: -45px;
        right: -15px;
    }

    .game_type_image .img_box.selected {
        border:3px solid #fff;
    }

    .game_type_image .heading h2{
        font-size:4rem;
    }

    .quiz-button{
        padding-left: 50px;
        padding-right: 50px;
        background: #fff;
        font-size: 45px;
        font-weight: bold;
    }

    /* Game type text Section style */
    .game_type_text{

    }

    .answer_tite strong{
        font-size:80px;
        font-family:'giorgiosans-regular';
        font-style:italic;
        font-weight:bold;
        display:inline-block;
        margin-right:20px;
        line-height:35px;
    }
    .answer_tite{
        text-align:left;
    }
    .answer_tite p{
        line-height:40px;
        margin-top:15px;
        font-family: 'gotham-light';
    }
    .answer_tite span{
        font-size:30px;
        font-family: 'gotham-light';
        font-weight:bold;
    }
    .submit_button{
        margin-top:25px;
    }
    .submit_button button{

    }

    .right_img{
    }
    .right_img img{
        width:100%;
    }

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        .container.game_type_image{
            width:80%;
            max-width:80%
        }
        .leader_board{
            width:400px;
            float:right;
        }
    }
</style> 