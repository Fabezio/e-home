<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	

	// import Counter from '$lib/Counter.svelte';
	import Card from "$lib/UI/Card.svelte";
	import Intro from "$lib/UI/Intro.svelte";
	import type {User} from "$lib/data/types"
	
	const user: User = 
		{
			image: "profile_3.jpg",
			firstname: "Fabrice",
			lastname: "Riquet",
			age: "49",
			birthdate: "04/05/1973",
			job: "Agent de maitrise Sécurité Incendie",
			email: "fabezio@outlook.fr",
			phone: "06 52 81 29 46",
			hobbies: ["Cinéma SF & fantastique", "informatique"],
			address: {
				street: "Rue du Rhin",
				number: "3",
				zipcode: "44470",
				city: "Carquefou",
				country: "France"
			}
			
		}
		// console.log(typeof user)
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <section> -->
	
	<!-- <div class="frame">
</div> -->

		<!-- <span class="welcome">
		<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span> -->
		<!-- 

		to your new<br />SvelteKit app -->
	<Intro intro={user} />
	<Card {user} />

	<!-- <h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2> -->

	

	<!-- <Counter /> -->
<!-- </section> -->

<style lang="scss" >

</style>
