<template>
    <div class="game_timer">
        <div class="game_timer_score">
            <h3>{{total}}/10</h3>
        </div>

        <div class="game_timer_time">
            <h3>{{ time.minutes ? time.minutes+':' : '' }} {{time.second}}s</h3>
        </div>
    </div>
</template>

<script>
    import VueTimers from 'vue-timers/mixin'
    export default {
        mixins: [VueTimers],
        data() {
            return {
                time:{
                    minutes:0,
                    second: 0,
                },
            }
        },
        props:[
            'total'
        ],
        methods: {
            log(){
                this.time.second++;
                if(this.time.second >=60){
                    this.time.minutes++;
                    this.time.second = 0;
                }
                this.$emit('total_time',this.time);
            },

            totalTimeMillisecond(){
                var elapsedTime = Date.now() - this.startTime;
                this.$store.commit('setMilliseconds', elapsedTime);
            }


        },
        created :function(){
            this.$options.interval = setInterval(this.log, 1000);
        },
        destroyed: function(){
        }
    }
</script>

<style>
    .game_timer_score{
        position:absolute;
        left:100px;
        top:30px;
    }

    .game_timer_time{
        position:absolute;
        right:100px;
        top:30px;
    }
</style>
