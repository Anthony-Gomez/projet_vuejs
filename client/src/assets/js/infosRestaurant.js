export default {
	data() {
		return {
			currentId: new URLSearchParams(document.location.search.substring(1)).get("id") - 1,
			restaurants: [
				{id: 1, 
				iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11553.261086884793!2d7.051803053032211!3d43.62079668191075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2b05505a87dd%3A0xde348a29cd1cdc62!2sLe+Court+Central!5e0!3m2!1sfr!2sfr!4v1547127885125", 
				nom: "Le Court Central", 
				image: "src/assets/img/restaurants/rest1.jpg", 
				infoPath: "/infosRestaurant?id=1", 
				horaireDebut: "11:00", 
				horaireFin: "22:00"},
				
				{id: 2, iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11553.188465471452!2d7.0639989!3d43.6211746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0eb55a1f1259cc5!2sL&#39;Atelier+67!5e0!3m2!1sfr!2sfr!4v1547132013268", 
				nom: "L'Atelier 67", 
				image: "src/assets/img/restaurants/rest2.jpg", 
				infoPath: "/infosRestaurant?id=2",
				commandePath: "/Commande?id=2",
				horaireDebut: "12:00", 
				horaireFin: "23:00"},
				
				{id: 3, iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11553.249403739503!2d7.051717219247073!3d43.62085748057274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2b0160c55613%3A0xd72160d1e46f1a51!2sRestaurant+La+Dolce+Vita!5e0!3m2!1sfr!2sfr!4v1547128423579", 
				nom: "La Dolce Vita", 
				image: "src/assets/img/restaurants/rest3.jpg", 
				infoPath: "/infosRestaurant?id=3", 
				commandePath: "/Commande?id=3",
				horaireDebut: "09:00", 
				horaireFin: "19:00"},
				
				{id: 4, iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11553.243562166519!2d7.051674302354517!3d43.6208878798801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2ba7b56bcd07%3A0xc55714d8e82ce4b8!2sLes+Amouriers!5e0!3m2!1sfr!2sfr!4v1547128546845", 
				nom: "Les Amouriers", 
				image: "src/assets/img/restaurants/rest4.jpg", 
				infoPath: "/infosRestaurant?id=4",
				commandePath: "/Commande?id=4", 
				horaireDebut: "12:00", 
				horaireFin: "19:00"}
			]
		}
	}	
}