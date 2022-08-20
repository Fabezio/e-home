<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
	import Card from '$lib/components/UI/Card.svelte';
	import Intro from '$lib/components/UI/Intro.svelte';
	import { user } from '$lib/data/users';
	// console.log(typeof user)
</script>

<svelte:head>
	<title>e-home</title>
	<meta name="description" content="e-home" />
</svelte:head>
<div>
	<Intro intro={user.intro} />
	<Card {user} />
</div>
