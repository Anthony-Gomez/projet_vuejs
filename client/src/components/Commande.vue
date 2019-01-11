<template>
	<div class="containerCommande">
		<div class="paimentClass">
		<div style="text-align: center; margin-right: 10px; font-weight: bold;">Ma commande</div>
			<hr style="margin-top:25px;">
			<div id="panier" style="text-align: left; margin-left: 120px;" v-on:click="supprimer(p, panier)" v-for="p in panier" :key="p">
				<font-awesome-icon icon="minus-circle"/> {{ p.quantite }} {{ p.nom }} ({{p.prix}} €)
			</div>
			<hr style="margin-top:25px;" v-if="panier.length>0">
			<div style="text-align: right; margin-right: 10px; font-weight: bold;" id="prixGlobal"></div>
			<router-link to="/Restaurants" id="paimentInsideClass" class="navbar navbar-expand-lg navbar-light bg-light">
				<label class="labelInsidePaiment">
					<font-awesome-icon icon="shopping-basket"/> Passer commande
				</label>
			</router-link>
		</div>

	
		<div class="menuOutsideClass" v-on:click="testMethod(plat,panier); calculerPrix(panier);" v-for="plat in plats[currentId]" :key="plat">
		<img :src="plat.image" class="imageClass">
			<div class="menuInsideClass">
				{{ plat.nom }}<br>
				<span class="spanClass"> 
					{{ plat.description}} <br>
				</span> <br>
				{{plat.prix}} €
			</div>
		</div>
	</div>
</template>

<style lang="css">
@import "../assets/css/commande.css";
</style>

<script src="../assets/js/commande.js"></script>