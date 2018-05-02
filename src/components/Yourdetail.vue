<template>
    <section class="user">
        <section>
            <div class="top_heading">
                <h2 class="large">Your details</h2>
            </div>
        </section>

        <section class="your_detail">
            <div class="container">
                <form @submit="$v.$touch()">
                    <div class="row">
                        <div class="col-6 text-right">
                            <label for="first_name" :class="{'text-danger': $v.user.full_name.$error}">Full Name:*</label>
                        </div>
                        <div class="col-6">
                            <input type="text" id="first_name" v-model="user.full_name" @blur="$v.user.full_name.$touch()"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6 text-right">
                            <label for="company" :class="{'text-danger': $v.user.company.$error}">Company:*</label>
                        </div>
                        <div class="col-6">
                            <input type="text" id="company" v-model="user.company" @blur="$v.user.company.$touch()"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6 text-right">
                            <label for="email" :class="{'text-danger' : $v.user.email.$error}">Email:*</label>
                        </div>
                        <div class="col-6 text-left">
                            <input type="text" id="email" v-model="user.email" @blur="$v.user.email.$touch()"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6 text-right">
                            <input type="checkbox" id="term" v-model="user.term_conditions" @blur="$v.user.term_conditions.$touch()"/>
                        </div>
                        <div class="col-6">
                            <label class="term" for="term"><span :class="{'text-danger': $v.user.term_conditions.$error}">I agree to the <a href="" class="term_condition" @click.prevent="gototermsCondition()">Terms &amp; conditions</a></span></label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-right">
                            <input @click.prevent="submitForm" type="submit" value="Submit"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>


    </section>
</template>
<script>
    import { required, minLength, email } from 'vuelidate/lib/validators'
    export default {
        name: 'your_initial',
        data() {
            return{
                user:{
                    'unique_id':'',
                    'full_name': '',
                    'company': '',
                    'email': '',
                    'term_conditions': ''
                },
                last_id:0,
            }
        },
        validations: {
            user: {
                full_name: {
                    required,
                },
                company: {
                    required
                },
                email: {
                    required,
                    email
                },
                term_conditions:{
                    required
                }
            }
        },
        methods:{
            submitForm() {
                this.$v.user.$touch();
                if(!this.$v.user.$invalid){

                    var created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
                    var initial_name = this.$store.getters.getInitialName;
                    var answer = this.$store.getters.getIncorrectCorrect;
                    this.last_id = this.$store.getters.getLastId;

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
                            // Unique id back from firebase
                            var unique_id = data.body.name;

                            var user_data = {
                                full_name: this.user.full_name,
                                email: this.user.email,
                                company: this.user.company,
                                unique_id : unique_id
                            };

                            this.$http.post('https://unilad-expo-quiz.firebaseio.com/users.json', user_data)
                                .then(function(){
                                    this.$router.push({
                                        name: 'leader_board',
                                        query:{id: this.last_id }
                                    });
                                });

                        })
                        .catch(function(data) {
                            console.log("Error: ", data)
                        });
                }

            },

            gototermsCondition(){
                this.$store.commit('setUser', this.user);
                this.$router.push({
                    name: 'term_condition'
                });
            }
        },
        created(){
//            this.user = this.$store.getters.getUser;
        }

    }
</script>
<style scoped>
    .your_detail{
        background:#fff;
        color:#000;
        padding:50px 0;
    }
    .your_detail .row {
        margin-top:20px;
    }
    .your_detail .row label {
        font-family:'giorgiosans-bolditalic';
        font-size: 60px;
    }
    .your_detail .row input{
        font-family:'giorgiosans-bolditalic';
        font-size: 60px;
        border:none;
        border-bottom:1px solid #000;
        width:100%;
        transition:all ease-in-out .2s;
    }
    .your_detail .row label.term{
        font-size: 40px;
    }
    .your_detail .row label a{
        color: #000;
    }
    .your_detail .row label .text-danger a{
        color: #606060;
    }
    .your_detail .row input[type='checkbox']{
        width:auto;
        margin-right:10px;
        transform: scale(2.5);
    }
    .your_detail .row input[type='submit']{
        font-family:'giorgiosans-bolditalic';
        font-size:50px;
        padding:10px 15px;
        background:#000;
        color:#fff;
        width:150px;
        margin:0 auto;
        cursor: pointer;
        border:none;
    }
    .your_detail .row input[type='submit']:hover{
        background:#000;
    }

    input:-webkit-autofill {
        background:transparent;
    }


    /* Media query for ipad */
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation: landscape) {

        h2.large{
            font-size:100px;
        }

        .your_detail .row label{
            font-size:24px;
        }

        .your_detail .row input{
            font-size:24px;
        }

        .your_detail .row input[type='checkbox']{
            transform: scale(1.5);
        }

        .your_detail .row label.term{
            font-size:24px;
        }

        .your_detail .row input[type='submit']{
            font-size: 24px;
            width: 100px;
        }
    }
</style>