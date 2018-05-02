<template>
    <div class="game_main_container">
        <div class="game_type_image_text" v-if="answers.type === 'image_text'">
            <div class="row answer">
                <div class="col-8">
                    <div class="row" v-for="(option, index) in options"
                     v-bind:class="{selected: option == selected, disabled : option != selected && selected}">
                        <div class="answer_content image_text" v-on:click='pickOption(option)'
                             v-bind:class="{selected: option == selected, disabled : option != selected && selected}"
                        >
                            <div class="answer_result" v-if="selected && option.answer === 1 && option === selected">
                                <img src="../assets/tick-icon.png"/>
                            </div>

                            <div class="answer_result" v-if="selected && option.answer != 1 && option === selected">
                                <img src="../assets/x-icon.png"/>
                            </div>

                            <span class="index">{{letters[index]}}.</span>

                            <p class="answer_title">{{ option.text }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="row">
                        <div class="right_img" v-if="answers.image">
                            <img :src="answers.image" class="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="game_type_text" v-if="answers.type === 'text'">
            <div class="row answer">
                <div class="col-6" v-for="(option, index) in options"
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

                        <span class="index">{{letters[index]}}.</span>

                        <p class="answer_title">{{ option.text }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="game_type_image" v-if="answers.type === 'image'">
            <div class="row answer">
                <div class="col-3" v-for="option in options"
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

                        <div class="text-center">
                            <p class="answer_title">{{option.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="quiz-button" v-if='!gameActive' v-on:click='nextQuestion()'>Next</button>
    </div>
</template>

<script>
    export default{
        props:['answers'],

        data () {
            return{
                    index: '',
                    option: [],
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
                    this.options = this.answers.incorrect_answers;
                    this.correct = this.answers.correct_answer.answer;
                    this.gameActive = true;
                    this.selected = '';
                },

                pickOption: function(a){
                    this.selected = a;
                    this.gameActive = false;

                    if(this.correct == this.selected.answer) {
                        this.status = true;
                    } else {
                        this.status = false;
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
    .game_main_container{
        margin-top:30px;
    }
    .answer_content{
        cursor:pointer;
        position:relative;
        width:95%;
        padding: 30px 15px 0px 30px;
        border: 1px solid transparent;
        transition:all ease-in-out .3s;
    }
    .answer_content.selected{
        border:1px solid #fff;
    }
    .game_type_image_text{
        width:80%;
        margin:0 auto;
    }
    .game_type_image{
        width:80%;
        margin:0 auto;
    }
    .game_type_text .answer_title, .game_type_image_text .answer_title{
        margin-left:75px;
    }
    .game_type_text{
        width:94%;
        margin: 60px auto 0;
    }
    .deactive{
        opacity:.3;
    }
    .answer_result{
        position: absolute;
        width: 50px;
        height: 50px;
        top: -55px;
        right: -7px;
    }
    .answer_content.text_layout{
        margin-bottom:40px;
    }
    .answer_content.text_layout .answer_result, .answer_content.image_text .answer_result{
        top:-60px;
        right:-25px;
    }
    .answer_content.image_layout{
        padding:0;
    }
    .answer_content.image_layout .answer_result{
        top: -60px;
        right: -15px;
    }
    .answer_result img{
        width:100%;
        height:auto;
        position:absolute;
    }
    .game_type_image .img_box{
        width:100%;
        display:block;
        margin:0 auto;
        border:3px solid transparent;
    }
    .game_type_image .img_box.selected {
        border:3px solid #fff;
    }
    .game_type_image .heading h2{
        font-size:4rem;
    }
        
    .index{
        float: left;
        font-size: 100px;
        font-family: 'giorgiosans-bolditalic';
        margin-right: 20px;
        line-height: 35px;
    }

    .answer_title{
        margin-top:24px;
        font-size: 30px;
        font-family: 'gotham-book';
    }
    .leader_board{
        width:400px;
        float:right;
    }
    .right_img img{
        width:90%;
        float:right;
    }



    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: landscape) {
        .answer_content{

        }

        .index {
            font-size:50px;
        }

        #app p{
            font-size: 24px;
            margin-top: 10px;
            margin-left: 20px;
            line-height: 32px;
        }

        .answer_content.image_text .answer_result{
            top: -20px;
            width: 30px;
            height: 30px;
            right: -15px;
        }

        .answer_content.text_layout .answer_result{
            top: -20px;
            width: 30px;
            height: 30px;
            right: -15px;
        }

        .answer_content.image_layout .answer_result{
            top: -20px;
            width: 30px;
            height: 30px;
            right: -15px;
        }

        .quiz-button{
            font-size: 40px;
            padding: 0px 50px;
            right: 50px;
            line-height: 50px;
        }
    }
</style> 