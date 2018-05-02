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
      width: 90%;
      margin:0 auto;
      padding-top:130px;
      min-height:430px;
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


  @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape) {
      h2.large{
          font-size:70px;
          line-height:90px;
      }

      .question{
          min-height:auto;
      }


  }
</style>