<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
	import Card from "$lib/components/UI/Card.svelte";
	import Intro from "$lib/components/UI/Intro.svelte";
	import {user} from "$lib/data/users"
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
		<div>

			<Intro intro={user.intro} />
			<Card {user} />
		</div>

	<!-- <h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2> -->

	

	<!-- <Counter /> -->
<!-- </section> -->

<style lang="scss" >
@media (min-width: var(--sm)) {

}

@media (min-width: var(--md)) {

}

@media (min-width: var(--lg)) {

}

@media (min-width: var(--xl)) {

}

@media (min-width: var(--xxl)) {

}

</style>
