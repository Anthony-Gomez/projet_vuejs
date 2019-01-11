<template>
	<div id="user">
		<h3>Liste des restaurants</h3>
		<div v-for="resto in restaurants" :key="resto"><router-link :to="resto.infoPath">
				<div class="restaurants">
					<h5>{{ resto.nom }}</h5>
					<img class="rounded mx-auto d-block" :src="resto.image" :alt="resto.nom">
				</div>
				</router-link>
		</div>
		<br>
	</div>
</template>

<style lang="css">
@import "../assets/css/restaurants.css";
</style>

<script src="../assets/js/restaurants.js"></script>