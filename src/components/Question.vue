<template>
    <div class="container">
        <transition name="fade">
            <div class="row heading">
                <div class="col">
                    <h2 class="text-center">{{ question }}</h2>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
   export default{
       props:['question']
   }
</script>
<style  >
</style>