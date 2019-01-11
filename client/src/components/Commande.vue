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

<script>
	export default {
		data() {
			return {
				currentId: new URLSearchParams(document.location.search.substring(1)).get("id") - 1,
				panier: [],
				plats: [
					[
						{
							id: 1,
							quantite: 1,
							nom: "Lasagnes de viande",
							description: "Lasagnes de boeuf haché cuisiné à l'italienne pour 1 personne",
							prix: 23.50,
							image: "src/assets/img/meals/1.png"
						},

						{
							id: 2,
							quantite: 1,
							nom: "Poulet au curry",
							description: "Poulet (issu de l'agriculture biologique française) mijoté aux épices indiens",
							prix: 15.50,
							image: "src/assets/img/meals/2.png"
						},

						{
							id: 3,
							quantite: 1,
							nom: "Pièce d'entrecôte au grill",
							description: "Origine française. Intensité de la cuisson ''à point'' par défaut, autre cuisson sur demande. Sauce poivre ou échalotte au choix",
							prix: 20.50,
							image:"src/assets/img/meals/3.png"
						},

						{
							id: 4,
							quantite: 1,
							nom: "Cheeseburger steak-frites",
							description: "Origine française. Intensité de la cuisson ''à point'' par défaut, autre cuisson sur demande.",
							prix: 14.50,
							image:"src/assets/img/meals/4.png"
						}
					],

					[
						{
							id: 5,
							quantite: 1,
							nom: "Escalope à la milanaise",
							description: "Origine française. Servi avec des pâtes",
							prix: 10.50,
							image:"src/assets/img/meals/5.png"
						},

						{
							id: 6,
							quantite: 1,
							nom: "Magret de canard",
							description: "Origine France Sud Ouest, farci au raisins",
							prix: 23.90,
							image:"src/assets/img/meals/6.png"
						},

						{
							id: 7,
							quantite: 1,
							nom: "Blanquette de veau",
							description: "Napée de sauce à la crème et servi avec des légumes bouilliss",
							prix: 16.50,
							image:"src/assets/img/meals/7.png"
						},

						{
							id: 8,
							quantite: 1,
							nom: "Lasagnes de viande",
							description: "Lasagnes de boeuf haché cuisiné à l'italienne pour 1 personne",
							prix: 23.50,
							image: "src/assets/img/meals/1.png"
						}
					],

					[
						{
							id: 9,
							quantite: 1,
							nom: "Tomates farcies",
							description: "Cuisiné à la provançale. Farcis de viande",
							prix: 10.50,
							image: "src/assets/img/meals/9.png"
						},

						{
							id: 10,
							quantite: 1,
							nom: "Moules frites",
							description: "Cuisinées façon marinière.",
							prix: 9.90,
							image: "src/assets/img/meals/10.png"
						},

						{
							id: 11,
							quantite: 1,
							nom: "Couscous",
							description: "Cuisine orientale",
							prix: 13.40,
							image: "src/assets/img/meals/11.png"
						},

						{
							id: 12,
							quantite: 1,
							nom: "Crêpe sucrée",
							description: "Sauce caramel",
							prix: 6.50,
							image: "src/assets/img/meals/12.png"
						}
					],

					[
						{
							id: 13,
							quantite: 1,
							nom: "Poulet au curry",
							description: "Poulet (issu de l'agriculture biologique française) mijoté aux épices indiens",
							prix: 14.50,
							image:"src/assets/img/meals/2.png"
						},

						{
							id: 14,
							quantite: 1,
							nom: "Pavé de saumon",
							description: "Servi avec du riz et galettes de pommes de terre",
							prix: 15.50,
							image: "src/assets/img/meals/14.png"
						},

						{
							id: 15,
							quantite: 1,
							nom: "Escalope à la milanaise",
							description: "Origine française. Servi avec des pâtes",
							prix: 10.50,
							image:"src/assets/img/meals/5.png"
						},

						{
							id: 16,
							quantite: 1,
							nom: "Magret de canard",
							description: "Origine France Sud Ouest, farci au raisins",
							prix: 23.90,
							image:"src/assets/img/meals/6.png"
						}
					]
				]
			}
		}, 
		methods: {
			supprimer(lePanier, panier){
				for(let a=0; a<panier.length; a++){
					if(panier[a].nom == lePanier.nom){
						if(panier[a].quantite > 0){
							panier[a].quantite--;
						}
					}
					let prix = 0;
					for(let j = 0; j<panier.length; j++){
						prix += (panier[j].quantite * panier[j].prix);
					}
					let label = document.querySelector("#prixGlobal");
					label.innerHTML = "Prix total : " + prix + " €";
				}
			},
			calculerPrix(lePanier){
				let prix = 0;
				for(let j = 0; j<lePanier.length; j++){
					prix += (lePanier[j].quantite * lePanier[j].prix);
				}
				let label = document.querySelector("#prixGlobal");
				label.innerHTML = "Prix total : " +Math.round(prix*100)/100 + " €";
			},
			testMethod: function(lePlat, lePanier){
				let contient = false; 
				let index = 0;

				if(lePanier.length != null && lePanier.length > 0){
					for(let i=0; i<lePanier.length; i++){					
						if(lePanier[i].nom == lePlat.nom){
							contient=true;
							index = i;
						}
					}	
				}
				if(contient == true){
					lePanier[index].quantite++;
				}
				if(contient == false){
					lePanier.push(lePlat);
				}
				
			}
		}
	}
</script>