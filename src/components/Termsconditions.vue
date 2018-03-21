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
                        <h2 class="sub_heading">Terms and Conditions</h2>
                        <p>UK residents of 18+ years only may participate in the UNILAD ‘Social Generation’ competition (“the Promotion”). The promotion will run on the 21st and 22nd  March 2018 (“the Promotion Period”). No purchase necessary for entry.</p>
                        <p>To Participate: Complete the quiz on the iPad provided and complete by entering your name, email address and company. The participants are allowed 1 turn per individual. 
                        <p>Full Terms &amp; prize details can be found below.</p>
                        <h2 class="sub_heading">Full Terms and Conditions</h2>
                        <ol>
                            <li>This Promotion is only open to legal residents of the United Kingdom who are aged 18 years or over, excluding anyone professionally associated with this Promotion.</li>
                            <li>Promotion Period: 21st and 22nd March.</li>
                            <li>To Enter:
                                <ul>
                                    <li>Complete the  quiz.</li>
                                    <li>Enter your full name, company and email address once completed.</li>
                                    <li>One entry per person.</li>
                                </ul>
                            </li>
                            <li>The prizes:
                                <ul>
                                    <li>There will be 1 prize per individual.</li>
                                </ul>
                            </li>    
                            <li>The winner of the Prize will be notified via the email address provided by midday Thursday 29th March and will need to respond to the email sent by midday Tuesday 3rd  April. If the winner does not respond within the stipulated timeframe, UNILAD reserves the right to disqualify that winner and select another winner.</li>
                            <li>The prize will be distributed within 28 days of the winner accepting the prize. </li>
                            <li>Prizes are non-transferable and no cash or other alternative to the prizes are available in whole or in part. In the event of unforeseen circumstances, the Promoter reserves the right to substitute an alternative reward of equal or greater value.</li>
                            <li>By entering, winners agree to participate in any publicity arranged by the Promoter or by its agencies.</li>
                            <li>By entering this Promotion, all participants will be deemed to have accepted these terms and conditions.</li>
                            <li>The Promoter will exercise its best endeavours to ensure that the Promotion runs as envisaged in a fair and proper manner and that prizes are duly received by the respective Winners. However, the Promoter does not assume any responsibility should for any circumstance this is not duly achieved. The Promoter reserves the right to cancel or change the Promotion should any exceptional or unforeseen circumstances arise.</li>
                            <li>The Promoter also has the right to disqualify any participant who the Promoter suspects and/or confirms that s/he tampered or abused the entry process or the Promotion itself. Participants who are suspected or are found to have acted fraudulently and/or dishonestly will not be entitled to the prize.</li>
                            <li>All entries must be made directly by the person entering the promotion.</li>
                            <li>These terms and conditions are governed by English Law and shall be subject to the exclusive jurisdiction of the courts or England and Wales.</li>
                        </ol>
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
    #app .terms_condition_box p{
        font-size: 20px;
        line-height: 25px;
    }
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