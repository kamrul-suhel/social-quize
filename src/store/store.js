import Vue from 'vue'
import Vuex from 'vuex'

import data from '../data/data.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        unique_id: null,
        results: { correct_answers: 0, incorrect_answers: 0 },
        user:{
            full_name: '',
            company: '',
            email:''
        },
        time:{
            minutes:0,
            seconds:0,
        },
        millisecond:0,
        initial_name: '',
        questions: [],
        userQuestions: []
    },
    getters: {},
    mutations: {
        translateData: function (state, questions) {
            var array = [];
            for (var i = 0; i < questions.length; i++) {
                questions[i].incorrect_answers.push(questions[i].correct_answer);
                shuffle(questions[i].incorrect_answers);
            }
            state.questions = questions;
        },

        setLastId(state, id){
            state.unique_id = id+1;
        },
        setResults(state, answers) {
            state.results.correct_answers = answers.corrects;
            state.results.incorrect_answers = answers.incorrects;
        },
        setUser(state, user){
            state.user.full_name = user.full_name;
            state.company = user.compnay;
            state.email = user.email;
        },

        setUserQuestion(state, question){
            state.userQuestions.push(question);
        },
        setInitializeUserQuestion(state){
          state.userQuestions = [];
        },

        setTotalTimetoplay(state, time){
            state.time.minutes = time.minutes;
            state.time.seconds = time.second;
            state.time.millisecond = time.millisecond
        },

        setInitialName (state, initial_name){
            state.initial_name = initial_name;
        },
        setMilliseconds(state, millisecond){
            state.millisecond = millisecond;
        }
    },
    getters: {
        getScore(state) {
            var total = state.results.correct_answers + state.results.incorrect_answers;
            return state.results.correct_answers + " / " + total
        },

        getLastId(state){
          return state.unique_id;
        },

        getIncorrectCorrect(state){
          return state.results;
        },

        getUser(state){
            return state.user;
        },
        getUserQuestion(state){
          return state.userQuestions;
        },

        getTotalTimeToPlay(state){
          return state.time;
        },

        getInitialName(state){
            return state.initial_name;
        },
        getMilliseconds(state){
            return state.millisecond;
        }
    },

    actions: {
        getQuestions(context) {
            return new Promise(function (resolve, reject) {
                var newObject = JSON.parse(JSON.stringify(data));
                var quize_question = getQuizquestion(newObject);
                // console.log(quize_question);
                context.commit('translateData', quize_question);
                resolve(true);
            })
        }
    }
}),

shuffle = function (a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
},
getQuizquestion = function(data) {
    // data random
    var result = [];
    var easy = [];
    var medium = [];
    var hard = [];


    var duplicate_number = [];
    var incomplete = true;
    while(incomplete){
        var random_number = Math.floor(Math.random() * 59) +1;

        if(duplicate_number.includes(random_number)){
            continue
        }

        if(data[random_number].difficulty == 'easy'){
            if(easy.length < 3){
                easy.push(data[random_number]);
                duplicate_number.push(random_number);
            }
        }

        if(data[random_number].difficulty == 'medium'){
            if(medium.length < 3){
                medium.push(data[random_number]);
                duplicate_number.push(random_number);
            }
        }

        if(data[random_number].difficulty == 'hard'){
            if(hard.length < 4){
                hard.push(data[random_number]);
                duplicate_number.push(random_number);
            }
        }

        if(duplicate_number.length == 10){
            incomplete = false;
        }
    }

    // Push 10 question to resutl variable
    result.push(... easy);
    result.push(... medium);
    result.push(... hard);
    var quize_data_shuffle = shuffle(result);
    return quize_data_shuffle;
}


