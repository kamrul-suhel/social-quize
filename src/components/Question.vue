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
      margin:130px auto 0;
      min-height:300px;
  }
</style>