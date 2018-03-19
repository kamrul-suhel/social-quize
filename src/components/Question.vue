<template>
    <section class="question animation-heading">
        <h2 class="large text-center">{{ question }}</h2>
    </section>
</template>
<script>
   export default{
       props:['question']
   }
</script>
<style scoped>

.question{
    margin-top:150px;
}
    .animation-heading {
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        -o-animation-fill-mode: forwards;
        -ms-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-delay: .5s;
        -moz-animation-delay: .5s;
        -o-animation-delay: .5s;
        animation-delay: .5s;
        animation-duration: 1.5s;
        -moz-animation-duration: 1.5s;
        -webkit-animation-duration: 1.5s;
        -o-animation-duration: 1.5s;
        animation-duration: 1.5s;
        -webkit-animation-name: animation-heading;
        -moz-animation-name: animation-heading;
        -o-animation-name: animation-heading;
        animation-name: animation-heading;

    }

    @keyframes animation-heading {
        from{
            opacity:0;
        },
        to{
            opacity:1;
        }
    }
</style>