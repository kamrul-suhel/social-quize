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
                var quiz_question = getQuizquestion(newObject);
                context.commit('translateData', quiz_question);
                resolve(true);
            })
        }
    }
}),

shuffle = function (a, n) {
    var shuffled = a.sort(() => .5 - Math.random());// shuffle  
    return shuffled.slice(0,n);
},

getQuizquestion = function(data) {
    // data random
    var q_easy = 3; // Max 24
    var q_medium = 4; // Max 17
    var q_hard = 3; // Max 19
    var result = [];

    var easy = shuffle(data.easy, q_easy);
    var medium = shuffle(data.medium, q_medium);
    var hard = shuffle(data.hard, q_hard);

    // // Push 10 question to resutl variable
    result.push(... easy);
    result.push(... medium);
    result.push(... hard);
    
    var quiz_data_shuffle = shuffle(result);
    return quiz_data_shuffle;
}


