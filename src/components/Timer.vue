<template>
    <div class="game_timer_score">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="game_score text-left">
                        <h3><strong>{{total}}/10</strong></h3>
                    </div>
                </div>
                <div class="col-6">
                    <div class="game_timer text-right">
                        <h3><strong>{{time.minutes}}: {{time.second}}</strong></h3>
                    </div>
                </div>
            </div>
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

<style scoped>
    .game_timer_score{

    }
    .game_timer_score h3{
        font-size: 60px;
        font-family: 'giorgiosans-bold';
        font-weight: bolder;
        font-style: italic;
    }
</style>
