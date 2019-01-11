<template>
	<div style="background-color:#280338">
		<h3 style="color:white">Restaurant <b>{{restaurants[currentId].nom}}</b></h3>
		<img :src="restaurants[currentId].image"/><br>
		<label class="horaireLabel"><b>Horaires :</b>{{restaurants[currentId].horaireDebut + " - " + restaurants[currentId].horaireFin}} </label>
		
		<br>
		<label class="adresseLabel"><b>Adresse</b></label>
		
		<div class="mapDiv">
			<iframe :src="restaurants[currentId].iframe" width="420" height="360" frameborder="0" style="border:0" allowfullscreen></iframe>
		</div>
		<router-link :to="restaurants[currentId].commandePath" id="commande" class="navbar navbar-expand-lg navbar-light bg-light">Choisir son menu</router-link>
	</div>
</template>

<style lang="css">
@import "../assets/css/infosRestaurants.css";
</style>

<script src="../assets/js/infosRestaurant.js"></script>