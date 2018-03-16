<template>
    <section class="user_detail">
        <section class="tc_heading">
            <div class="container top_heading">
                <div class="row top_heading_content">
                    <div class="col text-center">
                    </div>
                </div>
            </div>
        </section>
        <section class="terms_conditions">
            <div class="container">
                <div class="row">
                    <div class="terms_condition_box">
                        <h2>Terms and Conditions</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>
                        <p>type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                        <p>the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>
                        <p>type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                        <p>the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-center">
                        <router-link :to="'/your_detail'">
                            <button class="term_button">Back</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
    export default {
        name: 'term_condition',
        data() {
            return{
            }
        },
        methods:{
            submitForm() {

            }
        },
        created(){

        }

    }
</script>
<style>
    .tc_heading{
        background:#000;
    }
    .terms_conditions{
        background:#fff;
        height:100%;
    }

    .terms_condition_box{
        width:80%;
        background:#fff;
        color:#000;
        margin-top:-180px;
        margin-bottom:0px;
        margin-left:auto;
        margin-right:auto;
        padding:50px;
        border:1px solid #000;
    }

    .terms_condition_box h2{
        font-size:40px;
        font-style:italic;
    }
    .terms_condition_box p{
        font-size:18px;
    }

    .term_button{
        font-family:'giorgiosans-bold';
        font-weight:bold;
        font-style:italic;
        font-size:30px;
        line-height:30px;
        background:#000;
        color:#fff;
        width:150px;
        margin-top:40px;
        margin-bottom:80px;
        padding:10px 20px;
        border:none;
        cursor:pointer;
        border-radius:25px;
        padding-bottom:11px;
        -webkit-transition:all ease-in-out .2s;
        -moz-transition:all ease-in-out .2s;
        -ms-transition:all ease-in-out .2s;
        -o-transition:all ease-in-out .2s;
        transition:all ease-in-out .2s;
    }
    .term_button:hover{
        background:#777;
    }
</style>