<template>
  <div class="results d-flex align-items-center">
    <div class="card w-75 animated bounce text-center py-4 mb-3 mx-auto">
      <doughnut></doughnut>
      <div class="container">
        <router-link to="/import">
          <button class="action-button animate blue my-2 w-100">Upload Score</button>
        </router-link>
  
        <router-link to="/">
          <button class="action-button animate green w-100">Home Page</button>
        </router-link>
  
      </div>
    </div>
  
  </div>
</template>

<script>
  import Doughnut from './Doughnut'
  export default {
    name: 'results',
    data() {
      return {
  
      }
    },
    components: {
      "doughnut": Doughnut
    },
    created: function(){
        var upload = {
            time: this.$store.state.time.minites +':'+ this.$store.state.time.seconds,
            username: this.$store.state.user.name,
            email: this.$store.state.user.email,
            score: this.$store.getters.getScore
        };
        console.log("Time info: ");
//        this.$http.post('https://unilad-expo-quiz.firebaseio.com/results.json', upload)
//            .then(function(data) {
//                console.log(data)
//                this.$router.push({
//                    name: 'Start'
//                })
//            })
//            .catch(function(data) {
//                console.log("Error: ", data)
//            });
      console.log(this.$store.state.time.minites +':'+ this.$store.state.time.seconds);
      console.log("user is info:");
      console.log("Name: " + this.$store.state.user.name +' | Email: ' + this.$store.state.user.email);
      console.log("Current result");
      console.log(this.$store.state.results);

    }
  }
</script>

<style>
  .results {
    min-height: 100vh
  }
</style>