<template>
	<div id="app">
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'app',
	}
</script>

<style>

	.fade-enter-active, .fade-leave-active {
		transition-property: opacity;
		transition-duration: .25s;
	}

	.fade-enter-active {
		transition-delay: .25s;
	}

	.fade-enter, .fade-leave-active {
		opacity: 0
	}

	@font-face {
		font-family: 'giorgiosans-regular';
		src: url('./assets/fonts/giorgio_sans/GiorgioSans-Regular.otf');
	}
	@font-face {
		font-family: 'giorgiosans-bold';
		src: url('./assets/fonts/giorgio_sans/GiorgioSans-Heavy.otf');
	}

	@font-face {
		font-family: 'giorgiosans-bolditalic';
		src: url('./assets/fonts/giorgio_sans/GiorgioSans-Bolditalic.otf');
	}
	@font-face {
		font-family: 'gotham-medium';
		src: url('./assets/fonts/gotham/Gotham-Medium.otf');
	}

	@font-face {
		font-family: 'gotham-light';
		src: url('./assets/fonts/gotham/Gotham-Light.otf');
	}
	html{
		height:100%;
	}
	body{
		font-family:'giorgiosans-regular';
		background:#000;
		height:100%;
	}
	.animate {
		transition: all 0.1s;
		-webkit-transition: all 0.1s;
	}
	
	#app {
		color:#fff;
		font-size:24px;
		height:100%
	}

	.top_heading{
		height:250px;
		display:table;
		font-style:italic;
	}

	.top_heading_content{
		display:table-cell;
		vertical-align: middle;
		text-align:center;
	}
	
	* {
		font-family: 'giorgiosans-regular';
	}
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	:focus {
		outline: 0!important;
	}

	h2{
		font-size:90px;
		font-family:giorgiosans-bolditalic
	}
	h2.sub_heading{
		font-size:30px;
	}

	p{
		font-size:34px;
	}

	
	.action-button {
		position: relative;
		padding: 10px 40px;
		margin: 0px 10px 10px 0px;
		float: left;
		border-radius: 10px;
		font-size: 25px;
		border: 0;
		color: #FFF;
		text-decoration: none;
	}
	
	.blue {
		background-color: #3498DB;
		border-bottom: 5px solid #2980B9;
		text-shadow: 0px -2px #2980B9;
	}
	
	.red {
		background-color: #E74C3C;
		border-bottom: 5px solid #BD3E31;
		text-shadow: 0px -2px #BD3E31;
	}
	
	.green {
		background-color: #82BF56;
		border-bottom: 5px solid #669644;
		text-shadow: 0px -2px #669644;
	}
	
	.yellow {
		background-color: #F2CF66;
		border-bottom: 5px solid #D1B358;
		text-shadow: 0px -2px #D1B358;
	}
	
	.action-button:active {
		transform: translate(0px, 5px);
		-webkit-transform: translate(0px, 5px);
	}
	
	.disabled {
		pointer-events: none
	}

	.quiz-button{
		margin-top: 25px;
		color: #000;
		background:#cdcdcd;
		border: none;
		border-radius: 30px;
		font-size: 30px;
		cursor: pointer;
		transition: all ease-in-out .2s;
		font-weight: bold;
		font-style: italic;
		padding: 0px 20px;
		padding-bottom: 1px;
		-webkit-transition:all ease-in-out .2s;
		-moz-transition:all ease-in-out .2s;
		-o-transition:all ease-in-out .2s;
		-ms-transition:all ease-in-out .2s;
		transition:all ease-in-out .2s;
	}
	.quiz-button:hover{
		background:#fff;
		box-shadow:0px 0px 5px rgba(255,255,255,.5);
	}

	/* custome scroll style */
	.mCSB_inside > .mCSB_container{
		margin:0;
	}

</style>
