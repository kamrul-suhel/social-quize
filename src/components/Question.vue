<template>
    <section class="question">
        <transition name="fade">
            <h2 class="large text-center">{{ question }}</h2>
        </transition>
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
</style>