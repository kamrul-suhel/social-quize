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
      width: 90%;
      margin:0 auto;
      padding-top:130px;
      min-height:430px;
  }
</style>