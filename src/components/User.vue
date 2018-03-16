<template>
    <div class="start d-flex align-items-center">

        <div class="card w-50 text-center py-4 mx-auto">

            <div class="w-75 mx-auto">
                <img src="../assets/logo.png" alt="" class="img-fluid">
            </div>

            <h1>User detail</h1>

            <div class="w-50 mx-auto" id="btn-container">
                <div class="container">
                    <!--<label for="user" class="bits w-100 bold mt-3">Enter your username:</label>-->
                    <input type="text" class="bits w-100" v-model="user.name" maxlength="30">

                    <button class="action-button animate blue mt-4 mb-2 w-100" v-on:click="gotoGame()">Start game</button>

                    <router-link to="/">
                        <button class="action-button animate green my-2 w-100">Back</button>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user',
        data() {
            return {
                user:{
                    name: ''
                }
            }
        },
        methods: {
            gotoGame(){
                var router = this.$router;
                this.$store.commit('setUser', this.user.name);
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .start {
        height: 100vh;
    }
</style>
