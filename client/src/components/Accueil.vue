<template>
	<div id="user" class=".center-div"> 
	</div>
</template>

<style scoped>
	h2, h3{
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: "poppinssemibold";
  		color: white;
		position:fixed;
		float: left;
	}
	h3{
		margin-left: 590px;
		margin-top: 180px;
	}
	h2{
		position: relative; /* postulat de départ */
  		top: 50%; left: 50%; /* à 50%/50% du parent référent */
  		transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */
	}

	#user{
		float: left;
		width: 100%;
		height: 666px;
		background-image: url("/src/assets/background_image.jpg");
		background-repeat: no-repeat !important;
		text-align: center;
	}
	p {
		font-style: italic;
		color:red; 
	}
	#restoClass{
		width: 240px;
		background-color: #280338!important;
		color: white;
		float: left;
		position: absolute; /* postulat de départ */
  		top: 70%; left: 50%; /* à 50%/50% du parent référent */
  		transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */
	}
	.title_text{
		background-color: black;
		opacity: 0.8;
		font-family: 'Major Mono Display', monospace;
		font-size: larger;
	}
	.center-div{
		margin: 0 auto;
		width: 100px;
	}
</style>