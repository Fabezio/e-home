<script lang="ts">
	import type { User } from '$lib/data/types';
	import CardBody from './CardBody.svelte';
	// import CardHeader from "./CardHeader.svelte";
	export let user: User;
</script>

<div class="card">
	<!-- {#each users as user} -->

	<h3>Info générale</h3>
	<CardBody {user} />
</div>
