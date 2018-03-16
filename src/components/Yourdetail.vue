<template>
    <section class="user">
        <section style="background:#000">
            <div class="container top_heading">
                <div class="row top_heading_content">
                    <div class="col text-center">
                        <h2>Your details</h2>
                    </div>
                </div>
            </div>
        </section>

        <section class="your_detail">
            <div class="container">
                <form @submit="$v.$touch()">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 text-sm-left text-md-right text-lg-right text-xl-right">
                            <label for="first_name" :class="{'text-danger': $v.user.full_name.$error}">Full name:*</label>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 text-left">
                            <input type="text" id="first_name" v-model="user.full_name" @blur="$v.user.full_name.$touch()"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 text-sm-left text-md-right text-lg-right text-xl-right">
                            <label for="company" :class="{'text-danger': $v.user.company.$error}">Company:*</label>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 text-left">
                            <input type="text" id="company" v-model="user.company" @blur="$v.user.company.$touch()"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 text-sm-left text-md-right text-lg-right text-xl-right">
                            <label for="email" :class="{'text-danger' : $v.user.email.$error}">Email:*</label>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 text-left">
                            <input type="text" id="email" v-model="user.email" @blur="$v.user.email.$touch()"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6 text-right"></div>
                        <div class="col-6 text-left">
                            <input type="checkbox" id="term" v-model="user.term_conditions" @blur="$v.user.term_conditions.$touch()"/>
                            <label for="term"><span :class="{'text-danger': $v.user.term_conditions.$error}">I agreed to this terms & conditions</span></label>
                            <a href="" class="term_condition" @click.prevent="gototermsCondition()">Terms & condition</a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-center">
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

                        user:{
                            full_name: this.user.full_name,
                            email: this.user.email,
                            company: this.user.company
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
                                query:{id: this.last_id }
                            })
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
            this.user = this.$store.getters.getUser;
        }

    }
</script>
<style scoped>
    .top_heading{
        background:#000;
    }
    .your_detail{
        background:#fff;
        padding-top:50px;
        color:#000;
        padding-bottom:50px;
    }
    .your_detail .row {
        margin-top:20px;
    }
    .your_detail .row label {
        font-family:'giorgiosans-bold';
        font-weight:bold;
        font-style:italic;
    }
    .your_detail .row input{
        border:none;
        border-bottom:1px solid #000;
        width:100%;
        -webkit-transition:all ease-in-out .2s;
        -moz-transition:all ease-in-out .2s;
        -ms-transition:all ease-in-out .2s;
        -o-transition:all ease-in-out .2s;
        transition:all ease-in-out .2s;
    }
    .your_detail .row input[type='checkbox']{
        width:auto;
        height:17px;
        margin-right:10px;
    }
    .your_detail .row input[type='submit']{
        font-family:'giorgiosans-bold';
        font-wize:20px;
        padding:10px 15px;
        background:#000;
        color:#fff;
        width:150px;
        margin:0 auto;
        cursor: pointer;
        border:none;
    }
    .your_detail .row input[type='submit']:hover{
        background:#777;
    }
    a.term_condition{
        display:inline-block;
        color:#000;
        font-size:14px;
        margin-left:10px;
    }

    input:-webkit-autofill {
        background:transparent;
    }

    @media (min-width: 576px) {
        .your_detail .row input{
            width:100%;
        }
    }

    @media (min-width: 768px) {
        .your_detail .row input{
            width:50%;
        }
    }

    @media (min-width: 992px) {
        .your_detail .row input{
            width:50%;
        }
    }

    @media (min-width: 1200px) {
        .your_detail .row input{
            width:50%;
        }
    }

</style>