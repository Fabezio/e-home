<script lang="ts">
	import { page } from '$app/stores';
	import { grayscale } from '$lib/store';
	import { links } from '$lib/data/links';
	import Icon from '$lib/components/UI/Icon.svelte';
	import Sizes from '$lib/test/Sizes.svelte';
	import Dataset from '$lib/test/Dataset.svelte';
	// import About from 'src/routes/about.svelte';
	// let showNavbar = true
	// $: console.log(showNavbar)
	// function collapse() {
	//   showNavbar = !showNavbar
	//   if (showNavbar) $grayscale = "50%"
	//   else $grayscale = "0%"

	// }
</script>

<Sizes />
<nav>
	<!-- <nav on:click={collapse} on:mouseover={collapse} on:focus={collapse} on:mouseleave={collapse} class:drawer={showNavbar == false}> -->

	<ul>
		{#each links as { url, label, icon }}
			<li class="nav-item" class:active={$page.url.pathname === url}>
				<a class="nav-link" title={label} sveltekit:prefetch href={url}>
					<!-- <div class="disc" > -->
					<Icon {icon} />
					<!-- </div> -->
					<span>{label}</span></a
				>
			</li>
		{/each}
	</ul>
</nav>

<!-- <Dataset dataset={links} /> -->
