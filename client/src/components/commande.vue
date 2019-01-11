<template>
	<div class="containerCommande">
		<div class="paimentClass">
		<div class="commande">Ma commande</div>
			<hr>
			<div id="panier" v-on:click="supprimer(p, panier)" v-for="p in panier" :key="p">
				<font-awesome-icon icon="minus-circle"/> {{ p.quantite }} {{ p.nom }} ({{p.prix}} €)
			</div>
			<hr v-if="panier.length>0">
			<div id="prixGlobal"></div>
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
				</span>
				<br>{{plat.prix}} €
			</div>
		</div>
	</div>
</template>

<style lang="css">
@import "../assets/css/commande.css";
</style>

<script src="../assets/js/commande.js"></script>